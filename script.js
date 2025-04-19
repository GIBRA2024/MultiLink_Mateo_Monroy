function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
FN:Mateo Monroy
TEL:+57 3114568666
EMAIL: monroymateo1@gmail.com
EMAIL;type=work: gerencia@gibracompany.com
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


/* Función para rastrear clics en botones
function trackButtonClick(buttonName) {
    gtag('event', 'click', {
        'event_category': 'Botón',
        'event_label': buttonName
    });
}

// Añadir el evento al hacer clic en los botones
document.querySelectorAll('.social-buttons a').forEach(button => {
    button.addEventListener('click', function() {
        trackButtonClick(button.innerText); // Enviar el nombre del botón como etiqueta
    });
});

document.querySelector('button[onclick="descargarContacto()"]').addEventListener('click', function() {
    trackButtonClick('Guardar Contacto');
});
*/
