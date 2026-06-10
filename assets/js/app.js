/**
 * Core app: theme toggle, mobile sidebar, and search.
 */
(function () {
  'use strict';

  const sidebar = document.getElementById('sidebar');
  const scrim = document.getElementById('scrim');
  const menuBtn = document.getElementById('menu-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const searchOpen = document.getElementById('search-open');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  const isSubpage = document.body.dataset.page && document.body.dataset.page !== 'home';
  let searchActive = 0;

  function getTheme() {
    return localStorage.getItem('theme') || 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    }
  }

  function openSidebar() {
    sidebar?.classList.add('open');
    scrim?.classList.add('show');
  }

  function closeSidebar() {
    sidebar?.classList.remove('open');
    scrim?.classList.remove('show');
  }

  function resolveSearchHref(entry) {
    if (!entry?.to) return '#';
    if (!isSubpage) return entry.to;
    if (entry.toPages) {
      const hash = entry.to.includes('#') ? entry.to.slice(entry.to.indexOf('#')) : '';
      return entry.toPages + hash;
    }
    if (entry.to.startsWith('pages/')) return entry.to.slice(6);
    if (entry.to === 'index.html') return '../index.html';
    return entry.to;
  }

  function search(query) {
    const index = window.HANDBOOK_SEARCH_INDEX || [];
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);

    const terms = q.split(/\s+/);
    return index
      .map((entry) => {
        const haystack = (
          entry.title + ' ' + entry.crumb + ' ' + (entry.keywords || '') + ' ' + (entry.meta || '')
        ).toLowerCase();
        let score = 0;
        for (const t of terms) {
          if (entry.title.toLowerCase().includes(t)) score += 5;
          if (haystack.includes(t)) score += 2;
        }
        return { entry, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((r) => r.entry);
  }

  function renderSearchResults(results) {
    if (!searchResults) return;
    if (!results.length) {
      searchResults.innerHTML =
        '<div class="search-empty">No results for “' + (searchInput?.value || '') + '”.</div>';
      return;
    }
    searchResults.innerHTML = results
      .map((entry, i) => {
        const href = resolveSearchHref(entry);
        return (
          '<a href="' + href + '" class="search-result' + (i === searchActive ? ' active' : '') + '" data-index="' + i + '">' +
          '<div class="search-result__crumb">' + entry.crumb + '</div>' +
          '<div class="search-result__title">' + entry.title + '</div>' +
          (entry.meta ? '<div class="search-result__meta">' + entry.meta + '</div>' : '') +
          '</a>'
        );
      })
      .join('');
  }

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = false;
    searchActive = 0;
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults(search(window.HANDBOOK_SEARCH_INDEX || []).slice(0, 8));
    }
  }

  function closeSearch() {
    if (searchOverlay) searchOverlay.hidden = true;
  }

  menuBtn?.addEventListener('click', openSidebar);
  scrim?.addEventListener('click', closeSidebar);
  themeToggle?.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  searchOpen?.addEventListener('click', openSearch);
  searchOverlay?.addEventListener('click', (e) => {
    if (e.target === searchOverlay) closeSearch();
  });

  searchInput?.addEventListener('input', () => {
    searchActive = 0;
    renderSearchResults(search(searchInput.value));
  });

  searchResults?.addEventListener('mouseover', (e) => {
    const link = e.target.closest('.search-result');
    if (!link) return;
    searchActive = parseInt(link.dataset.index, 10);
    searchResults.querySelectorAll('.search-result').forEach((el) => el.classList.remove('active'));
    link.classList.add('active');
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchOverlay?.hidden) openSearch();
      else closeSearch();
      return;
    }
    if (searchOverlay?.hidden) return;
    const results = search(searchInput?.value || '');
    if (e.key === 'Escape') closeSearch();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchActive = Math.min(searchActive + 1, results.length - 1);
      renderSearchResults(results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchActive = Math.max(searchActive - 1, 0);
      renderSearchResults(results);
    } else if (e.key === 'Enter' && results[searchActive]) {
      e.preventDefault();
      window.location.href = resolveSearchHref(results[searchActive]);
    }
  });

  document.querySelectorAll('.sidebar .nav-link').forEach((link) => {
    link.addEventListener('click', closeSidebar);
  });

  if (window.location.hash) {
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView(), 300);
  }

  setTheme(getTheme());
})();
