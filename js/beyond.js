document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento del menú desplegable
    var dropdownMenu = document.getElementById("dropdown-menu");
  
    // Cierra el menú desplegable al cargar una nueva página
    if(dropdownMenu){
      dropdownMenu.classList.remove("open");
    }
  });
        const toggleBtn=document.querySelector('.toggle_btn')
        const toggleBtnIcon=document.querySelector('.toggle_btn i')
        const dropDownMenu=document.querySelector('.dropdown_menu')
        toggleBtn.onclick=function(){
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }
        window.addEventListener("scroll", function() {
            var navbar = document.querySelector(".navbar");
            navbar.classList.toggle("scrolled", window.scrollY > 0);
          });
//funcion botón modo noche
const nightModeBtn = document.querySelector('#night-mode-btn');
const nightModeBtnDropdown = document.querySelector('#night-mode-btn-dropdown');
const body = document.body;

nightModeBtn.addEventListener('change', function() {
  body.classList.toggle('night-mode');
});

nightModeBtnDropdown.addEventListener('change', function() {
  body.classList.toggle('night-mode');
});
 // Evento change para el select
 const formatoSelect = document.querySelector("#format");
 const productImg = document.querySelector("#pic-1 img"); // Aquí se modifica la selección del elemento img dentro de #pic-1
 const priceElmt = document.querySelector("#precio");
 
 // Agregar un evento change al select
if(formatoSelect){
  formatoSelect.addEventListener("change", function() {
    // Obtener el valor seleccionado
    let formatoSeleccionado = formatoSelect.value;

    // Actualizar el precio en base a la selección
    if (formatoSeleccionado === "formato-basico") {
        priceElmt.innerHTML = 'Especial Black Friday: <del>59,99€</del> <span>39,99€</span><br><strong>(Incluye IGIC)</strong>';
        productImg.setAttribute("src","/images/recetas/recetario_basico.jpeg") ;
    } else if (formatoSeleccionado === "formato-digital") {
        priceElmt.innerHTML = 'Especial Black Friday: <del>69,99€</del> <span>49,99€</span><br><strong>(Incluye IGIC)</strong>';
        productImg.setAttribute("src","/images/recetas/recetario_digital_completo.jpeg");
    } else if (formatoSeleccionado === "formato-fisico") {
        priceElmt.innerHTML = 'Especial Black Friday: <del>79,99€</del> <span>59,99€</span><br><strong>(Incluye IGIC+gastos de envío)</strong>';
        productImg.setAttribute("src","/images/recetas/recetario.jpg");
    }
});
}
 //tamaño img
 // Obtener la primera imagen
 const firstImage = document.querySelector('.preview-thumbnail.nav-tabs li:first-child img');
let width="",height="";
 if (firstImage) {
      width = firstImage.clientWidth;
      height = firstImage.clientHeight;
 } else {
     console.error("No se encontró el elemento con la clase '.preview-thumbnail'");
 }
// Seleccionar todas las imágenes y establecer las mismas dimensiones
const allImages = document.querySelectorAll('.preview-thumbnail.nav-tabs li img');
allImages.forEach(image => {
  image.style.width = width + 'px';
  image.style.height = height + 'px';
});

// Obtener la imagen dentro del contenedor tab-pane activo
const activeTabPane = document.querySelector('.tab-pane.active');
let firstImageP="";
if(activeTabPane){
  firstImageP = activeTabPane.querySelector('img');
}
let widthP="",heightP="";
if(firstImageP){
  // Obtener el ancho y alto de la imagen dentro del contenedor tab-pane activo
 widthP = firstImageP.clientWidth;
 heightP = firstImageP.clientHeight;
}

