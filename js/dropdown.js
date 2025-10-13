document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.custom-dropdown');
  const btn = dropdown.querySelector('.dropdown-btn');
  const list = dropdown.querySelector('.dropdown-list');
  const searchInput = document.getElementById('searchInput');

  // Abrir/cerrar dropdown
  btn.addEventListener('click', () => {
    const isOpen = dropdown.classList.contains('open');
    dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', !isOpen);
    list.setAttribute('aria-hidden', isOpen);
  });

  // Selección de opción
  list.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
      btn.textContent = item.textContent + ' ▼';
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      list.setAttribute('aria-hidden', 'true');
      searchInput.focus();
    });
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      list.setAttribute('aria-hidden', 'true');
    }
  });

  // Teclado (opcional)
  dropdown.addEventListener('keydown', (e) => {
    const focused = document.activeElement;
    const items = Array.from(list.querySelectorAll('li'));
    let index = items.indexOf(focused);

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (index < items.length - 1) items[index + 1].focus();
        else items[0].focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (index > 0) items[index - 1].focus();
        else items[items.length - 1].focus();
        break;
      case 'Escape':
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        list.setAttribute('aria-hidden', 'true');
        btn.focus();
        break;
      case 'Enter':
        if (items.includes(focused)) {
          focused.click();
        }
        break;
    }
  });
});
