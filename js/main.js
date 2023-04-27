
/*
let nombre ="Edgar";  //Variable del tipo string o cadena de texto 
let apellido ="Villalba";
let edad ="22"; //Variable ded tipo number o numerica (entera)
const anioNacimiento = 2000; //Constante que posee un dato del tipo number ... Solamente se puede definir una sola vez!
*/

/* Console.log(nombre);
console.log(apellido);
console.log(anioNacimiento); */


//Valores de variables 
/*
let valor1="100";   //Number entero (integer)
let valor2="200.75";  //Number decimal (float)

console.log(valor1);
console.log(typeof valor1);
console.log(valor2);
console.log(typeof valor2);  */


//Operaciones basicas (numeros)
/*
let numeroA = 10;
let numeroB = 20;
const numeroC = 30;
let valor ="Hola";

//Suma 

let resultado1 = numeroA + numeroB;
console.log (resultado1); 

//Resta

let resultado2 = numeroA - numeroB;
console.log (resultado2);

//Multiplicacion

let resultado3 = numeroA * numeroB;
console.log (resultado3);

//Division 

let resultado4 = numeroA / numeroB;
console.log (resultado4);    */

/*
let texto1 ="Coder";
let texto2 ="House";
let espacio =" ";
let numero= 100;



//Concatenacion #1
let resultado1 =texto1 + texto2;
console.log (resultado1);

//Concatenacion #2
let resultado2 =texto1 + espacio + texto2;
console.log(resultado2);

//Concatenacion #3
let resultado3 =texto1 + " " + texto2;
console.log(resultado3);

//Concatenacion #4
let resultado4 =texto1 + " " + texto2 + numero;
console.log(resultado4);

//Concatenacion #5
let resultado5 =texto1 + " " + texto2 + "\n" + numero; //el \n es un salto de linea 
console.log(resultado5);   */

//Ejemplo 
/*
let nombre="Leonel";
let apellido="Messi";
let edad ="35";

let titulo ="Datos del jugador: \n\n";
//let texto = titulo +"Nombre: " + nombre + "\n" + "Apellido: " + apellido + "\n" + "Edad: " + edad;
alert(texto);  

let salidaNombre ="Nombre: " + nombre + "\n";
let salidaApellido ="Apellido: " + apellido + "\n";
let salidaEdad ="Edad: " + edad;
let texto = titulo + salidaNombre + salidaApellido + salidaEdad;
alert(texto); */


//Prompts
//Ejemplo #1

/*
let nombreIngresado = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
alert("Nombre: " + nombreIngresado + " " + apellido); */

//Ejemplo #2
/*
let importe = prompt("Ingrese el valor de la Coca Cola: "); //Siempre guarda los valores en formato string 
const IVA =1.21;
let importeIVA = importe * IVA; // string * number  = NaN = Not a number 
alert("El valor de la Coca cola es :$  + importeIVA" ); */ 

/*

//ParseInt() = Parsea a enteros 
//ParseFloat() = Parsea a decimales 
//.toFixed(n)= En "n" definimos la cantidad de decimales que mostramos. 

//Ejemplo de calculadora IMC

let peso=parseFloat(prompt("Ingrese su peso: "));
let altura=parseFloat(prompt("Ingrese su altura: "));
let imc = peso / (altura * altura);

alert("Tu IMC es: " + imc.toFixed(2) + "%");   */
