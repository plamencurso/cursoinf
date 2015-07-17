function validarForm () {
/*	alert("Vamos a validar el formulario");*/

	if(document.formulario_uno.nombre_txt.value == "" ){
		alert("Por favor, rellene el campo Nombre");
		document.formulario_uno.nombre_txt.focus();
	} else if (document.formulario_uno.nombre_txt.value.length < 3) {
		alert("Sospecho que tu nombre no es correcto");
		document.formulario_uno.nombre_txt.focus();
	} else if (document.formulario_uno.apellidos_txt.value == "") {
		alert("Por favor, rellene el campo Apellidos");
		document.formulario_uno.apellidos_txt.focus();
	} else if (document.formulario_uno.telefono_tel.value < 600000000) {
		alert("Por favor, revise el campo Telefono");
		document.formulario_uno.telefono_tel.focus();
	}  else if (document.formulario_uno.telefono_tel.value > 999999999) {
		alert("Por favor, revise el campo Telefono");
		document.formulario_uno.telefono_tel.focus();
	} else if (document.formulario_uno.unidades_num.value > 10) {
		alert("Por favor, revise el campo Unidades");
		document.formulario_uno.unidades_num.focus();
	} if (document.formulario_uno.contrasena_psw.value.length < 6) {
		alert("La contraseña debe tener 6 caracteres como mínimo");
		document.formulario_uno.contrasena_psw.focus();
	} else if (!document.formulario_uno.sexo[0].checked && !document.formulario_uno.sexo[1].checked) {
		alert("Por favor, indique su sexo");
	}
}


function borrarForm () {
	alert("Vamos a borrar el formulario");
	document.formulario_uno.reset();
}

window.onload=function() {
	var  botonEnviar, botonBorrar;
	
	botonEnviar = document.formulario_uno.enviar_btn;
	botonEnviar.onclick = validarForm;

	botonBorrar = document.formulario_uno.borrar_btn;
	botonBorrar.onclick = borrarForm;
}
