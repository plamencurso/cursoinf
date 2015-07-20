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
	} else if (document.formulario_uno.telefono_tel.value > 999999999) {
		alert("Por favor, revise el campo Telefono");
		document.formulario_uno.telefono_tel.focus();
	} else if (isNaN(document.formulario_uno.unidades_txt.value)) {
		alert("Por favor, revise el campo Unidades - nonum");
		document.formulario_uno.unidades_txt.focus();
	} else if (document.formulario_uno.unidades_txt.value > 10) {
		alert("Por favor, revise el campo Unidades - mas de 10");
		document.formulario_uno.unidades_txt.focus();
	} else if (document.formulario_uno.unidades_txt.value < 1) {
		alert("Por favor, revise el campo Unidades - neg");
		document.formulario_uno.unidades_txt.focus();
	} else if (document.formulario_uno.contrasena_psw.value.length < 6) {
		alert("La contraseña debe tener 6 caracteres como mínimo");
		document.formulario_uno.contrasena_psw.focus();
	} else if (!document.formulario_uno.sexo[0].checked && !document.formulario_uno.sexo[1].checked) {
		alert("Por favor, indique su sexo");

<!-- copiado desde http://pastie.org/10297196 -->

	} else if (!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test(document.formulario_uno.mail.value)) {
		alert("por favor introduzca un correo electronico valido");
		document.formulario_uno.mail.focus();
	} else if (
		!document.getElementById("cine_ckb").checked &&
		!document.getElementById("deportes_ckb").checked &&
		!document.getElementById("musica_ckb").checked &&
		!document.getElementById("teatro_ckb").checked &&
		!document.getElementById("viajar_ckb").checked
		) {
			alert("selecciona una afición");
			document.getElementById("cine_ckb").focus();
	} else if (document.formulario_uno.marca_coche.value == "No seleccionado") {
		alert("Seleccione la marca de su coche");
		document.formulario_uno.marca_coche.focus();
	} else if (document.getElementById("comida").value == "") {
		alert("por favor especifica su comida favorita");
		document.formulario_uno.comida.focus();
	} else if (document.getElementById("mensaje").value == "") {
		alert("por favor escriba un mensaje");
		document.formulario_uno.mensaje.focus();
	}
	else {
		// alert("ok. Vamos a enviar el formulario");
		document.formulario_uno.submit();
	}
}


function borrarForm () {
	alert("Vamos a borrar el formulario");
	document.formulario_uno.reset();
}

<!-- from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript -->

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

window.onload=function() {
	var  botonEnviar, botonBorrar;
	
	botonEnviar = document.formulario_uno.enviar_btn;
	botonEnviar.onclick = validarForm;

	botonBorrar = document.formulario_uno.borrar_btn;
	botonBorrar.onclick = borrarForm;
}
