function modalBienvenida() {
    document.getElementById("modalBienvenida").style.display = "block";
    // Pausamos las animaciones del encabezado mientras esté el modal activo
    document.getElementById("tituloEncabezado").style.animationPlayState = "paused";
    document.getElementById("subtituloEncabezado").style.animationPlayState = "paused";
    // De esta forma evitamos el scroll cuando aparece el modal
    document.documentElement.style.overflow = "hidden";
    // Hago focus sobre el botón continuar para que sea accesible desde el teclado en un inicio
    document.getElementById("cerrarModalBienvenida").focus();
}

function cerrarModalBox() {

    // Oculta el modal
    document.getElementById("modalBienvenida").style.display = "none";
    // Inicia la animación del encabezado
    document.getElementById("tituloEncabezado").style.animationPlayState = "running";
    document.getElementById("subtituloEncabezado").style.animationPlayState = "running";
    // Activa el scroll
    document.documentElement.style.overflowY = "auto";
    setInterval(slideshowAnim, 3000);

}

// Añadiendo la sección como parámetro reutilizo el modal 
function modalGeneral(seccion) {
    // Mostramos el modal al enviar el formulario
    document.getElementById("modalFormularios").style.display = "block";
    // Evitamos el scroll cuando aparece el modal
    document.documentElement.style.overflow = "hidden";

    var mensaje;
    var cabecera = "Hubo un problema al rellenar el formulario";
    document.getElementById("headerFormularios").innerHTML = cabecera;
    // Reutilizo la función para ambos modales "contacto" y "reservas"
    if (seccion == "contacto") {
        // Recuperamos el value de los campos del formulario
        var nombre = document.getElementById("formNombre").value;
        // Función para validar los campos del formulario, la declaramos y se ejectua a la vez
        (function formCheck() {
            if (!document.getElementById("formNombre").checkValidity()) {
                mensaje = "Introduce un nombre correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("formMail").checkValidity()) {
                mensaje = "Introduce un correo electrónico correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("formTel").checkValidity()) {
                mensaje = "Introduce un teléfono correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("formConsulta").checkValidity()) {
                mensaje = "Introduce tu consulta.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else {
                cabecera = "Formulario correcto";
                document.getElementById("headerFormularios").innerHTML = cabecera;
                // Añadimos el nombre concatenando en el mensaje
                mensaje = "Gracias " + nombre + ", por ponerte en contacto con nosotros, en breve nos comunicaremos contigo";
                // Lo que se defina en mensaje será introducido en la etiqueta p del html con ese id
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            }
        })()
    } else if (seccion == "reservas") {
        // Recupero los valores del formulario
        var reNombre = document.getElementById("reNombre").value;
        var rePersonas = document.getElementById("rePersonas").value;
        var reFecha = document.getElementById("reFecha").value;
        var reHorario = document.getElementById("reHorario").value;
        (function reservasCheck() {
            if (!document.getElementById("reNombre").checkValidity()) {
                mensaje = "Introduce un nombre correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("rePersonas").checkValidity()) {
                mensaje = "Introduce un número de personas correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("reFecha").checkValidity()) {
                mensaje = "Introduce una fecha correcta.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("reHorario").checkValidity()) {
                mensaje = "Introduce un horario correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else if (!document.getElementById("reTel").checkValidity()) {
                mensaje = "Introduce un teléfono correcto.";
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            } else {
                cabecera = "Formulario correcto";
                document.getElementById("headerFormularios").innerHTML = cabecera;
                // Añadimos el nombre concatenando en el mensaje
                mensaje = "Gracias " + reNombre + ", reserva confirmada. para " + rePersonas + " personas, con fecha " +
                    reFecha + " en el horario, " + reHorario;
                // Lo que se defina en mensaje será introducido en la etiqueta p del html con ese id
                document.getElementById("mensajeContacto").innerHTML = mensaje;
            }
        })()
    }
    // Pondemos el focus en el botón para poder cerrar el modal a través del teclado
    // Lo añado al final de la función para que funcione en ambos modales
    document.getElementById("cerrarModalFormularios").focus();
}

