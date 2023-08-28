// clase gasto que se utilizará para los ingresos de gastos.
class Gasto {
  constructor(id, nombre, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.cantidad = cantidad;
  }
}

function nuevoGasto(expense) {

  const tr = document.createElement('tr');
  const tbody = document.getElementById("tbody")
    
  tr.id =`elemento${expense.id}`
  tr.innerHTML =
  `<tr id="elemento${expense.id}">
    <td>${expense.nombre}</td>
    <td>$${expense.cantidad}</td>
    <td>
      <a href="#" class="delete-icon" onclick="calcular(${expense.id},${expense.cantidad})">
        <i class="bi bi-trash-fill"></i>
      </a>
    </td>
  </tr>`;
  // this.listaGastos.appendChild(tr);
  tbody.appendChild(tr);

}



var pre;
function inputPresupuesto() {
  pre = document.getElementById("presupuestoInput").value;
  console.log(`pre: ${pre}`)
  document.getElementById("cantidadPresupuesto").innerHTML = pre;
}

var sumExpenses = 0;
let title = document.getElementById("gastoInput").value;
let amount = document.getElementById("cantidadInput").value;
var gas = [];
var bal = 0;

function inputGasto() {
  title = document.getElementById("gastoInput").value;
  amount = document.getElementById("cantidadInput").value;

  let ga = new Gasto(Math.floor((Math.random() * 100) + 1), title, amount)

  sumExpenses = sumExpenses + parseInt(ga.cantidad);

  gas.push(ga);
  console.log(gas)
  console.log(sumExpenses)

  document.getElementById("cantidadGasto").innerHTML = sumExpenses;
  bal = parseInt(pre) - sumExpenses;
  console.log(bal);
  document.getElementById("cantidadBalance").innerHTML = bal;

  nuevoGasto(ga);
}

let a;
function calcular(id, amount) {
  console.log(gas)
  console.log("id: " + id)
  console.log("amount: " + amount)


  // match ids
  for (let i = 0; i < gas.length; i++) {
    if (id === gas[i].id) {
      let toBeDeleted = document.getElementById("elemento" + id)
      toBeDeleted.remove()
      gas.splice(i, 1)
    }

  }

  let gastos = gas.map(x => parseInt(x.cantidad))
  console.log(gastos)
  let editedGastos;


  editedGastos = gastos.splice(gastos.indexOf((parseInt(amount))), 1)
  console.log(editedGastos.reduce((a, b) => a + b, 0))
  document.getElementById("cantidadGasto").innerHTML = editedGastos.reduce((a, b) => a + b, 0);
  document.getElementById("cantidadBalance").innerHTML = parseInt(pre) - editedGastos.reduce((a, b) => a + b, 0);

}



