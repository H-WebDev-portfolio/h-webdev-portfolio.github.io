let montos =  localStorage.getItem("saldo");


let dinero;
if(montos){
   dinero = parseInt(JSON.parse(montos));
} else {
   let xd =  localStorage.setItem("saldo", JSON.stringify(0));

   dinero = parseInt(JSON.parse(xd));
}
let gastos;
const obtenerGastos = localStorage.getItem("gastos");
const procesarGastos = JSON.parse(obtenerGastos);
if(obtenerGastos){
gastos = parseInt(procesarGastos);
} else {
let set = localStorage.setItem('gastos', JSON.stringify(0));
gastos = parseInt(set);
}


//DOM
const btnIngreso = document.getElementById('agregarDinero');
const btnGasto = document.getElementById('agregarGasto');
const divIngreso = document.getElementById('addMoney');
const divGasto = document.getElementById('addGasto');
const spanDinero = document.getElementById('money');

btnIngreso.addEventListener('click', () => {
const divDinero = document.createElement('div');
divDinero.classList.add('formulario-dinero');
divDinero.innerHTML = `
<input type="number" id="inputDinero" placeholder="cantidad">

<button id="enviar-dinero">Agregar</button>

`;
btnIngreso.style.display = "none";
divIngreso.append(divDinero);
const inputDinero = document.getElementById('inputDinero');
const btnInputDinero = document.getElementById('enviar-dinero');
btnInputDinero.addEventListener('click', () => {
 const dineroAgregado = parseInt(inputDinero.value);

dinero += dineroAgregado;
divDinero.style.display = "none";
btnIngreso.style.display = "block";
 localStorage.setItem("saldo", JSON.stringify(dinero));
window.open('index.html', '_self');
})
})
btnGasto.addEventListener('click', () => {
   const divyGasto = document.createElement('div');
   divyGasto.classList.add('formulario-gasto');
   divyGasto.innerHTML = `
   <input type="number" id="inputGasto" placeholder="cantidad">
   
   <button id="enviar-gasto">Agregar</button>
   
   `;
   btnGasto.style.display = "none";
   divGasto.append(divyGasto);
   const inputGasto = document.getElementById('inputGasto');
const btnInputGasto = document.getElementById('enviar-gasto');
btnInputGasto.addEventListener('click', () => {
gastoRealizado = parseInt(inputGasto.value);
localStorage.setItem("gastos", JSON.stringify(gastoRealizado));
window.open('index.html', '_self');
})
})
let total = dinero - gastos;
if(total == 0){
   spanDinero.textContent = 0;
} else {
   spanDinero.textContent = total;
}

