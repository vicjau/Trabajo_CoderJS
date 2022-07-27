let boton = document.querySelectorAll(".boton_selec")
console.log(boton);
let div = document.querySelectorAll("div")
let btn_borrar = document.querySelectorAll(".borrar");
let carrito =[]


function compra(e){
    console.log("El producto que seleccionaste es ", e.target);
    let div = e.target;
    let div_boton = div.parentNode;
    let producto_h3 = div_boton.querySelector("h3").textContent;
    let precio = div_boton.querySelector(".precio").textContent;
    let img = div_boton.querySelector("img").src;
    console.log(img)
    let parrafo = document.createElement("p").textContent;
    parrafo.innerHTML = "Seleccionaste este producto";
    div.append(parrafo);
    console.log(parrafo)

    let productos = {
        nombre: producto_h3,
        precio: precio,
        img: img
    };

    carrito.push(productos);
    let json = JSON.stringify(carrito);
    localStorage.setItem("carrito", json);
    console.log(carrito);

    tu_compra()
}

function tu_compra(productos){
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${productos.nombre}</td>
                    <td>${producto.precio}</td>
                    <td><button class="borrar">Borrar</button></td>`;

    let tabla = document.getElementById("tbody");
    tabla.append(fila);
    
}

for(let boton_compra of boton){
    boton_compra.addEventListener("click", compra);
}

for(let boton of btn_borrar){
    boton.addEventListener("click" , eliminar)
}

function eliminar(e){
    e.target.remove
}


































/*class Cliente {
	constructor(nombre, cantidad, pago) {
		this.nombre = nombre
		this.cantidad = cantidad
		this.pago = pago
	}
}

let lista_clientes = []
let nombre = prompt("Ingrese su nombre")
let menu = prompt(`Ingrese el producto que desea:\n 1 - EMPANADAS $120\n 2 - PIZZAS $700\n 3 - MINUTAS $700\n 4 - POSTRES $400\n 5 - SALIR`).toLowerCase()
let cantidad = Number(prompt("Ingrese la cantidad que desea"))
let pago = Number(prompt("Ingrese con cuanto va a pagar"))

while (menu != 5) {
	if (menu == 1 || menu == "empanadas") { 		
        let empanadas = 120 * cantidad;
		let resultado_emp = pago - empanadas;
		console.log(nombre, "tu vuelto es: ", resultado_emp);
    } 
    else if (menu == 2 || menu == "pizzas") {
	    let pizzas = 700 * cantidad;
        let resultado_pizzas = pago - pizzas;		
        console.log(nombre, "tu vuelto es: ", resultado_pizzas);
    } 
    else if (menu == 3 || menu == "minutas") {
		let minutas = 700 * cantidad;
        let resultado_minu = pago - minutas;
        console.log(nombre, "tu vuelto es: ", resultado_minu);
    } 
    else if (menu == 4 || menu == "postres") {
 		let postres = 400 * cantidad;
        let resultado_postres = pago - postres;
        console.log(nombre, "tu vuelto es: ", resultado_postres);
    } 
    else alert("La opcion que ingresaste no es correcta")
    menu = Number(prompt(`Ingrese el producto que desea:\n 1 - EMPANADAS $120\n 2 - PIZZAS $700\n 3 - MINUTAS $700\n 4 - POSTRES $400\n 5 - SALIR`));
}


let nuevos_clientes = new Cliente(nombre, cantidad, pago)
lista_clientes.push(nuevos_clientes)
console.log(lista_clientes)

for (let compra of lista_clientes) {
	console.log("El nombre del cliente es: ", compra.nombre)
	console.log("La cantidad es: ", compra.cantidad)
	console.log("Paga con $", compra.pago)
}*/




