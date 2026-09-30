/* =========================
   MODO OSCURO / MODO CLARO
========================= */

const themeButton =
    document.getElementById("themeButton");

const themeIcon =
    document.getElementById("themeIcon");


/*
   Comprobar si había un tema
   guardado anteriormente
*/

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.src = "img/luna.png";

    themeIcon.alt = "Modo oscuro";

    themeButton.setAttribute(
        "aria-label",
        "Cambiar a modo claro"
    );

}


/*
   Cambiar entre modo claro y oscuro
*/

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        /*
           MODO OSCURO

           Cambiamos el PNG
           de sol → luna
        */

        themeIcon.src = "img/luna.png";

        themeIcon.alt = "Modo oscuro";

        themeButton.setAttribute(
            "aria-label",
            "Cambiar a modo claro"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        /*
           MODO CLARO

           Cambiamos el PNG
           de luna → sol
        */

        themeIcon.src = "img/sol.png";

        themeIcon.alt = "Modo claro";

        themeButton.setAttribute(
            "aria-label",
            "Cambiar a modo oscuro"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});



/* =========================
   CAMBIO DE IDIOMA
========================= */

const languageButton =
    document.getElementById("languageButton");

let currentLanguage = "es";


languageButton.addEventListener("click", () => {

    if (currentLanguage === "es") {

        currentLanguage = "en";

        languageButton.textContent = "ES";

    } else {

        currentLanguage = "es";

        languageButton.textContent = "EN";

    }


    /*
       Buscar todos los elementos
       que tengan data-es y data-en
    */

    const elements =
        document.querySelectorAll(
            "[data-es][data-en]"
        );


    elements.forEach((element) => {

        element.textContent =
            element.getAttribute(
                `data-${currentLanguage}`
            );

    });

});



/* =========================
   FILTROS DE PROYECTOS
========================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


const projects =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /*
           Quitar active de todos
        */

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });


        /*
           Activar el botón pulsado
        */

        button.classList.add("active");


        /*
           Obtener categoría
        */

        const filter =
            button.getAttribute(
                "data-filter"
            );


        /*
           Mostrar / ocultar proyectos
        */

        projects.forEach((project) => {

            const category =
                project.getAttribute(
                    "data-category"
                );


            if (
                filter === "all" ||
                category === filter
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});