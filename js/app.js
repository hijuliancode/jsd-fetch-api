// variables
const txtBtn = document.getElementById('txtBtn')
const jsonBtn = document.getElementById('jsonBtn')
const apiBtn = document.getElementById('apiBTN')
const resultado = document.getElementById('resultado')

// event listeners
txtBtn.addEventListener('click', cargarTxt)
jsonBtn.addEventListener('click', cargarJson)
apiBtn.addEventListener('click', cargarApi)

// functions
function cargarTxt(e) {
  e.preventDefault();

  fetch('datos.txt')
    .then((response) => {
      return response.text();
    }).then((response) => {
      resultado.innerHTML = response
    }).catch(() => {
      console.log('No se han podido cargar los datos')
    })

}
function cargarJson(e) {
  e.preventDefault();
  fetch('empleados.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      let html = '<ul>';
      data.forEach((empleado) => {
        html += `
          <li><strong>${empleado.nombre}</strong>: ${empleado.puesto}</li>
        `
      })
      html += '</ul>'
      resultado.innerHTML = html;
    })
    .catch(() => {
      console.log('No se han podido cargar los datos')
    })
}
function cargarApi(e) {
  e.preventDefault();

}