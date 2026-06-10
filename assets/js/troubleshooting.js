(function () {
  'use strict';
  const filter = document.getElementById('matrix-filter');
  const severity = document.getElementById('matrix-severity');
  const table = document.getElementById('matrix-table');
  const count = document.getElementById('matrix-count');
  if (!table) return;

  const rows = Array.from(table.querySelectorAll('tbody tr'));

  function update() {
    const q = (filter?.value || '').trim().toLowerCase();
    const sev = severity?.value || 'all';
    let visible = 0;
    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const rowSev = row.dataset.severity;
      const matchQ = !q || text.includes(q);
      const matchS = sev === 'all' || rowSev === sev;
      const show = matchQ && matchS;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (count) count.textContent = visible + ' of ' + rows.length + ' entries';
  }

  filter?.addEventListener('input', update);
  severity?.addEventListener('change', update);
  update();
})();
