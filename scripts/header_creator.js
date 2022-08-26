/**
 * <header class="bg-dark text-white p-4 sticky-top">
        <div class="container">
            <nav class="d-flex flex-wrap align-items-center justify-content-center">
                <a href="index.html" class="fw-bold text-decoration-none align-items-center text-white me-lg-auto">HUB-ER</a>
                <ul class="nav flex-column flex-sm-column flex-md-row flex-lg-row col-12 col-lg-auto mb-2 mb-md-0 align-items-end align-items-sm-end justify-content-md-center justify-content-lg-end">
                    <li class="px-2 nav-link text-white">
                        <a class="text-decoration-none text-white" href="acerca_de.html">Aceca de Nosotros</a>
                    </li>
                    <li class="px-2 nav-link text-white">
                        <a class="text-decoration-none text-white" href="contactenos.html">Contacto</a>
                    </li>
                    <li class="px-2 nav-link text-white">
                        <a class="text-decoration-none text-white" href="vacantes.html">Vacantes</a>
                    </li>
                    <li class="px-2 nav-link text-white">
                        <a class="text-decoration-none text-white" href="foro.html">Foro</a>
                    </li>
                    <li class="px-2 nav-link text-white">
                        <a class="text-decoration-none text-white" href="servicios.html">Servicios en Linea</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
 */

const header = document.createElement("header")
const container = document.createElement("div");
const nav = document.createElement("nav");
const logo = document.createElement("a");
const ul = document.createElement("ul");
const l1 = document.createElement("li");
const l2 = document.createElement("li");
const l3 = document.createElement("li");
const l4 = document.createElement("li");
const l5 = document.createElement("li");
const a1 = document.createElement("a");
const a2 = document.createElement("a");
const a3 = document.createElement("a");
const a4 = document.createElement("a");
const a5 = document.createElement("a");

const logoText =  document.createTextNode("HUB-ER");
const navItem1 =  document.createTextNode("Aceca de Nosotros");
const navItem2 =  document.createTextNode("Contacto");
const navItem3 =  document.createTextNode("Vacantes");
const navItem4 =  document.createTextNode("Foro");
const navItem5 =  document.createTextNode("Servicios en Linea");

header.classList.add("bg-dark", "text-white", "p-4", "sticky-top");
container.classList.add("container");
nav.classList.add("d-flex", "flex-wrap", "align-items-center", "justify-content-center");
logo.classList.add("fw-bold", "text-decoration-none", "align-items-center", "text-white", "me-lg-auto");
ul.classList.add("nav", "flex-colum", "flex-sm-column", "flex-md-row", "flex-lg-row", "col-12", "col-lg-auto", "mb-2", "mb-md-0", "align-items-end", "align-items-sm-end", "justify-content-md-", "justify-content-lg-end");
l1.classList.add("px-2", "nav-link", "text-white");
l2.classList.add("px-2", "nav-link", "text-white");
l3.classList.add("px-2", "nav-link", "text-white");
l4.classList.add("px-2", "nav-link", "text-white");
l5.classList.add("px-2", "nav-link", "text-white");
a1.classList.add("text-decoration-none", "text-white");
a2.classList.add("text-decoration-none", "text-white");
a3.classList.add("text-decoration-none", "text-white");
a4.classList.add("text-decoration-none", "text-white");
a5.classList.add("text-decoration-none", "text-white");

logo.setAttribute("href", "index.html");
a1.setAttribute("href", "acerca_de.html");
a2.setAttribute("href", "contactenos.html");
a3.setAttribute("href", "vacantes.html");
a4.setAttribute("href", "foro.html");
a5.setAttribute("href", "servicios.html");

a1.appendChild(navItem1);
a2.appendChild(navItem2);
a3.appendChild(navItem3);
a4.appendChild(navItem4);
a5.appendChild(navItem5);

l1.appendChild(a1);
l2.appendChild(a2);
l3.appendChild(a3);
l4.appendChild(a4);
l5.appendChild(a5);

ul.appendChild(l1);
ul.appendChild(l2);
ul.appendChild(l3);
ul.appendChild(l4);
ul.appendChild(l5);

logo.appendChild(logoText)

nav.appendChild(logo);
nav.appendChild(ul);

container.appendChild(nav);
header.appendChild(container);

document.body.prepend(header);