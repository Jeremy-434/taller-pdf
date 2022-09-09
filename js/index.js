
function generarPdfHamburguesa() {

    let tipoDeHamburguesa = document.getElementById('').value;
    let tipoDeBebida = document.getElementById('').value;
    let tipoDePostre = document.getElementById('').value;
    let numPersonas = document.getElementById('').value;
    let nombre = document.getElementById('').value;
    let direccion = document.getElementById('').value;

    var doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(20,5, 'Reporte de Hamburguesa');
    doc.setFontSize(12);
    doc.text(20, 30, 'Fecha: ' + new Date());
    doc.setFontSize(10);
    doc.text(20, 40, 'Tipo De Hamburguesa:' + tipoDeHamburguesa);
    doc.text(20, 50, 'Tipo De Bebida:' + tipoDeBebida);
    doc.text(20, 60, 'Tipo De Postre:' + tipoDePostre);
    doc.text(20, 70, 'Numero de personas:' + numPersonas);
    doc.text(20, 80, 'Nombre:' + nombre);
    doc.text(20, 80, 'Direccion:' + direccion);
    doc.save('hamburguesa-pdf');
}

function generarPdfPerroCaliente() {

    let tipoDePerroCaliente = document.getElementById('').value;
    let tipoDeBebida = document.getElementById('').value;
    let tipoDePostre = document.getElementById('').value;
    let numPersonas = document.getElementById('').value;
    let nombre = document.getElementById('').value;
    let direccion = document.getElementById('').value;

    var doc = new jsPDF();

    doc.setFontSize(20);
    doc.text(20,5, 'Reporte de Hamburguesa');
    doc.setFontSize(12);
    doc.text(20, 30, 'Fecha: ' + new Date());
    doc.setFontSize(10);
    doc.text(20, 40, 'Tipo De Hamburguesa:' + tipoDePerroCaliente);
    doc.text(20, 50, 'Tipo De Bebida:' + tipoDeBebida);
    doc.text(20, 60, 'Tipo De Postre:' + tipoDePostre);
    doc.text(20, 70, 'Numero de personas:' + numPersonas);
    doc.text(20, 80, 'Nombre:' + nombre);
    doc.text(20, 80, 'Direccion:' + direccion);
    doc.save('hamburguesa-pdf');
}