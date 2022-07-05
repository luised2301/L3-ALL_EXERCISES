let numA = prompt ("Ingresa un numero");
let numB = prompt ("Ingresa un numero");
let numC = prompt ("Ingresa un numero");

if (numA == numB){
    if (numB == numC){
        console.log ("Los 3 numeros no pueden ser iguales")
    }
}
else{


if (numA > numB){
    if ( numA > numC){
        console.log ("Numero A es el numero mayor")
    }
    else (
        console.log ("Numero C es el numero mayor")

    )
}
else{
    if (numB > numC){
        console.log ("Numero B es el numero mayor")   
    }
    else{
        console.log ("Numero C es el numero mayor") 

    }
}

}
