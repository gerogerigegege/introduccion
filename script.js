const textElement = document.getElementById('text');
const text = "Los Jóvenes caminan\n\nEn las afueras de cc arenales\n\n Se dispersan alucinadamente\n\n Como tóxicos poemas \n\n Incompletos \n\n Los verás pasar \n\n Ligeramente eternos \n\n Descuidados como los mares \n\n Es esta la historia \n\n Estas son sus habitaciones \n\n Llueve";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    if (text.charAt(index) === '\n') {
      textElement.innerHTML += '<br><br>'; // Agrega saltos de línea como párrafos
    } else {
      textElement.innerHTML += text.charAt(index);
    }
    index++;
    setTimeout(typeWriter, 100); // Ajusta el tiempo de escritura aquí (en milisegundos)
  }
}

typeWriter();