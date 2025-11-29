const radios = document.querySelectorAll('input[name="modelo-color"');
const spanColor = document.querySelector('#color');
const btnCambiarColor = document.querySelector('#cambiar-color');

function generarCodigoHexadecimal() {
    const caracteresHexadecimal = '0123456789ABCDEF';
    let resultado = '#';
    for (let i = 0; i < 6; i++) resultado += caracteresHexadecimal[Math.floor(Math.random() * 16)];
    return resultado;
};

function generarCodigoRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let resultado = `rgb(${red}, ${green}, ${blue})`;
    return resultado;
};

function generarCodigoRGBA() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random().toFixed(2);
    let resultado = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    return resultado;
}

function cambiarColor(codigoGenerado) {
    spanColor.textContent = codigoGenerado;
    spanColor.style.color = codigoGenerado;
    document.body.style.backgroundColor = codigoGenerado;
};

async function copiarColor() {
    try {
        const texto = spanColor.innerHTML;
        await navigator.clipboard.writeText(texto);
        alert('Código copiado en el portapapeles');
    } catch (err) {
        alert('Falló al copiar: ', err);
    }
};

let modeloSeleccionado = document.querySelector('input[name="modelo-color"]:checked').value;
radios.forEach(radio => {
    radio.addEventListener('change', () => modeloSeleccionado = radio.value);
});

btnCambiarColor.addEventListener('click', () => {
    let codigoGenerado;
    if (modeloSeleccionado === 'HEX') {
        codigoGenerado = generarCodigoHexadecimal();
        cambiarColor(codigoGenerado);
    } else if (modeloSeleccionado === 'RGB') {
        codigoGenerado = generarCodigoRGB();
        cambiarColor(codigoGenerado);
    } else {
        codigoGenerado = generarCodigoRGBA();
        cambiarColor(codigoGenerado);
    }
});

spanColor.addEventListener('click', copiarColor);
