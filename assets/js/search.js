// Mostrar/ocultar input del buscador al hacer clic en el botón
document.addEventListener('DOMContentLoaded', function() {
     // addEventListener es un método del objeto EventTarget que se usa para asignar un evento a un elemento HTML.
    // En el primer parámetro se especifica el tipo de evento; en este caso, "DOMContentLoaded", que se dispara cuando el HTML ya fue cargado y convertido en el DOM, es decir, cuando el DOM ha sido completamente construido.
   // en el segundo parámetro se pasa la función que se ejecuta cuando se activa el evento.
  // querySelector() es un método del objeto document que permite obtener el primer elemento HTML que coincida con el selector CSS especificado y almacenarlo en una variable.
    const searchButton = document.querySelector('.btn-outline-primary');
    const searchInput = document.querySelector('.form-control');
    let isInputVisible = false;
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!isInputVisible) {
                // Mostrar input y hacer focus
                searchInput.classList.add('show');
                searchInput.focus();
                isInputVisible = true;
            } else {
                // Si hay texto, enviar formulario
                if (searchInput.value.trim() !== '') {
                    searchInput.closest('form').submit();
                } else {
                    // Si no hay texto, ocultar input
                    searchInput.classList.remove('show');
                    isInputVisible = false;
                }
            }
        });
    }
});
