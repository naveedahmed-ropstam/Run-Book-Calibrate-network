(function () {
  'use strict';
  const filters = document.getElementById('screen-filters');
  if (!filters) return;

  const buttons = filters.querySelectorAll('.screen-filter');
  const sections = document.querySelectorAll('.screen-section');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const system = btn.dataset.system;
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      sections.forEach((sec) => {
        if (system === 'all' || sec.dataset.system === system) {
          sec.classList.remove('hidden');
        } else {
          sec.classList.add('hidden');
        }
      });
    });
  });
})();
