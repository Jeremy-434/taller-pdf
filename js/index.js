
function generarPdfHamburguesa() {

    let tipoDeHamburguesa = document.getElementById('TipodeHamburguesa').value;
    let tipoDeBebida = document.getElementById('TipodebebidaHamburguesa').value;
    let tipoDePostre = document.getElementById('TipodepostreHamburguesa').value;
    let numPersonas = document.getElementById('Cantidadpers').value;
    let nombre = document.getElementById('Nombre').value;
    let direccion = document.getElementById('Direccion').value;

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
    doc.text(20, 90, 'Direccion:' + direccion);
    doc.save('hamburguesa-pdf');
}

function generarPdfPerroCaliente() {

    let tipoDePerroCaliente = document.getElementById('opcion_1').value;
    let tipoDeBebida = document.getElementById('Tipodebebida').value;
    let tipoDePostre = document.getElementById('Tipodepostre').value;
    let numPersonas = document.getElementById('opcion_4').value;
    let nombre = document.getElementById('opcion_5').value;
    let direccion = document.getElementById('opcion_6').value;

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
    doc.text(20, 90, 'Direccion:' + direccion);
    doc.save('hamburguesa-pdf');
}