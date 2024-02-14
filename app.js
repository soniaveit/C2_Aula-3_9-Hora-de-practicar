/* DESAFIOS:
1.- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
    altura en metros y peso en kilogramos, que se recibirán como parámetros.
2.- Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3.- Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
    equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país).
    Para esto, considera la cotización del dólar igual a R$4,80.
4.- Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando 
    la altura y la anchura que se proporcionarán como parámetros.
5.- Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando 
    su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6.- Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

//1.- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
//   altura en metros y peso en kilogramos, que se recibirán como parámetros.

const pI = 3.1416;

function indiceDeMasaCorporal(){
    let altura=parseFloat(prompt('Ingrese su altura en m: '));
    let peso=parseFloat(prompt('Ingrese su peso en kg: '));
    
    alert(`El índice de masa corporal - IMC \nAltura ${altura} mts \nPeso ${peso} kg \nIMC ${calcularIndiceDeMasaCorporal(altura,peso).toFixed(2)}`);
}

function calcularIndiceDeMasaCorporal(altura, peso){
    return peso/(altura*altura);
}

//2.- Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorialDeNumero(){
    let numero=parseFloat(prompt('Ingrese un número para calcular su factorial: '));
    alert(`Factorial de ${numero} es ${calcularFactorialDeNumero(numero)}`);
}

function calcularFactorialDeNumero(numero){
    let resultado =numero;

    while (numero>1){
        resultado=resultado*(numero-1);
        numero--;
    }
    return resultado;
}


//3. - Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor 
//    equivalente en reales.
function valorDolar(){
    let dolares = parseFloat(prompt('Ingrese los u$d para convertir a Reales: '));
    alert(`Conversión de dólares a Reales \n${dolares} u$d = ${(calcularValorReales(dolares).toFixed(2))} Reales`);
}

function calcularValorReales(valor){
    return valor*4.8;
}
//4.- Crear una función que reciba sus lados y alto de una sala rectangular como parámetros y devuelva su area y perímetro.
// El alto lo voy a obviar porque hay que calcular area, no volumen.
function areaYperimetroRectangulo(){
    let ladoA = parseFloat(prompt('Ingrese el ancho de la sala: '));
    let ladoB = parseFloat(prompt('Ingrese el largo de la sala: '));
    //let alto = parseFloat(prompt('Ingrese el alto de la sala: '));
    let area=calcularAreaRectangulo(ladoA, ladoB);
    let perimetro=calcularPerimetroRectangulo(ladoA, ladoB);
    alert(`Área y perímetro de una sala de \n${ladoA} mts de ancho y ${ladoB} mts de largo \n Perímetro = ${perimetro.toFixed(2)} mts \n Área / Superficie = ${area.toFixed(2)} mts cuadrados`);
}

function calcularAreaRectangulo(ancho, profundidad){
    return ancho*profundidad;
}
function calcularPerimetroRectangulo(ancho, profundidad){
    return (ancho*2)+(profundidad*2);
}

//5.- Crear una función que reciba el radio de una sala circular como parámetro y devuelva su area y perímetro.
function radioSalaCircular(){
    let radio = parseFloat(prompt('Ingrese el radio de la sala circular: '));
    alert(`Área y perímetro de una sala circular de ${radio} mts de radio \n Perímetro = ${perimetroDeCirculo(radio).toFixed(2)} mts \n Área / Superficie = ${areaDeCirculo(radio).toFixed(2)} mts cuadrados`);
}

function areaDeCirculo(radio){
    return pI * radio * radio;
}

function perimetroDeCirculo(radio){
    return pI * radio * 2;
}

//6.- Crear una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function pideUnNumeroParaLaTabla(){
    let numeroDeUsuario=parseInt(prompt('Ingrese un número entero: '));
    
    alert(`Tabla de multiplicar del ${numeroDeUsuario} \n ${tablaNumerica(numeroDeUsuario)}`);
}

function tablaNumerica(numero){
    let tabla='';
    let i=1;
    while ( i<11 ){
        if (i==1){
            tabla = `${numero} x ${i} = ${numero*i}`;
        }
        else {
            tabla = tabla +  `\n ${numero} x ${i} = ${numero*i}`;
        }
        
        i++;
    }
    return tabla;
        
}

//Función para asignar texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


asignarTextoElemento('h1','Curso 2 - Lógica de programación y JavaScript');
asignarTextoElemento('h2','Práctica del Aula 3');
asignarTextoElemento('h3','Para ver los resultados de los ejercicios 1 y 2 habilitar la vista de la consola, en Herramientas para desarrolladores del navegador');