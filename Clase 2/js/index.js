/*
*/

let estatura = 1.80;
let peso = 80;

let imc = peso / Math.pow(estatura, 2);
console.log("Tu IMC es:", imc.toFixed(2));


function calcularImc(){
    let peso = document.getElementById("txtPeso").value;
    let estatura = document.getElementById("txtEstatura").value;

    imc = peso / Math.pow(estatura, 2);

    document.getElementById("txtImc").value = imc.toFixed(2);
    
    let clasificacion = clasificacionImc();
    document.getElementById("txtClasificacion").value = clasificacion;

}

document.getElementById("btnCalcularImc").addEventListener('click', calcularImc);

function clasificacionImc(){
    let clasificacionImc ='';

    if (imc < 18.5){
        clasificacionImc = 'Bajo de peso';
    }else{
        if (imc >= 18.5 && imc < 24.9){
            clasificacionImc = 'Normal';
        }else{
            if (imc >= 24.9 && imc < 29.9){
                clasificacionImc = 'Sobrepeso';
            }else{
                clasificacionImc = 'Obesidad';
            }
        }
    }
    return clasificacionImc;
}


/*
Utilizando sentencias if-else cree una variable llamada clasificacionImc que almacene:
Bajo de peso, si el imc es menor a 18.5
Normal, si el imc es mayor o igual a 18.5 y menor a 24.9
Sobrepeso, si el imc es mayor o igual a 24.9 y menor a 29.9
Obesidad, si el imc es mayor a 30.0

Imprimir el consola la clasificacion


if (imc < 18.5 ) {
    console.log("Bajo de peso");
} else if (imc >= 18.5 && imc < 24.9){
    console.log("Normal");
} else if (imc >= 24.9 && imc < 29.9){
    console.log("Sobrepeso");
}else{
    console.log("Obesidad");
}
*/

/* hecho por el profesor
if (imc < 18.5 ) {
    console.log("Bajo de peso");
} else {
    if (imc >= 18.5 && imc < 24.9){
        console.log("Normal");
    } else {
        if (imc >= 24.9 && imc < 29.9){
            console.log("Sobrepeso");
        }else{
            console.log("Obesidad");
        }
    }
}
*/

/* 
Calcule el área de una figura geometrica
El usuario selecciona el tipo de figura: 1 (Cuadrado), 2 (Rectangulo), 3 (Circulo).
Dependiendo de la figura se pide calcular el área correspondiente.
Cree las variables lado, base, altura, radio
Utilice la estructura switch case para realizar los calculos respectivos
Circuño PI (Math.PI)* radio (2)



let base, altura, radio;
let area;

let opcion =3;
switch (opcion){
    case 1:
        lado =5;
        area = lado * lado;
        console.log("Área del cuadrado es: ", area.toFixed(2))
        break;
    case 2:
        base = 6;
        altura; 4;
        area = base * altura;
        console.log("Área del rectangulo es: ", area.toFixed(2))
        break;
    case 3:
        radio = 3;
        area = Math.PI * Math.pow(radio, 2);
        console.log("Área del circulo es: ", area.toFixed(2));
        break;
    default:
        console.log("Opción no valida");
        break;

}
*/

function CalcularArea(){
    
    let area =0;
    let opcion = document.getElementById("sltFigura").value;

    //valores
    let lado = document.getElementById("txtLado").value;
    let base = document.getElementById("txtBase").value;
    let altura = document.getElementById("txtAltura").value;
    let radio = document.getElementById("txtRadio").value;


    switch (opcion){
        case "1":
            area = lado * lado;
            break;
        case "2":
            area = base * altura;
            break;
        case "3":
            area = Math.PI * Math.pow(radio, 2);
            break;
    }
    document.getElementById("txtArea").value = area;

}

document.getElementById("btnCalcularArea").addEventListener('click', CalcularArea);
   
    