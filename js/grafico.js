function generarGrafico() {

  let espacio1 = document.getElementById('miDiv');
  let espacio2 = document.getElementById('miDiv2');
  let menu = document.getElementById('input-menu').value;
  let interfaz = document.getElementById('input-interfaz').value;
  let general = document.getElementById('input-general').value;

  // alert(espacio +menu + interfaz + general);


  var data = [{
    values: [menu, interfaz, general],
    labels: ['menu', 'interfaz', 'general'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot(espacio1, data, layout);

// GRAFICO DE LINEAS

  var trace1 = {
    x: ["menu", "interfaz", "general"],
    y: [menu, interfaz, general],
    type: 'scatter'
  };
  
  
  var data = [trace1];
  
  Plotly.newPlot(espacio2, data);
}