function cerrarModalGeneral() {
    document.getElementById("modalFormularios").style.display = "none";
    document.documentElement.style.overflowY = "auto";
    // Limpiamos los campos de texto tras cerrar el modal
    document.getElementById("formNombre").value = "";
    document.getElementById("formMail").value = "";
    document.getElementById("formTel").value = "";
    document.getElementById("formConsulta").value = "";
}

// Código Carousel HeroImage automático
var heroCounter = 0;

// function heroSlideshow() {
//     // Listado de imágenes
//     var listaImgHero = [
//         "url('Media/Hero01.jpg')",
//         "url('Media/Hero02.jpg')",
//         "url('Media/Hero03.jpg')"
//     ];

//     heroCounter++;
//     // Comprobamos si hemos llegado al final de la lisat y seteamos
//     if (heroCounter == listaImgHero.length) {
//         heroCounter = 0;
//     }

//     document.getElementById("encabezado").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))," + listaImgHero[heroCounter];

// }

// Slideshow automático con animación

var contadorSig = 0;
var contadorPrincipal = 0;

function slideshowAnim() {

    var listaHeroImg = document.getElementsByClassName("fondosHero");
    contadorSig++;
    contadorPrincipal = contadorSig - 1;

    if (contadorSig == listaHeroImg.length) {
        contadorSig = 0;
    }
    if (contadorPrincipal < 0) {
        contadorPrincipal = listaHeroImg.length - 1;
    }
    for (var i = 0; i < listaHeroImg.length; i++) {
        listaHeroImg[i].classList.remove("nextSlide");
        listaHeroImg[i].classList.remove("mainSlide");
        listaHeroImg[i].classList.remove("hiddenSlide");

        if (i == contadorSig) {
            listaHeroImg[i].classList.add("nextSlide");
        } else if (i == contadorPrincipal) {
            listaHeroImg[i].classList.add("mainSlide");
        } else {
            listaHeroImg[i].classList.add("hiddenSlide");
        }
    }

}


// Código del lightbox de la Galería
var listaRutaImgGal = [];
var numeroIMG = 0;
var listaImgGaleria = document.getElementsByClassName("imgGaleria");

function mostrarLightboxGal() {

    for (var i = 0; i < listaImgGaleria.length; i++) {
        listaRutaImgGal.push(listaImgGaleria[i].src);
    }

    for (var i = 0; i < listaImgGaleria.length; i++) {
            listaImgGaleria[i].focus();
        listaImgGaleria[i].addEventListener('click', abrirLightBox);
    }

    // Lo que hará cuando hagamos click en la imagen
    function abrirLightBox() {
        // Nos da la ruta del elemento que hagamos click
        var rutaImgClick = event.currentTarget.src;
        // Conseguimos el índice de la imagen con indexOF y será el nuevo numeroIMG
        numeroIMG = listaRutaImgGal.indexOf(rutaImgClick);

        document.getElementById("imagenAMostrar").innerHTML = "<div class='imgPos'><p>" + (numeroIMG + 1) + "/" + listaImgGaleria.length + "</p></div><img class='imgLightbox' src=" + listaRutaImgGal[numeroIMG] + ">";
        document.getElementById("modalLightboxGaleria").style.display = "block";
        document.documentElement.style.overflow = "hidden";

        cerrarLightBox();
    }

    function cerrarLightBox() {
        window.addEventListener("click", function(event) {
            // Si se cumplen estas 4 condiciones se puede cerrar
            if (!event.target.matches(".imgLightbox") && !event.target.matches(".imgGaleria") && !event.target.matches(".lbButtons") && !event.target.matches(".fa-solid ")) {
                // Cerramos el modal
                document.getElementById("modalLightboxGaleria").style.display = "none";
                document.documentElement.style.overflowY = "auto";
            }
        })
    }
}

function nextImgGaleria() {
    numeroIMG++;
    // Si llegamos al final de la lista de imágenes seteamos el contador
    if (numeroIMG == listaRutaImgGal.length) {
        numeroIMG = 0;
    }
    document.getElementById("imagenAMostrar").innerHTML = "<div class='imgPos'><p>" + (numeroIMG + 1) + "/" + listaImgGaleria.length + "</p></div><img class='imgLightbox' src=" + listaRutaImgGal[numeroIMG] + ">";
}

