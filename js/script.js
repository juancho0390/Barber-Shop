

const descripciones = ["Más de 10 años de experiencia, un apasionado de los cortes clásicos y las técnicas tradicionales. Su precisión y atención al detalle aseguran un look impecable que nunca pasa de moda. Si buscas un estilo que combine elegancia y masculinidad, es tu barbero ideal.",
    "Creativo y a la vanguardia, especializado en cortes modernos, fades perfectos y estilos personalizados. Su enfoque innovador y habilidad para adaptarse a las últimas tendencias hacen de cada visita una experiencia única. ¡Con él, tu estilo siempre estará en tendencia!",
    "Maestro en el arte del cuidado de barbas. Conoce todas las técnicas para perfilar, arreglar y mantener tu barba en perfecto estado. Si buscas un look masculino y bien definido, su experiencia y dedicación te ayudarán a alcanzar el resultado que deseas.",
    "No solo corta cabello, crea arte. Detallista y perfeccionista, combina técnica y creatividad para ofrecer un servicio excepcional. Ya sea un diseño personalizado o un corte tradicional con un toque moderno, Mike transforma cada visita en una obra maestra."]

const nombres = ["Jack", "John", "Lester", "Mike"]


/* funcion que cambia la descripcion y la foto de los barberos segun se pasa el mouse por encima del nombre*/
function desc(n){
    const desc = document.querySelector(".presentacion")
    const nombre = document.querySelector(".nombre")
    const firma = document.querySelector(".firma");
    const foto = document.querySelector(".foto");
    foto.style.border = "solid"
    foto.style.backgroundSize = "cover";
    foto.style.backgroundRepeat = 'no-repeat';
    foto.style.backgroundPosition = 'center';
    foto.style.borderRadius = '100%';
    firma.style.fontFamily = "Signature";

    switch(n){
        case 1:
            nombre.textContent = nombres[0]
            desc.textContent = descripciones[0]
            foto.style.backgroundImage = 'url("assets/imagenes/jack.jpg")';
            firma.textContent = "Black Jack"
            break

        case 2:
            nombre.textContent = nombres[1]
            desc.textContent = descripciones[1]
            foto.style.backgroundImage = 'url("assets/imagenes/john.jpg")';
            firma.textContent = "Lil John"
            break

        case 3:
            nombre.textContent = nombres[2]
            desc.textContent = descripciones[2]
            foto.style.backgroundImage = 'url("assets/imagenes/lester.jpg")';
            firma.textContent = "Crazy Lester"
            break

        case 4:
            nombre.textContent = nombres[3]
            desc.textContent = descripciones[3]
            foto.style.backgroundImage = 'url("assets/imagenes/mike.jpg")';
            firma.textContent = "Magic Mike"
            break
    }
}




const iconos = ["url(assets/svg/man-haircut.svg)",
                "url(assets/svg/mustache.svg)",
                "url(assets/svg/man-shave.svg)",
                "url(assets/svg/man-treatment.svg)",
                "url(assets/svg/man-spa.svg)",
                "url(assets/svg/barber.svg)",
                "url(assets/svg/products.svg)",
                "url(assets/svg/masculine.svg)",
]

function icons() {
    for (let n = 1; n < 9; n++) {
        const elemento = document.getElementById(n)
        elemento.style.backgroundImage = iconos[n-1];
    }
}



//Funcion para cambiar los servicios y las descripciones

const servicios = ["Cortes Clasicos y Modernos", "Arreglo de Barba y Bigote", "Afeitado Clasico con Navaja", "Tratamientos Capilares", "Servicio Premium Spa Masculino", "Estilismo Personalizado", "Productos Exclusivos Masculinos", " Wisky, Musica y Camaraderia"]