// Seleccionar todas las imágenes dentro de .tab-pane y establecer las mismas dimensiones
const tabPaneImages = document.querySelectorAll('.tab-pane img');
if(tabPaneImages){
  tabPaneImages.forEach(image => {
    image.style.width = widthP + 'px'; // Usar widthP
    image.style.height = heightP + 'px'; // Usar heightP
  });
}
//seleccionar stars
function selectStar(event) {
  const stars = event.target.parentNode.children;
  const starArray = Array.from(stars);

  const starIndex = starArray.indexOf(event.target);
  const selectedStars = document.getElementById('selectedStars');

  if (starIndex >= 0) {
      for (let i = 0; i <= starIndex; i++) {
          starArray[i].classList.add('checked');
      }
      for (let i = starIndex + 1; i < starArray.length; i++) {
          starArray[i].classList.remove('checked');
      }
      selectedStars.textContent = starIndex + 1;
  }
}
//boton carrito producto
const addToCartBtn = document.querySelector('.add-to-cart');

// Agregar un evento de clic al botón
if(addToCartBtn){
  addToCartBtn.addEventListener('click', function() {
    // Verificar si el texto actual del botón es "Añadido"
    if (addToCartBtn.textContent === 'Añadido') {
        // Cambiar el texto del botón a "Quitar del carrito"
        addToCartBtn.textContent = 'Añadir al carrito';
        
        addToCartBtn.style.backgroundColor = 'var(--color-accent)';
      } else {
        // Si no es "Añadido", cambiar el texto del botón a "Añadido"
        addToCartBtn.textContent = 'Añadido';
        addToCartBtn.style.backgroundColor = 'var(--color-terciary)';
    }
});
}
//carrito
document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los botones "Eliminar"
    var eliminarButtons = document.querySelectorAll(".eliminar");
  
    // Añade un evento de clic a cada botón
    eliminarButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Elimina el elemento padre del botón, que es el div del artículo
        this.parentNode.remove();
  
        // Aquí puedes añadir cualquier otra lógica que necesites para actualizar la vista
      });
    });
  });
 //usuario regalo
  const radioRegalarA = document.querySelector('input[value="regalarA"]');
  const campoNombreUsuario = document.getElementById('campoNombreUsuario');

  // Añadir un listener para el evento de cambio en el radio button
if(radioRegalarA){
  radioRegalarA.addEventListener('change', function() {
    // Mostrar u ocultar el campo de nombre de usuario según si está seleccionado "Regalar a..."
    campoNombreUsuario.style.display = this.checked ? 'block' : 'none';
});
}
//descuento
let descuentoAplicado = false;

    // Función para aplicar el descuento
    function aplicarDescuento() {
      // Aquí puedes incluir lógica para calcular y aplicar el descuento en el lado del servidor
      descuentoAplicado = !descuentoAplicado;

      // Muestra el mensaje de descuento si está aplicado
      console.log("descuento?");
      const descuentoInfo = document.getElementById('descuento-info');
      descuentoInfo.style.display = descuentoAplicado ? 'block' : 'none';
      descuentoInfo.textContent = descuentoAplicado ? 'Descuento del 10% aplicado' : '';
    }

    // Añadir un listener al botón para aplicar el descuento
    const bdiscount=document.getElementById('bdiscount');
    if(bdiscount){
      bdiscount.addEventListener('click', aplicarDescuento);
    }
    //fecha en pedido
    var fechaElemento = document.getElementById('fecha');

    if (fechaElemento) {
        // Obtiene la fecha actual y formatea como dd/mm/aaaa
        var fechaActual = new Date();
        var formatoFecha = fechaActual.getDate() + '/' + (fechaActual.getMonth() + 1) + '/' + fechaActual.getFullYear();

        // Asigna la fecha al elemento
        fechaElemento.textContent = formatoFecha;
    }
    //autoplay video
    $(document).ready(function() {
      $(window).scroll(function() {
          var videoPosition = $('#video').offset().top;
          var windowPosition = $(window).scrollTop();
          if (windowPosition > videoPosition - 500) {
              var iframe = document.getElementById('video');
              iframe.src = iframe.src + "&autoplay=1";
          }
      });
  });
  
