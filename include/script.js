var res=0;
var calculo= new Array();
calculo[0]=0;
var contador=0;
var equal = false;

function escribir(numero){
    if(equal){
        borrar();
        equal=false;
    }
	if(document.getElementById("pantalla").innerHTML == '+' ||
	document.getElementById("pantalla").innerHTML == '-' ||
	document.getElementById("pantalla").innerHTML == '*' ||
	document.getElementById("pantalla").innerHTML == '/'){
		document.getElementById("pantalla").innerHTML='';
		document.getElementById("pantalla").innerHTML+=numero;
	} else {
        document.getElementById("pantalla").innerHTML = document.getElementById("pantalla").innerHTML==0 ? 
        numero : document.getElementById("pantalla").innerHTML+numero;
	}
}
function resultado(){
    let i;
    equal=true;
	calculo[contador]=document.getElementById("pantalla").innerHTML*1;
    
	for(i=0;i<calculo.length;i=i+2){
        if(i==0){
		    res = operar(res, calculo[i],'+');	
        } else{
            res = isNaN(calculo[i]) ? res : operar(res, calculo[i],calculo[i-1]);
        }
			
    }
	document.getElementById("pantalla").innerHTML=res;
}
function operar(valor1, valor2,operador){
	switch(operador){
		case "+":
			return valor1+valor2;
		    break;
		case "-":
			return valor1-valor2;
		    break;
		case "*":
			return valor1*valor2;
		    break;
		case "/":
			return valor1/valor2;
		    break;
	}
}
function signo(operador){
    if(typeof(calculo[contador-1] == 'number') || contador==0){
        calculo[contador]=document.getElementById("pantalla").innerHTML*1;
        acumular(operador);
    } else {
        alert("No se pueden superponer signos");
    }
}
function borrar(){
	calculo=new Array();
	calculo[0]=0;
	contador=0;
	res=0;
	document.getElementById("pantalla").innerHTML=0;
}
function acumular(operador){
	document.getElementById("pantalla").innerHTML=operador;
	calculo[contador+1]=operador;
	contador+=2;
}
