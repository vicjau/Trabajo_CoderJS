/*let productos =[
    {id:1 , nombre:"Empanadas de Carne Suave", precio: 120},
    {id:2 , nombre:"Empanadas de Verduras", precio: 120},
    {id:3 , nombre:"Empanadas de Pollo", precio: 120},
    {id:4 , nombre:"Empanadas de Choclo", precio: 120},
    {id:5 , nombre:"Empanadas de Jamno y Queso", precio: 120},
    {id:6 , nombre:"Empanadas de Burger", precio: 120},
    {id:7 , nombre:"Pizza de Muzzarella", precio: 700},
    {id:8 , nombre:"Pizza de Napolitana", precio: 750},
    {id:9 , nombre:"Pizza de Fugazzeta", precio: 750},
    {id:10 , nombre:"Pizza de Fugazza", precio: 750},
    {id:11 , nombre:"Pizza de Jamon", precio: 780},
    {id:12 , nombre:"Pizza de Faina", precio: 150},
    {id:13 , nombre:"Milanesa de carne o pollo con guarnicion", precio: 700},
    {id:14 , nombre:"Sandwich de milanesa de carne o pollo", precio: 600},
    {id:15 , nombre:"Omellete de jamon y queso", precio: 500},
    {id:16 , nombre:"Tarta indivudual de verdura", precio: 500},
    {id:17 , nombre:"Flan casero con dulce de leche o crema", precio: 400},
    {id:18 , nombre:"Panqueque con dulce de leche", precio: 400},
    {id:19 , nombre:"Budin de pan", precio: 400},
    {id:20 , nombre:"Arroz con leche", precio: 400}
];*/

class Cliente {
	constructor(nombre, cantidad, pago) {
		this.nombre = nombre
		this.cantidad = cantidad
		this.pago = pago
	}
}

let lista_clientes = []
let nombre = prompt("Ingrese su nombre")
let menu = prompt(
	`Ingrese el producto que desea:\n 1 - EMPANADAS $120\n 2 - PIZZAS $700\n 3 - MINUTAS $700\n 4 - POSTRES $400\n 5 - SALIR`
).toLowerCase()

let cantidad = Number(prompt("Ingrese la cantidad que desea"))
let pago = Number(prompt("Ingrese con cuanto va a pagar"))

while (menu != 5) {
	if (menu == 1 || menu == "empanadas") { 		
        let empanadas = 120 * cantidad
		let resultado_emp = pago - empanadas
		console.log(nombre, "tu vuelto es: ", resultado_emp)
    } 
    else if (menu == 2 || menu == "pizzas") {
	let pizzas = 700 * cantidad
	let resultado_pizzas = pago - pizzas		
    console.log(nombre, "tu vuelto es: ", resultado_pizzas)
    } 
    else if (menu == 3 || menu == "minutas") {
		let minutas = 700 * cantidad
        let resultado_minu = pago - minutas
        console.log(nombre, "tu vuelto es: ", resultado_minu)
    } 
    else if (menu == 4) {
 		let postres = 400 * cantidad
        let resultado_postres = pago - postres
        console.log(nombre, "tu vuelto es: ", resultado_postres)
    } 
    else alert("No ingresaste una opcion correcta")
    menu = Number(
    prompt(`Ingrese el producto que desea:\n 1 - EMPANADAS $120\n 2 - PIZZAS $700\n 3 - MINUTAS $700\n 4 - POSTRES $400\n 5 - SALIR`)
	)
}

let nuevos_clientes = new Cliente(nombre, cantidad, pago)
lista_clientes.push(nuevos_clientes)
console.log(lista_clientes)

for (let compra of lista_clientes) {
	console.log("El nombre del cliente es: ", compra.nombre)
	console.log("La cantidad es: ", compra.cantidad)
	console.log("Paga con $", compra.pago)
}
