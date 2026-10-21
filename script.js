document.documentElement.classList.add('enhanced');
const buttons = [...document.querySelectorAll('[data-view]')];
const panels = [...document.querySelectorAll('[data-panel]')];
function showView(view) {
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
  panels.forEach(panel => { panel.hidden = panel.dataset.panel !== view; });
}
buttons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
showView('error');
