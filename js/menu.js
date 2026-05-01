let Opciones = {
    "Inicio": "../index.html",
    "Historia": "../html/historia.html",
    "Requisitos": "../html/requesitos.html",
    "Matrícula": "../html/matricula.html",
    "Admisión": "../html/admision.html",
    "Reglamento": "../html/reglamento.html",
    "Convenios": "../html/convenios.html",
    "Banda": "../html/banda.html",
    "Descargas": "../html/descargas.html",
    "Contacto": "../html/contacto.html"
};

let menu = document.getElementById("menu");
let Desplegable = document.getElementById("MenuDesplegable")

menu.innerHTML = `
    <picture><img src="../assets/logo.png" alt="Logo"></picture>
    <ul>
        ${Object.entries(Opciones).map(([nombre, link]) => `<li><a href="${link}">${nombre}</a></li>`).join('')}
    </ul>
`;

Desplegable.innerHTML = `
        ${Object.entries(Opciones).map(([nombre, link]) => `<li><a href="${link}">${nombre}</a></li>`).join('')}
`;


const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);


