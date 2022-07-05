

let operation = parseInt(prompt ("Selecciona el numero de la operacion que deseas realizar 1 Suma, 2 Resta, 3 Division, 4 Multiplicación"));
let numA = parseInt(prompt ("Ingresa el primer numero"));
let numB = parseInt(prompt ("Ingresa el segundo numero"));
let result = 0

switch (operation) {
    case 1:
        {
            result = numA + numB;
            alert ("El resultado de tu operacion es " + result)

        }
        
        break;
    case 2:{
        result = numA - numB;
        alert ("El resultado de tu operacion es " + result)

    }     
    break;
    case 3:{

        result = numA / numB;
        alert ("El resultado de tu operacion es " + result)
    }
    break;
    
    case 4:{
        result = numA * numB;
        alert ("El resultado de tu operacion es " + result)

    }
    break;
    default:
        alert ("No seleccionaste una opcion de operacion valida")


        break;
}

