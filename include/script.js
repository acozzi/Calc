
var res=0;
var calculo= new Array();
calculo[0]=0;
var contador=0;

function escribir(numero){
	if(document.getElementById("pantalla").innerHTML == '+'){
		document.getElementById("pantalla").innerHTML=0;
		document.getElementById("pantalla").innerHTML+=numero;
	} else {
		document.getElementById("pantalla").innerHTML+=numero;
	}
}
function resultado(){
	//acumular();
	res=calculo[0];
	for(let i=1;i<calculo.length-1;i+=2){
		res = operar(res, calculo[i+1],calculo[i]);	
	}
	document.getElementById("pantalla").innerHTML=res;
	acumular();
}
function operar(valor1, valor2,operador){
	switch(operador){
		case '+':
			return valor1+valor2;
		break;
		case '-':
			return valor1-valor2;
		break;
		case '*':
			return valor1*valor2;
		break;
		case '/':
			return valor1/valor2;
		break;
	}
}
function signo(operador){
	acumular(operador);
	//contador++;
	
	/*
	document.getElementById("pantalla").innerHTML=0;	
	
	if(typeof calculo[contador] == "number"){

			
	} else {
		alert("ERROR: No se puede usar más de un operador por operación.");
	}
	*/
}
function borrar(){
	calculo=new Array();
	calculo[0]=0;
	contador=0;
	res=0;
	document.getElementById("pantalla").innerHTML=0;
}
function acumular(operador){
	calculo[contador]=document.getElementById("pantalla").innerHTML*1;
	contador++;
	document.getElementById("pantalla").innerHTML=operador;
	calculo[contador]=operador;
	contador++;
}