function prevImgGaleria() {
    numeroIMG--;
    // Si llegamos 0 seteamos el númerom al último de mi lista de imágenes
    if (numeroIMG < 0) {
        numeroIMG = listaRutaImgGal.length - 1;
    }
    document.getElementById("imagenAMostrar").innerHTML = "<div class='imgPos'><p>" + (numeroIMG + 1) + "/" + listaImgGaleria.length + "</p></div><img class='imgLightbox' src=" + listaRutaImgGal[numeroIMG] + ">";
}


// Funciones menú horizontal
// Para saber que tipo de scroll estamos haciendo
var posPreviaScroll = document.documentElement.scrollTop;
// Llamamos a la función al hacer scroll
window.onscroll = function() { esconederMostrarMenu() };

function esconederMostrarMenu() {
    var posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll > posActualScroll) {
        // Cuando estamos subiendo mostramos el menú
        document.getElementById("navbar").style.top = "0";
        // Haremos el menú más pequeño una vez superado este scroll
        if (posActualScroll > 200) {
            document.getElementById("navbar").style.height = "75px";
            document.getElementById("navbar").style.fontSize = "1.15rem";
            document.getElementById("navbar").style.backgroundColor = "rgba(83, 82, 86, 0.7)";
            document.getElementById("menu").style.lineHeight = "75px";
            // Ajustamos también el submenú cuando se hace más pequeño el menú
            document.getElementById("submenu").style.top = "75px";
            // Ajustamos el padding del logo para que se vea algo más grande
            document.getElementById("logo").style.padding = "2px";
        } else {
            document.getElementById("navbar").style.height = "150px";
            document.getElementById("navbar").style.fontSize = "1.5rem";
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.getElementById("menu").style.lineHeight = "150px";
            document.getElementById("logo").style.padding = "10px";
            // Ajustamos el submenú cuando el menú es más grande
            document.getElementById("submenu").style.top = "150px";
        }

    } else {
        if (posActualScroll < 200) {
            document.getElementById("navbar").style.height = "75px";
            document.getElementById("navbar").style.fontSize = "1.15rem";
            document.getElementById("navbar").style.backgroundColor = "rgba(83, 82, 86, 0.5)";
            document.getElementById("menu").style.lineHeight = "75px";
            document.getElementById("submenu").style.top = "75px";;
            document.getElementById("logo").style.padding = "2px";
        } else {
            // Cuando estamos bajando escondemos el menú
            document.getElementById("navbar").style.top = "-150px";
        }
    }

    // Actualizamos la posición previa
    posPreviaScroll = posActualScroll;
}

// Función para animar las pestañas de las escuelas
function marcarPestana(contenedorAMostrar, tabClicada) {
    var listaConPestanas = document.getElementsByClassName("contenedorEscuelas");

    for (var i = 0; i < listaConPestanas.length; i++) {
        // De esta forma ocultamos todas las pestañas
        listaConPestanas[i].style.display = "none";
    }

    // Mostramos la pestaña que venga por parámetro
    document.getElementById(contenedorAMostrar).style.display = "block";

    // Recuperamos cada pestaña
    var tabLinks = document.getElementsByClassName("etiquetaPestana");
    // Iteramos en las pestañas y les cambiamos el color a negro
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].style.color = "#000";
    }
    // Cambiamos el color por la pestaña que nos venga por parámetro que será la activa
    document.getElementById(tabClicada).style.color = "#99b0a0";

    // Dependiendo de la pestaña seleccionada muevo con la propiedad transform el div de activo
    var pestanaActiva = document.querySelector('.pestanaActiva')
    if (contenedorAMostrar == 'EscuelaIniciacion') {
        pestanaActiva.style.transform = "translateX(0%)";
    } else if (contenedorAMostrar == 'EscuelaPerfec') {
        pestanaActiva.style.transform = "translateX(100%)";
    } else if (contenedorAMostrar == 'EscuelaPreCompeticion') {
        pestanaActiva.style.transform = "translateX(200%)";
    } else if (contenedorAMostrar == 'EscuelaCompeticion') {
        pestanaActiva.style.transform = "translateX(300%)";
    }

}

