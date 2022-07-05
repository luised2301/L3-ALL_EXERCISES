var numA = parseInt(prompt ("Ingresa un numero"));
var numB = parseInt(prompt ("Ingresa un numero"));
var numC = parseInt(prompt ("Ingresa un numero"));
var firstResult = 0;
var finalResult = 0;

if ( numA==numB && numB==numC){
    console.log ("No puede haber 3 numeros iguaes")
}

else{
     firstResult = numA>numB ? numB>numC ? numA : numA : numB>numC ? numB : numC;
     console.log ("El numero mayor es " + firstResult)
}



