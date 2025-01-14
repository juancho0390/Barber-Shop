

const descripciones = ["Con más de 10 años de experiencia, un apasionado de los cortes clásicos y las técnicas tradicionales. Su precisión y atención al detalle aseguran un look impecable que nunca pasa de moda. Si buscas un estilo que combine elegancia y masculinidad, Carlos es tu barbero ideal.",
    "Creativo y a la vanguardia, especializado en cortes modernos, fades perfectos y estilos personalizados. Su enfoque innovador y habilidad para adaptarse a las últimas tendencias hacen de cada visita una experiencia única. ¡Con él, tu estilo siempre estará en tendencia!",
    "Maestro en el arte del cuidado de barbas. Conoce todas las técnicas para perfilar, arreglar y mantener tu barba en perfecto estado. Si buscas un look masculino y bien definido, su experiencia y dedicación te ayudarán a alcanzar el resultado que deseas.",
    "No solo corta cabello, crea arte. Detallista y perfeccionista, combina técnica y creatividad para ofrecer un servicio excepcional. Ya sea un diseño personalizado o un corte tradicional con un toque moderno, Pedro transforma cada visita en una obra maestra."]

const nombres = ["Jack", "John", "Lester", "Mike"]

let n = 0

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


document.addEventListener('DOMContentLoaded', desc(1));