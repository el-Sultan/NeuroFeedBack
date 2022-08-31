// ------ btn go up...
// =====================================================!!!
$(window).scroll(function () {
  if ($(this).scrollTop() > 150) $(".gotopbtn").addClass("active");
  else $(".gotopbtn").removeClass("active");
});
$(".gotopbtn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 400);
});

// ------ menu-color : noir et blanc... 
// =====================================================!!!
window.addEventListener('scroll', function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// ------ Start scripte scroll Trigger - Video + mini img...  
// =====================================================!!!

gsap.to("#videoplyr", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 2,
    pin: "#topup",
  },
  width: "100%",
});

gsap.to("#one", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  left: "-1000px",
  opacity: 0,
});

gsap.to("#holdr1", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  left: "-500px",
  opacity: 0,
});

gsap.to("#sx", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  right: "-1000px",
  opacity: 0,
});

gsap.to("#holdr2", {
  scrollTrigger: {
    trigger: "#topup",
    start: "top top",
    scrub: 3,
  },
  right: "-500px",
  opacity: 0,
});

//__---Start scripte GSAP Menu 
// =====================================================!!!
var t1 = gsap.timeline({ paused: true });

var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to(
  ".bar-1",
  0.5,
  {
    attr: { d: "M8,2 L2,8" },
    x: 1,
    ease: Power2.easeInOut,
  },
  "start"
);

menuBar.to(
  ".bar-2",
  0.5,
  {
    autoAlpha: 0,
  },
  "start"
);

menuBar.to(
  ".bar-3",
  0.5,
  {
    attr: { d: "M8,8 L2,2" },
    x: 1,
    ease: Power2.easeInOut,
  },
  "start"
);

menuToggle.addEventListener("click", function () {
  menuBar.reversed(!menuBar.reversed());
  t1.reversed(!t1.reversed());
});

menuBar.reverse();
t1.reverse();

t1.to(".fullpage-menu", {
  duration: 0,
  display: "block",
  ease: "Expo.easeInOut",
});

t1.from(".menu-bg span", {
  duration: 0.6,
  x: "100%",
  stagger: 0.1,
  ease: "Expo.easeInOut",
});

t1.from(
  ".main-menu li a",
  {
    duration: 0.8,
    y: "100%",
    stagger: 0.2,
    ease: "Expo.easeInOut",
  },
  "-=0.5"
);

t1.from(
  ".social-links li",
  {
    duration: 0.7,
    y: "-100%",
    opacity: 0,
    stagger: 0.1,
    ease: "Expo.easeInOut",
  },
  "-=0.5"
);
// ___
// fermeture de menu suite au clik link a ;)
$(document).on("click", ".main-menu a", function () {
  menuBar.reversed(!menuBar.reversed());
  t1.reverse(!t1.reverse());
});

//__---End scripte GSAP Menu !!!


//__progression page
// =====================================================!!!
window.onload = () => {
  // Ecouteur d'évènement sur scroll
  window.addEventListener("scroll", () => {
    //  Calcul de la hauteur "utile" du document (on prend la hauteur totale du document et ont enlève la hauteur de la fenêtre)
    let hauteur = document.documentElement.scrollHeight - window.innerHeight

    // Récupération de la position verticale
    let position = window.scrollY

    // Récupération de la largeur de la fenêtre
    let largeur = document.documentElement.clientWidth

    // calcul de la largeur de la barre
    let barre = position / hauteur * largeur

    // Modification du CSS de la barre
    document.getElementById("progression").style.width = barre + "px"

  })
}
