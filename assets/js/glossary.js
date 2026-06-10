(function () {
  'use strict';
  const input = document.getElementById('glossary-filter');
  const content = document.getElementById('glossary-content');
  if (!input || !content) return;

  const items = Array.from(content.querySelectorAll('.glossary-item'));
  const sections = Array.from(content.querySelectorAll('section'));

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      items.forEach((el) => (el.style.display = ''));
      sections.forEach((s) => (s.style.display = ''));
      return;
    }
    sections.forEach((s) => (s.style.display = 'none'));
    items.forEach((el) => {
      const term = el.dataset.term || '';
      const def = el.querySelector('dd')?.textContent.toLowerCase() || '';
      const show = term.includes(q) || def.includes(q);
      el.style.display = show ? '' : 'none';
      if (show) {
        const section = el.closest('section');
        if (section) section.style.display = '';
      }
    });
  });
})();
