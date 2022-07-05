let numA = parseInt(prompt ("Ingresa un numero para verificar si es par o inpar"));

if (numA>0) {

    let verification = numA%2

    verification==1 ? console.log("Este numero es impar ") : console.log("Este numero es par ")
    
} 

else {
    let verification = (numA*-1)%2

    verification==1 ? console.log("Este numero es impar ") : console.log("Este numero es par ")
}


