// e-comerce tienda deportes

class clientes{
    constructor (codigoProducto, nombreProducto, precioProducto, stockProducto){
        this.nombreCliente = nombre
        this.apellidoCliente = apellido
        this.direccionCliente = direccionCliente
        this.comunaCliente = comunaCliente
        }
        }

let formularioClientes= document.getElementById("formClientes");

formularioClientes.addEventListener("submit", revision);

function revision(e){
    e.preventDefault();
    let formulario = e.target;

    alert(formulario.children[3].value)

}



    






































/*     
class Producto{
    constructor (codigoProducto, nombreProducto, precioProducto, stockProducto){
        this.codigoProducto = parseInt(codigoProducto)
        this.nombreProducto = nombreProducto
        this.precioProducto = parseInt(precioProducto)
        this.stockProducto = parseInt(stockProducto)

    }
    sumarIva() {
        this.precioProducto = this.precioProducto * 1.19;
    }

    venta() {
        this.stockProducto = this.stockProducto - 1 ;
    }

    

}

const producto1 = new Producto(1002, "Raqueta de tenis", 25990, 10)
const producto2 = new Producto(1003, "Pelota de fútbol", 12990, 10)
const producto3 = new Producto(1002, "Bicicleta", 106990, 10)

producto1.sumarIva()
producto2.sumarIva()
producto3.sumarIva()


const productos = [producto1, producto2, producto3]


// Ver productos


function verProductos () {

    let agregar = prompt ("desea ver los producto (sí o no)")

    if (agregar == "sí" || agregar == "si"){

        productos.forEach(productos =>{
            alert ("Disponible "+productos.nombreProducto+ " precio: "+parseInt(productos.precioProducto))
        });

        const listaCompra = [];

    function agregarProductos() {

    
        let otroProducto
   

        do{
            let eleccion = prompt ("Nombre de producto solicitado")
            let cantidad = prompt ("Cantidad solicitada")

            if (eleccion != "" || cantidad != ""){
            let seleccion = productos.filter((x) => x.nombreProducto.includes(eleccion))
            let objetoArray = seleccion[0]
            objetoArray.precioProducto *= cantidad
            listaCompra.push(objetoArray)

            alert (cantidad+" "+ objetoArray.nombreProducto+" Agregado")

            otroProducto = prompt ("¿desea agregar otro producto? (sí o no)")
            
       
                }
                console.log(otroProducto)
        } while (otroProducto == "si" || otroProducto== "sí")
        }

        agregarProductos();

        

        function pagar () {
            if (listaCompra.length > 0) {

                const precioPagar = listaCompra.map(objetoArray => objetoArray.precioProducto).reduce((prev, curr) => prev + curr, 0);
                console.log (cliente1.nombre)
                alert(nombre+" "+apellido+" tu total a pagar es: "+  precioPagar+ " Se enviará a "+direccion);
            }


        }
        pagar();

    }
    else {
        alert ("Hasta luego")
    }
    
}

verProductos();

// Agregar producto
 */

