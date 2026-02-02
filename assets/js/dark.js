// Dark Mode Toggle - NewsHub

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');
    
    // Verificar si hay una preferencia guardada en localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.remove('bi-brightness-high-fill');
        icon.classList.add('bi-moon-fill');
    }
    
    // Verificar preferencia del sistema si no hay guardada
    if (!currentTheme) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            body.classList.add('dark-mode');
            icon.classList.remove('bi-brightness-high-fill');
            icon.classList.add('bi-moon-fill');
        }
    }
    
    // Event listener para el botón de toggle
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            // Cambiar a modo oscuro
            icon.classList.remove('bi-brightness-high-fill');
            icon.classList.add('bi-moon-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            // Cambiar a modo claro
            icon.classList.remove('bi-moon-fill');
            icon.classList.add('bi-brightness-high-fill');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                body.classList.add('dark-mode');
                icon.classList.remove('bi-brightness-high-fill');
                icon.classList.add('bi-moon-fill');
            } else {
                body.classList.remove('dark-mode');
                icon.classList.remove('bi-moon-fill');
                icon.classList.add('bi-brightness-high-fill');
            }
        }
    });
});
