// Manejar la visualización de resultados de búsqueda
document.addEventListener('DOMContentLoaded', function () {
    const resultsContainer = document.querySelector('main');
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (!resultsContainer) return;

    // Actualizar el título de la página con el término de búsqueda
    const pageTitle = document.querySelector('title');
    if (query) {
        pageTitle.textContent = `Resultados para "${query}" | NewsHub`;
    }

    // Función para renderizar una noticia
    const renderNoticia = (noticia) => {
        return `
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="news-card h-100 shadow-sm">
                    <a href="${noticia.url}" class="text-decoration-none text-dark d-flex flex-column h-100">
                        <img src="${noticia.imagen}" alt="${noticia.titulo}" class="img-fluid rounded-top">
                        <div class="p-3 d-flex flex-column flex-grow-1">
                            <span class="badge bg-danger align-self-start mb-2">${noticia.categoria}</span> <!-- Badge de categoría de la noticia -->
                            <h3 class="h5 fw-bold mb-2">${noticia.titulo}</h3>
                            <p class="small text-muted mb-2">${noticia.fecha}</p>
                            <p class="small flex-grow-1">${noticia.resumen}</p>
                            <span class="text-danger fw-bold mt-2">Leer más <i class="bi bi-arrow-right"></i></span> <!-- Botón "Leer más" de la tarjeta -->
                        </div>
                    </a>
                </article>
            </div>
        `;
    };

    if (query && query.trim() !== '') {
        const queryLower = query.toLowerCase();
        const normalizedQuery = query.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        // Filtrar noticias (asumiendo que noticias.js ya cargó el array 'noticias')
        const resultados = noticias.filter(n => {
            const normalizedTitulo = n.titulo.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const normalizedCategoria = n.categoria.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const normalizedResumen = n.resumen.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            
            return normalizedTitulo.includes(normalizedQuery) ||
                   normalizedCategoria.includes(normalizedQuery) ||
                   normalizedResumen.includes(normalizedQuery);
        });

        let html = `
            <div class="container py-5">
                <div class="row mb-4">
                    <div class="col-12">
                        <h2 class="h3 border-bottom pb-3">Resultados de búsqueda para: <span class="text-danger">"${query}"</span></h2> <!-- Término de búsqueda resaltado -->
                        <p class="text-muted">Se encontraron ${resultados.length} noticias relacionadas.</p>
                    </div>
                </div>
                <div class="row">
        `;

        if (resultados.length > 0) {
            resultados.forEach(n => {
                html += renderNoticia(n);
            });
        } else {
            html += `
                <div class="no-results">
                    <i class="bi bi-search search-icon"></i>
                    <h3>No se encontraron resultados</h3>
                    <p>Intenta con otros términos como "economía", "deporte" o "inflación".</p>
                    <a href="../index.html" class="btn-back">Volver al inicio</a> <!-- Botón para volver al inicio cuando no hay resultados -->
                </div>
            `;
        }

        html += `
                </div>
            </div>
        `;

        resultsContainer.innerHTML = html;
    } else {
        // Si no hay query, mostrar mensaje o redirect
        resultsContainer.innerHTML = `
            <div class="container py-5 text-center">
                <h2>¿Qué estás buscando?</h2>
                <p>Usa el buscador para encontrar las últimas noticias</p>
                <a href="../index.html" class="btn btn-primary">Volver al inicio</a>
            </div>
        `;
    }
});
