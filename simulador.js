/* Simulador de carrito de compra de un kiosko */

let cantCocacola = cantAlfajor = cantAgua = cantChicle = cantCaramelos = cantCerveza = cantGalletitas = cantPapas = cantCigarrillos = cantGolosinas = 0;
let totalCocacola = totaAlfajor = totalAgua = totalChicle = totalCaramelos = totalCerveza = totalGalletitas = totalPapas = totalCigarrillos = totalGolosinas = 0;
let subtotalCompra;

const calcularPrecio = (cantidad, precio) => {
    return cantidad * precio;
}

const calcularIva = (subtotalCompra) => {
    return (subtotalCompra * 0.21);
}

const validarCantidad = (cantidad) => {
    if (Number.isNaN(parseInt(cantidad))) {
        return 0;
    } else {
        return parseInt(cantidad);
    }
}
do {
    switch (parseInt(prompt(`**SIMULADOR DE KIOSKO*** 
Ingresá el numero de la opción del artículo que deseas agregar al carrito.
    1. Cocacola ($ 100)     
    2. Alfajor ($ 50)
    3. Agua ($ 60)
    4. Chicle ($ 40)
    5. Caramelos ($ 5)
    6. Cerveza ($ 250)
    7. Galletitas ($ 80)
    8. Papas ($ 150)
    9. Cigarrillos ($ 300) 
    10. Golosinas ($ 20)`))) {

        case 1:
            cantCocacola += (validarCantidad(prompt(`Ingrese la cantidad de Botellas:`)));
            totalCocacola = calcularPrecio(cantCocacola, 100);
            break;

        case 2:
            cantAlfajor += (validarCantidad(prompt(`Ingrese la cantidad de Alfajores:`)));
            totalAlfajor = calcularPrecio(cantAlfajor, 50);
            break;

        case 3:
            cantAgua += (validarCantidad(prompt(`Ingrese la cantidad de Botellas:`)));
            totalAgua = calcularPrecio(cantAgua, 60);
            break;

        case 4:
            cantChicle += (validarCantidad(prompt(`Ingrese la cantidad de Chicles:`)));
            totalChicle = calcularPrecio(cantChicle, 40);
            break;

        case 5:
            cantCaramelos += (validarCantidad(prompt(`Ingrese la cantidad de Caramelos:`)));
            totalCaramelos = calcularPrecio(cantCaramelos, 5);
            break;

        case 6:
            cantCerveza += (validarCantidad(prompt(`Ingrese la cantidad de Latas:`)));
            totalCerveza = calcularPrecio(cantCerveza, 250);
            break;

        case 7:
            cantGalletitas += (validarCantidad(prompt(`Ingrese la cantidad de Paquetes:`)));
            totalGalletitas = calcularPrecio(cantGalletitas, 80);
            break;

        case 8:
            cantPapas += (validarCantidad(prompt(`Ingrese la cantidad de Paquetes:`)));
            totalPapas = calcularPrecio(cantPapas, 150);
            break;

        case 9:
            cantCigarrillos += (validarCantidad(prompt(`Ingrese la cantidad de Atados:`)));
            totalCigarrillos = calcularPrecio(cantCigarrillos, 300);
            break;

        case 10:
            cantGolosinas += (validarCantidad(prompt(`Ingrese la cantidad de Golosinas:`)));
            totalGolosinas = calcularPrecio(cantGolosinas, 20);
            break;

        default:
            alert('El dato ingresado es invalido o no corresponde a ningun articulo');
            break;
    }

} while ((confirm(`¿Desea agregar un item mas a la compra?`)));

subtotalCompra = (totalCocacola + totalAlfajor + totalAgua + totalChicle + totalCaramelos + totalCerveza + totalGalletitas + totalPapas + totalCigarrillos + totalGolosinas);
const crearMensaje = () => {
    let encabezado = (`******** TOTAL DE COMPRA ********`);
    let mensaje = "";
    if (cantCocacola > 0) {
        mensaje += (
            `\nCOCACOLA     ${cantCocacola}     $ ${totalCocacola}`);
    }
    if (cantAlfajor > 0) {
        mensaje += (
            `\nALFAJOR      ${cantAlfajor}      $ ${totalAlfajor}`);
    }
    if (cantAgua > 0) {
        mensaje += (
            `\nAGUA         ${cantAgua}         $ ${totalAgua}`);
    }
    if (cantChicle > 0) {
        mensaje += (
            `\nCHICLE       ${cantChicle}       $ ${totalChicle}`);
    }
    if (cantCaramelos > 0) {
        mensaje += (
            `\nCARAMELOS    ${cantCaramelos}    $ ${totalCaramelos}`);
    }
    if (cantCerveza > 0) {
        mensaje += (
            `\nCERVEZA      ${cantCerveza}      $ ${totalCerveza}`);
    }
    if (cantGalletitas > 0) {
        mensaje += (
            `\nGALLETITAS   ${cantGalletitas}   $ ${totalGalletitas}`);
    }
    if (cantPapas > 0) {
        mensaje += (
            `\nPAPAS        ${cantPapas}        $ ${totalPapas}`);
    }
    if (cantCigarrillos > 0) {
        mensaje += (
            `\nCIGARRILLOS  ${cantCigarrillos}  $ ${totalCigarrillos}`);
    }
    if (cantGolosinas > 0) {
        mensaje += (
            `\nGOLOSINAS    ${cantGolosinas}    $ ${totalGolosinas}`);
    }
    let iva = calcularIva(subtotalCompra);
    let totalCompra = iva + subtotalCompra;

    let final = (
        `IVA                         $ ${iva}
    TOTAL                       $ ${totalCompra.toFixed(2)}`);

    return (`
    ${encabezado} 
    ${mensaje}  
    ${final}`);
}
alert(crearMensaje())