var res=0;
var calculo= new Array();
calculo[0]=0;
var contador=0;

function escribir(numero){
	if(document.getElementById("pantalla").innerHTML == '+' ||
		document.getElementById("pantalla").innerHTML == '-' ||
		document.getElementById("pantalla").innerHTML == '*' ||
		document.getElementById("pantalla").innerHTML == '/'
	){
		document.getElementById("pantalla").innerHTML=0;
		document.getElementById("pantalla").innerHTML+=numero;
	} else {
		document.getElementById("pantalla").innerHTML+=numero;
	}
}
function resultado(){
	let i;
	calculo[contador]=document.getElementById("pantalla").innerHTML*1;
	contador++;
	calculo[contador]="+";	
	for(i=1;i<calculo.length-1;i++){
		res = operar(calculo[i-1], calculo[i+1],calculo[i]);
		i=i+2;
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
	acumular(operador);
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