const descServicios = [ "Recupera la esencia de la masculinidad con cortes que reflejan estilo y carácter. Desde los clásicos hasta los estilos modernos y desvanecidos, cada servicio está diseñado para resaltar tu personalidad y presencia.",
                        "Define tu estilo con precisión. Ofrecemos recortes tradicionales, perfilados nítidos y tratamientos especiales que garantizan una barba impecable. Nuestro objetivo, tu imagen, reflejo de tu fuerza y confianza.",
                        "Experimenta el ritual del afeitado como en los viejos tiempos. Un proceso relajante que incluye toallas calientes, aceites esenciales y un afeitado al ras, diseñado para revitalizar tu piel y resaltar tu masculinidad.",
                        "Cuidar tu cabello es parte de proyectar una imagen sólida. Ofrecemos soluciones para fortalecer, hidratar y mantener un cuero cabelludo saludable, porque la verdadera masculinidad también está en el cuidado personal.",
                        "Relájate y recarga energías con masajes para cuero cabelludo, faciales refrescantes y tratamientos antiestrés, adaptados especialmente para el hombre moderno que busca equilibrio sin perder su esencia varonil.",
                        "Nuestro equipo de barberos expertos te asesora para que encuentres el estilo que mejor se adapte a tu rostro, estilo de vida y personalidad. Porque cada hombre merece destacar de manera unica y auténtica.",
                        "Encuentra productos de calidad premium diseñados específicamente para el cuidado masculino. Desde ceras y pomadas hasta aceites para barba, todo lo que necesitas para mantener tu imagen impecable.",
                        "Sumérgete en un espacio diseñado para hombres, donde la tradición, el estilo y la camaradería se encuentran. Música, Wisky, decoración y atención personalizada para hacerte sentir parte de algo especial."]


function desc_serv(n){
    const desc = document.querySelector(".descServicio");
    const nombreServicio = document.querySelector(".servicio");
    const firma = document.querySelector(".firma");
    const foto = document.querySelector(".foto-servicio");
    foto.style.border = "solid"
    foto.style.backgroundSize = "cover";
    foto.style.backgroundRepeat = 'no-repeat';
    foto.style.backgroundPosition = 'center';
    foto.style.borderRadius = '100%';
    

    switch (n) {
        case 1:
            nombreServicio.textContent = servicios[0]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[0]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio1.jpg")';
            firma.textContent = "Black Jack"
            break

        case 2:
            nombreServicio.textContent = servicios[1]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[1]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio2.jpg")';
            firma.textContent = "Black Jack"
            break

        case 3:
            nombreServicio.textContent = servicios[2]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[2]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio3.jpg")';
            firma.textContent = "Black Jack"
            break

        case 4:
            nombreServicio.textContent = servicios[3]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[3]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio4.jpg")';
            firma.textContent = "Black Jack"
            break

        case 5:
            nombreServicio.textContent = servicios[4]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[4]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio5.jpg")';
            firma.textContent = "Black Jack"
            break

        case 6:
            nombreServicio.textContent = servicios[5]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[5]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio6.jpg")';
            firma.textContent = "Black Jack"
            break

        case 7:
            nombreServicio.textContent = servicios[6]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[6]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio7.jpg")';
            firma.textContent = "Black Jack"
            break

        case 8:
            nombreServicio.textContent = servicios[7]
            nombreServicio.style.fontSize = "1.5rem"
            desc.textContent = descServicios[7]
            foto.style.backgroundImage = 'url("assets/imagenes/servicio8.jpg")';
            firma.textContent = "Black Jack"
            break

    }
}



function mostrar(n) {

    const arreglo = document.querySelectorAll(".seccion-principal")
    console.log(arreglo)

    switch (n) {
        case 0:
            for (let index = 0; index < 2; index++) {
                arreglo[index].style.display = "none";
            }
            arreglo[0].style.display = "block"
            break;

        case 1:
            for (let index = 0; index < 2; index++) {
                arreglo[index].style.display = "none";
            }
            arreglo[1].style.display = "block"
            break;

        case 10:
            for (let index = 0; index < 0; index++) {
                arreglo[index].style.display = "none";
            }
            arreglo[0].style.display = "block"
            break;
    }

    
}






document.addEventListener('DOMContentLoaded', desc(1));
document.addEventListener('DOMContentLoaded', icons());
document.addEventListener('DOMContentLoaded', desc_serv(1));
document.addEventListener('DOMContentLoaded', mostrar(10));

