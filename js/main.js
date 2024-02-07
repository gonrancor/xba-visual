const navbar = document.querySelector(".navbar");
const sideMenu = document.querySelector(".side-menu");
const main = document.querySelector(".main");
const images = document.querySelectorAll(".img-item");

function showSideMenu() {
  navbar.classList.add("d-none");
  sideMenu.classList.remove("d-none", "col-2");
  sideMenu.classList.add("col-lg-2");
  main.classList.remove("col-10");
  main.classList.add("col-lg-10");
  document.body.classList.add("bodystyle");
  whatsappContainer.classList.add("d-none");
}

function hideSideMenu() {
  navbar.classList.remove("d-none");
  sideMenu.classList.add("d-none", "col-2");
  main.classList.remove("col-lg-10");
  main.classList.add("col-12");
}

function loadSideMenuContent() {
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
  sideMenu.innerHTML = sideMenuContent;
}

function toggleClass(elementId) {
  images.forEach((image) => {
    if (image.id.slice(-1) === elementId) {
      image.classList.remove("displayNone", "d-none");
      image.classList.add("d-block");
    } else {
      image.classList.add("displayNone");
    }
  });
}

function handleScreenSizeChange() {
  if (window.innerWidth > 992) {
    loadSideMenuContent();
    showSideMenu();
  } else if (window.innerWidth <= 768) {
    hideSideMenu();
  } else {
    navbar.classList.remove("d-none");
    sideMenu.classList.add("d-none");
  }
}

window.addEventListener("resize", handleScreenSizeChange);
handleScreenSizeChange();

// Work Section
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

document.querySelector(".btn-secondary").addEventListener("click", () => {
  main.classList.remove("blurStyle");
});

document.querySelector(".modal").addEventListener("click", () => {
  main.classList.remove("blurStyle");
});
