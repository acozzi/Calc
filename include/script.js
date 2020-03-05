
function seleccion(id){
	if(id==1){
		document.getElementById("precio").innerHTML="Precio: 5.000";
	} 
	else if(id==2){
		document.getElementById("precio").innerHTML="Precio: 20.000";
	} 
	else {
		document.getElementById("precio").innerHTML="Precio: 40.000"
	}
}
function escribir(signo){
	document.getElementById("pantalla").innerHTML+=signo;
}

