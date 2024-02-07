const navbar = document.querySelector(".navbar");
const sideMenu = document.querySelector(".side-menu");
const main = document.querySelector(".main");
const socialIcons = document.querySelector(".social-icons");
const callToActionButton = document.querySelector(".action-button-container");
const whatsappContainer = document.querySelector(".whatsapp-container");
const images = document.querySelectorAll(".img-item");
const allOptions = document.querySelectorAll(".dropdown-item");
const containerDescriptivo = document.getElementById("container-descriptivo");
const gridItem = document.querySelectorAll(".grid-item");

// Función para ocultar el navbar y mostrar el menú lateral en pantallas grandes
function showSideMenu() {
  navbar.classList.add("d-none"); // Oculta el navbar
  sideMenu.classList.remove("d-none");
  sideMenu.classList.add("col-lg-2"); // Muestra el menú lateral
  main.classList.remove("col-10"); // Cambia el ancho del main a 10 columnas
  main.classList.add("col-lg-10");
  //Cambio de estilos para el body
  document.body.classList.add("bodystyle");
  //cambio de estilos para el main
  main.classList.add("mainstyle");
  //No mostrar boton wassap
  whatsappContainer.classList.add("d-none");
}

// Función para restablecer el navbar y ocultar el menú lateral en pantallas pequeñas
function hideSideMenu() {
  navbar.classList.remove("d-none"); // Muestra el navbar
  sideMenu.classList.add("d-none"); // Oculta el menú lateral
  sideMenu.classList.remove("col-2");
  main.classList.remove("col-lg-10"); // Restablece el ancho del main
  main.classList.add("col-12"); // Restablece el ancho del main a 12 columnas en pantallas pequeñas
  //cambio de estilos para el main
  main.classList.remove("mainstyle");
  //cambio de estilo para el boton del call to action
}

// Función para cargar el contenido del menú lateral
function loadSideMenuContent() {
  // Define el contenido del menú lateral
  const sideMenuContent = `
    <div class=" ">
    <a class="navbar-brand" href="./index.html"><img src="./img/logo_a_la_izquierda.png" height="50px" alt="xba studio logo" /></a>
    <ul class="list-unstyled navbar-nav justify-content-end links-browser">
    <li class="menu-links"><a href="./index.html" class="my-0 text-decoration-none">Home</a></li>
    <li class="menu-links"><a href="./work.html" class="my-0 text-decoration-none">Work</a></li>
    <li class="menu-links"><a href="./services.html" class="my-0 text-decoration-none">Services</a></li>
    <li class="menu-links"><a href="./contact.html" class="my-0 text-decoration-none">Contact</a></li>
    </ul>
    </div>
    <div class="social-icons-container">
      <div class="inner-social-icons-container">
      <a href="https://www.instagram.com/javi_abalos_arq3d/" target="_blank" class="text-decoration-none ">
        <img src="./img/instalogo.svg" alt="Instagram logo" height="20px">
      </a>
        <a href="https://www.facebook.com/javiAbalosArq3d/" target="_blank" class="text-decoration-none  ">
          <img src="img/face-icon.svg" alt="Facebook logo" height="20px">
        </a>
        <a href="https://www.behance.net/javier_abalos" target="_blank" class="text-decoration-none  ">
          <img src="./img/bhlogo.svg" alt="behance logo" height="20px">
        </a>
      </div>
    </div>
  

  `;

  // Asigna el contenido al menú lateral
  sideMenu.innerHTML = sideMenuContent;
}

function loadListContent() {
  // Datos correspondientes a cada ítem
}

function toggleClass(elementId) {
  for (let i = 0; i < images.length; i++) {
    if (images[i].id.slice(-1) === elementId) {
      images[i].classList.remove("displayNone");
      images[i].classList.remove("d-none");
      images[i].classList.add("d-block");
    } else {
      images[i].classList.add("displayNone");
    }
  }
}

//REPONSIVE; SEGUN EL TAMAÑO DE PANTALLA PONGO DISPLAY A ELEMENTOS, Y SACO DISPLAY DE OTROS
function handleScreenSizeChange() {
  if (window.innerWidth > 992) {
    loadSideMenuContent(); //CREO HTML DENTRO DEL DIV "SIDEMENU"
    document.addEventListener("DOMContentLoaded", function () {
      loadListContent();
    });
    showSideMenu(); //AGREGO EL SIDE MENU, BORRO EL NAV RESPONSIVE, CAMBIO COLUMNAS DE MAIN Y SIDE PARA QUE SE VEA MEJOR
    //Remueve el display none de texto descriptivo

    //PAGINA DE SERVICIOS //PAGINA DE SERVICIOS
    hideServicesList(); //EN PANTALLA GRANDE OCULTO EL BOTON DE SERIVICIOS Y SACO LA CLASE DROPDOWN DE LA LISTA
  } else if (window.innerWidth <= 768) {
    hideSideMenu();
  } else {
    navbar.classList.remove("d-none"); // Muestra el navbar
    sideMenu.classList.add("d-none"); // Oculta el menú lateral

    loadListContent();
  }
}

// Agregar evento de cambio de tamaño de pantalla
window.addEventListener("resize", handleScreenSizeChange);

// Inicialmente, verifica el tamaño de la pantalla
handleScreenSizeChange();

//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section//Work Section
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});
//eventlistener para boton-borde

document.querySelector(".btn-secondary").addEventListener("click", () => {
  document.querySelector(".main").classList.remove("blurStyle");
});
document.querySelector(".modal").addEventListener("click", () => {
  document.querySelector(".main").classList.remove("blurStyle");
});
