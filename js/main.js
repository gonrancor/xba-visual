const navbar = document.querySelector(".navbar");
const sideMenu = document.querySelector(".side-menu");
const serviceSubDescription = document.getElementById("serviceSubDescription");
const main = document.querySelector(".main");
const socialIcons = document.querySelector(".social-icons");
const callToActionButton = document.querySelector(".action-button-container");
const whatsappContainer = document.querySelector(".whatsapp-container");
const servicesList = document.getElementById("services-dropdown-menu");
const descriptionService = document.querySelectorAll(".TextParragraph");
const images = document.querySelectorAll(".img-item");
const allOptions = document.querySelectorAll(".dropdown-item");
const containerDescriptivo = document.getElementById("container-descriptivo");
const gridItem = document.querySelectorAll(".grid-item");
const cards = document.querySelectorAll(".card");
const buttonsModal = document.querySelectorAll(".button-modal");
const imageModal = document.getElementById("image-modal");
const imgServicesMobile = document.querySelectorAll(".bg-img");

//Slider en el main

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
    <a class="navbar-brand" href="./index.html"><img src="./img/logo_a_la_izquierda.png" height="70px" alt="" /></a>
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
        <img src="./img/instalogo.svg" alt="Instagram" height="20px">
      </a>
        <a href="https://www.facebook.com/javiAbalosArq3d/" target="_blank" class="text-decoration-none  ">
          <img src="img/face-icon.svg" alt="Facebook" height="20px">
        </a>
        <a href="https://www.behance.net/javier_abalos" target="_blank" class="text-decoration-none  ">
          <img src="./img/bhlogo.svg" alt="Twitter" height="20px">
        </a>
      </div>
    </div>
  

  `;

  // Asigna el contenido al menú lateral
  sideMenu.innerHTML = sideMenuContent;
}
//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES
//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES//SERVICES

function loadListContent() {
  // Datos correspondientes a cada ítem
  let serviceSubDescriptionContent = `
  <div class=" ">
  <h3 class="h4" >3D Modeling</h3>
  <p class ="text-left text-justify">Detailed 3D modeling of both exterior and interior architecture, meticulously crafted using software such as SketchUp or 3ds Max. 
  This intricate modeling process is informed by the project plans, ensuring a highly accurate representation. 
  These 3D models serve a dual purpose: they play a pivotal role in advancing the project's design, while also enabling the generation of 
  photorealistic images and videos that vividly showcase the project's potential.</p>
  </div>`;
  const itemData = {
    "item-1": `
    <div class="animate__animated animate__fadeIn" >
  <h3 class="h4" >3D Modeling</h3>
  <p class ="text-left text-justify">Detailed 3D modeling of both exterior and interior architecture, meticulously crafted using software such as SketchUp or 3ds Max. 
  This intricate modeling process is informed by the project plans, ensuring a highly accurate representation. 
  These 3D models serve a dual purpose: they play a pivotal role in advancing the project's design, while also enabling the generation of 
  photorealistic images and videos that vividly showcase the project's potential.</p>
  </div>`,
    "item-2": `
    <div class="animate__animated animate__fadeIn" >
      <h3 class="h4">Exterior Rendering
      </h3>
      <p class="text-left text-justify">We create beautiful photorealistic visualization of the architectural project and its surroundings, taking into account every architectural detail as well as the landscaping design and vegetation. In this way, we obtain beautiful and striking images that help to highlight the project and enchant the client.</p>
    </div>`,
    "item-3": `<div class="animate__animated animate__fadeIn" >
  <h3 class="h4" >Interior Rendering</h3>
  <p class ="text-left text-justify">We create beautiful photorealistic visualizations of the interior design project, its equipment and decoration, 
  paying attention to all architectural details and lighting, as well as each specific piece of furniture and decorative element. 
  In this way, we obtain beautiful and impactful images that highlight the project and win over our clients.</p>
  </div>`,
    "item-4": `<div class="animate__animated animate__fadeIn" >
  <h3 class="h4" >Furniture and Product Rendering</h3>
    <p class ="text-left text-justify">We create beautiful and modern 3D environments to showcase your furniture and design objects in the most attractive and impactful way possible. 
    Our goal is to help you create sales catalogs that generate interest and convince your customers that your products are the best option for them. 
    We pay special attention to details and design to create environments that highlight your products and make them stand out.</p>
  </div>`,
    "item-5": `<div class="animate__animated animate__fadeIn" >
  <h3 class="h4" >360/VR Rendering</h3>
  <p class ="text-left text-justify">We create stunning and realistic 360 and VR renderings that showcase your architectural and interior design projects in the most attractive and 
  convincing way possible. Our goal is to help you create immersive experiences that generate interest and allow your clients to explore and learn about your 
  projects in a unique and enriching way.</p>
  </div>`,
    "item-6": `<div class="animate__animated animate__fadeIn" >
  <h3 class="h4" >Animations</h3>
  <p class ="text-left text-justify">We create beautiful and engaging 3D animations to showcase your architectural, interior design, and product design projects in the most impactful and convincing way possible. 
  We pay special attention to details to create animations that highlight your projects and make them stand out. 
  Our goal is to help you create presentations and promotional videos that generate impact and convince your clients that your projects are the best option for them.</p>
  </div>`,
    "item-7": `<div class="animate__animated animate__fadeIn" >
  <h3 class="h4" >Web Development</h3>
  <p class ="text-left text-justify">We design custom websites to promote and sell architectural projects, highlighting their uniqueness. 
  With advanced features such as 3D visualization and high-quality image galleries, we provide an immersive experience that simplifies product representation.</p>
  </div>`,
  };
  const opciones = document.querySelectorAll(".TextParragraph");
  // Recorre cada ítem y le asigna el contenido correspondiente
  opciones.forEach((opcion) => {
    opcion.addEventListener("click", () => {
      const itemId = opcion.id;
      const numeroIdDeItem = `${itemId.slice(-1)}`;
      serviceSubDescription.innerHTML = itemData[`item-${numeroIdDeItem}`];
    });
  });

  serviceSubDescription.classList.remove("d-none");

  serviceSubDescription.innerHTML = serviceSubDescriptionContent;
}

//Muestreo de imagenes segun opcion seleccionada
descriptionService.forEach((item) => {
  item.addEventListener("click", () => {
    let lastCharacter = item.id.slice(-1);

    for (i = 0; i < images.length; i++) {
      if (lastCharacter === images[i].id.slice(-1)) {
        images[i].classList.remove("displayNone");
      } else {
        images[i].classList.add("displayNone");
      }
    }
  });
});

//Cambio de Servicios de mobile a desktop
function hideServicesList() {
  servicesList.classList.add("displayNone");
}
function showServicesList() {
  servicesList.classList.remove("displayNone");
}

//Set imgServicesMobile active on touch. if is active, toggle opacity to 1. if is not active, toggle opacity to 0.5

//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons
//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons//index Slider buttons

// const despuesButton = document.getElementById("despues");
// const antesButton = document.getElementById("antes");
// const sliderTrack = document.querySelector(".slider-track");
// let posicionActual = 0;

// function obtenerPosicionX() {
//   posicionActual = sliderTrack.getBoundingClientRect().x;

//   // Solicitar el próximo fotograma
//   requestAnimationFrame(obtenerPosicionX);
// }

// // Iniciar la obtención de la posición X
// obtenerPosicionX();
// antesButton.addEventListener("click", () => {
//   sliderTrack.classList.remove("speed-animation");
//   sliderTrack.style.animationName = "reverse-scroll";
// });
// despuesButton.addEventListener("click", () => {
//   sliderTrack.classList.add("speed-animation");
//   sliderTrack.classList.remove("reverse-animation");
// });

///CODIGO DE SERVIS MOBILE BUTTON AND LIST///CODIGO DE SERVIS MOBILE BUTTON AND LIST///CODIGO DE SERVIS MOBILE BUTTON AND LIST
//Bucle para iterar los clickevents
allOptions.forEach((item) => {
  const itemId = item.id;
  const numeroIdDeItem = `${itemId.slice(-1)}`;
  item.addEventListener("click", () => {
    toggleClass(numeroIdDeItem);
  });
});

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

  descriptionService.forEach((DescriptionIndividual) => {
    if (DescriptionIndividual.id.slice(-1) === elementId) {
      DescriptionIndividual.classList.remove("d-none");
      containerDescriptivo.classList.remove("d-none");
    } else {
      DescriptionIndividual.classList.add("d-none");
    }
  });
}

//REPONSIVE; SEGUN EL TAMAÑO DE PANTALLA PONGO DISPLAY A ELEMENTOS, Y SACO DISPLAY DE OTROS
function handleScreenSizeChange() {
  if (window.innerWidth > 992) {
    //Foreach para agregar todos los items de la lista
    descriptionService.forEach((DescriptionIndividual, i) => {
      DescriptionIndividual.classList.remove("d-none");
    });
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
    showServicesList();
    containerDescriptivo.classList.add("d-none");
    serviceSubDescription.classList.add("d-none");
  } else {
    serviceSubDescription.classList.remove("d-none");
    // Rango intermedio (768px - 992px)
    navbar.classList.remove("d-none"); // Muestra el navbar
    sideMenu.classList.add("d-none"); // Oculta el menú lateral
    // hideServicesList();
    containerDescriptivo.classList.remove("d-none");
    loadListContent();
    //Foreach para agregar todos los items de la lista
    descriptionService.forEach((DescriptionIndividual, i) => {
      DescriptionIndividual.classList.remove("d-none");
    });
  }
}
imgServicesMobile.forEach((imgServiceMobile) => {
  let imgServiceMobileActive = true;
  imgServiceMobile.addEventListener("click", () => {
    if (imgServiceMobileActive) {
      console.log("llega1");
      imgServiceMobile.classList.add("opacity-1");
      imgServiceMobile.classList.remove("opacity-02");
      imgServiceMobileActive = false;
    } else {
      console.log("llega2");
      imgServiceMobile.classList.add("opacity-02");
      imgServiceMobile.classList.remove("opacity-1");
      imgServiceMobileActive = true;
    }
  });
});

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

//Modales del services
buttonsModal.forEach((buttonModal) => {
  buttonModal.addEventListener("click", () => {
    if (buttonModal.id === "button-modal-1") {
      console.log("hola");
      imageModal.src = `./img/001_CASA_ALFREDO_BERN_CAM_ESTAR_00.jpg`;
    } else if (buttonModal.id === "button-modal-2") {
      console.log("hola2");
      imageModal.src = `./img/001_BOC_COMEDOR_LN_NS_CAM02.jpg`;
    } else if (buttonModal.id === "button-modal-3") {
      imageModal.src = `./img/001_CASA_ALFREDO_BERN_CAM_FRENTEO_01.jpg`;
    } else if (buttonModal.id === "button-modal-4") {
      imageModal.src = `./img/004_CASA_MAGDALENA_DAY_COC_01_02.jpg`;
    } else if (buttonModal.id === "button-modal-5") {
      imageModal.src = `./img/004_CASA_MAGDALENA_DAY_COC_02_01.jpg`;
    } else if (buttonModal.id === "button-modal-6") {
      imageModal.src = `./img/004_CASA_MAGDALENA_DAY_COC_03_00.jpg`;
    }
    document.querySelector(".main").classList.add("blurStyle");
  });
});
document.querySelector(".btn-secondary").addEventListener("click", () => {
  document.querySelector(".main").classList.remove("blurStyle");
});
document.querySelector(".modal").addEventListener("click", () => {
  document.querySelector(".main").classList.remove("blurStyle");
});