// Función para filtrar las imágenes de la galería
function verImagenes(filter) {
    // Recupero el contenedor de cada imagen
    var galImages = document.getElementsByClassName("imgGaleria");
    // Redupero el contenedor de cada pestaña de la galería
    var pestanaGaleria = document.getElementsByClassName("filtrosImg");

    // Itero por las estañas y les pongo el color por defecto
    for (var x = 0; x < pestanaGaleria.length; x++) {
        pestanaGaleria[x].children[0].style.color = "#000";
        pestanaGaleria[x].children[0].style.backgroundColor = "#FDFAF9"

    }
    // En el caso de que el id de la estapa coincida con el filter cambio los colores a activo
    document.getElementById(filter).style.color = "#FDFAF9";
    document.getElementById(filter).style.backgroundColor = "#99b0a0";

    for (var i = 0; i < galImages.length; i++) {
        // Itero  enter los contenedores de las imágenes
        // Si el filtro es todas vuelvo a poner display block en cada una para mostrarlas
        if (filter == "todas") {
            galImages[i].parentElement.style.display = "block";
            document.getElementById("todas").style.backgroundColor = "#99b0a0";
            document.getElementById("todas").style.color = "#FDFAF9";
            // Si coincide con el filtro las muestro
        } else if (galImages[i].alt == filter) {
            galImages[i].parentElement.style.display = "block";
            // Si no coincide con el filtro las oculto
        } else {
            galImages[i].parentElement.style.display = "none";
        }
    }
}

// Función para abrir los acordeones
function Acordeon() {
    // Para localizar la cabecera de los accordeones
    var accordion = document.getElementsByClassName("cabeceraAcordeon");
    accordion.focus();
    // Itero en el array de cabeceras
    for (var i = 0; i < accordion.length; i++) {
        // De esta forma se cuando se hizo click en el acordeon y en cual en concreto y ejecuto la función que lo abre
        accordion[i].addEventListener("click", AbrirAcordeon);
    }

    function AbrirAcordeon() {
        // De esta forma accedo al elemento siguiente al último especificado que era la cabecera del accordeon
        var contenedor = this.nextElementSibling;
        // Accedo al segundo hijo de la cabecera del accordeon
        var icono = this.children[1];
        // Si el contenedor no tiene altura lo abro
        if (!contenedor.style.height) {
            // Cambio la altura del contenedor para mostrar el contenido
            contenedor.style.height = "380px";
            // Hago girar el icono
            icono.style.transform = "rotate(180deg)";
        } else {
            // Seteo la altura para que se cierre y devuelvo el icono a su estado inicial
            contenedor.style.height = "";
            icono.style.transform = "rotate(0deg)";
        }
    }
}

// Función que anima la línea del título de las secciones
function animarLineaSeccion() {
    document.addEventListener('aos:in', ({ detail }) => {
        console.log('animated in', detail);
    });
    // Localizo todas las secciones del documento que contienen los hr
    var secciones = document.querySelectorAll("section");
    // Itero entre las diferentes secciones
    for (var i = 0; i < secciones.length; i++) {
        // Nos da la altura de la ventana
        var alturaVentana = window.innerHeight;
        // De esta forma sabemos la distancia que hay de cada sección al inicio de la ventana
        var sectionTop = secciones[i].getBoundingClientRect().top;
        // Es la altura a la que quiero que se ejecute la animación
        var visible = 250;
        // Busco los hr de cada sección
        var linea = document.getElementsByClassName("lineaSeccion")[i];

        if (sectionTop < alturaVentana - visible) {
            // Añado la clase que contiene la animación para que se ejecute
            linea.classList.add("lineaSeccionAnimacion");
        } else {
            // Si no se cumple la condición elimino la clase de la animación
            linea.classList.remove("lineaSeccionAnimacion");
        }
    }
}
// Lanzamos la función en el momento que se hace scroll
window.addEventListener("scroll", animarLineaSeccion);