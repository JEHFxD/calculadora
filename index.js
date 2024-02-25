// Función para sumar dos números
function calculadorsumar(num1,num2) {
  return num1 + num2;
}

//Función para restar dos números
function restar(num1,num2){
    return num1 - num2;
}

//Función para multiplicar dos números
function multiplicar(num1,num2){
    return num1*num2;
}

//Función para dividir dos números
function dividir(num1,num2){
    return num1/num2;
}

//Función para calcular un factorial de un número
function factorial(num){
    if (num <0)
        return -1;
    else if (num == 0)
        return 1;
    else{
        return (num * factorial(num-1))
    }
}

//Función para calcular un exponente
function exponente(num1,num2){
    return num1**num2;
}

//Funcion para calcular la raiz cuadrada de un número
function raizCuadrada(num){
    return Math.sqrt(num);
}

//Función principal del programa 
function calculadora(){
    var opcion = prompt (
      "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicacion\n4. División\n5. Factorial\n6. Exponente\n7. Raiz Cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;

    if (opcion !== "5" && opcion !=="7"){
        num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }

    switch(opcion){
        case "1":
          resultado = calculadorsumar(num1, num2);
          break;
        case "2":
          resultado = restar(num1, num2);
          break;
        case "3":
          resultado = multiplicar(num1, num2);
          break;
        case "4":
          resultado = dividir(num1, num2);
          break;
        case "5":
          resultado = factorial(num1);
          break;  
        case "6":
          var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));  
          resultado = exponente(num1, exponenteNum);
          break;
        case "7":
          resultado = raizCuadrada(num1);
          break;
        default:
          resultado = "Opción no válida";
          break;                       
    }
    return resultado
    alert ("El resultado es: " + resultado);
}

// Llamar a la función principal
console.log(calculadora())
