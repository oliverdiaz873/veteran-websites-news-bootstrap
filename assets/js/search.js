// Mostrar/ocultar input del buscador y manejar la redirección a resultados
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.btn-outline-primary');
    const searchInput = document.querySelector('.form-control[type="search"]');
    const searchForm = document.querySelector('form[role="search"]');
    let isInputVisible = false;

    // Función para manejar la búsqueda
    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query !== '') {
            // Determinar la ruta correcta hacia la página de búsqueda
            const path = window.location.pathname;
            let searchPath = '';

            if (path.includes('/pages/news/')) {
                searchPath = '../../search/index.html';
            } else if (path.includes('/pages/category/')) {
                searchPath = '../search/index.html';
            } else if (path.includes('/pages/search/')) {
                searchPath = 'index.html';
            } else if (path.includes('/pages/index.html') || path.endsWith('/pages/')) {
                searchPath = 'search/index.html';
            } else {
                // Fallback para otros casos
                searchPath = 'pages/search/index.html';
            }

            // Remover acentos para búsqueda más flexible
            const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            
            window.location.href = `${searchPath}?query=${encodeURIComponent(normalizedQuery)}`;
        }
    };

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function (e) {
            e.preventDefault();

            if (!isInputVisible) {
                // Mostrar input y hacer focus
                searchInput.classList.add('show');
                searchInput.focus();
                isInputVisible = true;
                // Cambiar icono a X grande
                searchButton.innerHTML = '<i class="bi bi-x-lg"></i>';
            } else {
                // Ocultar input
                searchInput.classList.remove('show');
                isInputVisible = false;
                // Cambiar icono a lupa
                searchButton.innerHTML = '<i class="bi bi-search"></i>';
            }
        });

        // Permitir búsqueda al presionar Enter
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch();
            }
        });

        // Manejar el submit del formulario si existe
        if (searchForm) {
            searchForm.addEventListener('submit', function (e) {
                e.preventDefault();
                performSearch();
            });
        }
    }
});
