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
                        <img src="${noticia.imagen}" alt="${noticia.titulo}" class="img-fluid rounded-top" style="height: 200px; object-fit: cover;">
                        <div class="p-3 d-flex flex-column flex-grow-1">
                            <span class="badge bg-primary align-self-start mb-2">${noticia.categoria}</span>
                            <h3 class="h5 fw-bold mb-2">${noticia.titulo}</h3>
                            <p class="small text-muted mb-2">${noticia.fecha}</p>
                            <p class="small flex-grow-1">${noticia.resumen}</p>
                            <span class="text-primary fw-bold mt-2">Leer más <i class="bi bi-arrow-right"></i></span>
                        </div>
                    </a>
                </article>
            </div>
        `;
    };

    if (query && query.trim() !== '') {
        const queryLower = query.toLowerCase();

        // Filtrar noticias (asumiendo que noticias.js ya cargó el array 'noticias')
        const resultados = noticias.filter(n =>
            n.titulo.toLowerCase().includes(queryLower) ||
            n.categoria.toLowerCase().includes(queryLower) ||
            n.resumen.toLowerCase().includes(queryLower)
        );

        let html = `
            <div class="container py-5">
                <div class="row mb-4">
                    <div class="col-12">
                        <h2 class="h3 border-bottom pb-3">Resultados de búsqueda para: <span class="text-primary">"${query}"</span></h2>
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
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search text-muted" style="font-size: 4rem;"></i>
                    <h3 class="mt-4">No se encontraron resultados</h3>
                    <p class="text-muted">Intenta con otros términos como "economía", "deporte" o "inflación".</p>
                    <a href="../index.html" class="btn btn-primary mt-3">Volver al inicio</a>
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
                <p>Ingresa un término en el buscador de arriba para encontrar noticias.</p>
            </div>
        `;
    }
});
