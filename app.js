const iconoMenu = document.querySelector("#icono-del-menu"),
    menu = document.querySelector("#menu");



iconoMenu.addEventListener("click", (e) => {
        /* Alternamos estilos para el menu y el body*/
     menu.classList.toggle("active");
     document.body.classList.toggle("opacity");

     /*Alternamos su atributo de src para el icono del menu */
     const rutaActual = e.target.getAttribute("src");
    if (rutaActual == 'resources/ico.png') [
        e.target.setAttribute("src", "resources/ico.png")
    ];
    else [
         e.target.setAttribute("src", "resources/ico.png")

    ]
})