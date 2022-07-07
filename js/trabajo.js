class cliente{
    constructor(nombre, producto, cantidad, pago, mail, direccion){
        this.nombre = nombre;
        this.producto = producto;
        this.catidad = cantidad;
        this.pago = pago;
        this.mail = mail;
        this.direccion = direccion;
    }
}

let lista_clientes = [];

for(let i=0 ; i<2 ; i++){
    let nombre = prompt("Ingrese su nombre");
    let producto = prompt(`Ingrese el producto que desea: 1.EMPANADAS $120
                                                        2.PIZZAS $700
                                                        3.MINUTAS $700
                                                        4.POSTRES $400`);
    let cantidad = Number(prompt("Ingrese la cantidad que desea"));
    let pago = Number(prompt("Ingrese con cuanto va a pagar"));

    if(producto == "1" || producto == "EMPANADAS" || producto == "empanadas" ){
        let empanadas = 120 * cantidad;
        let resultado_emp = pago - empanadas;
        console.log((nombre), "tu vuelto es: ",  resultado_emp );
    }
    else if(producto == "2" || producto == "PIZZAS" || producto == "pizzas"){
        let pizzas = 700 * cantidad;
        let resultado_pizzas = pago - pizzas;
        console.log((nombre), "tu vuelto es: ", resultado_pizzas);
    }
    else if(producto == "3" || producto == "MINUTAS" || producto == "minutas"){
        let minutas = 700 * cantidad;
        let resultado_minu = pago - minutas;
        console.log((nombre), "tu vuelto es: ", resultado_minu);
    }
    else if(producto == "4" || producto == "POSTRES" || producto == "postres"){
        let postres = 400 * cantidad;
        let resultado_postres = pago - postres;
        console.log((nombre), "tu vuelto es: ", resultado_postres);
    }
    else{
        alert("Lo que ingreso no es correcto")
        break;
    }

    let mail = prompt("Ingrese su mail para contacto");
    let direccion = prompt("Ingrese su direccion para poder realizar el envio");
    
    let nuevos_clientes = new cliente(nombre, producto, cantidad, pago, mail, direccion);
    lista_clientes.push(nuevos_clientes);
    console.log(lista_clientes); 
}

for(let compra of lista_clientes){
    console.log("El nombre del cliente es: ", compra.nombre);
    console.log("El producto que elejio es: ", compra.producto);
    console.log("La cantidad es: ", compra.catidad);
    console.log("Paga con $", compra.pago);
    console.log("El mail es ", compra.mail);
    console.log("La direccion es:", compra.direccion);
}