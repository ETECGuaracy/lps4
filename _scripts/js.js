// JavaScript Document
$('#main').corner();

function validaCampoVazio(){
	for(i=0;i<campoForm.length;i++){
		var txtCampo = document.getElementById('txt' + campoForm[i]);
		var lblErro = document.getElementById('lblErro' + campoForm[i]);
		
		if(txtCampo.value == ""){
			lblErro.style.display = 'block';
			campoVazio++;
		}else{
			lblErro.style.display = 'none';
		}
	}
	
	for(i=0;i<campoForm.length;i++){
		var txtCampo = document.getElementById('txt' + campoForm[i]);
		
		if(txtCampo.value == ""){
			txtCampo.focus();
			return false;
		}
	}
}
function validaEmail(){
	var txtEmail = document.getElementById('txtEmail');
	var lblErroEmailInvalido = document.getElementById('lblErroEmailInvalido');
	if(txtEmail.value != ""){
		if(txtEmail.value.length < 7 || txtEmail.value.indexOf("@") < 1 || txtEmail.value.indexOf(".",txtEmail.value.indexOf("@") + 2) == -1){
			lblErroEmailInvalido.style.display = 'block';
			txtEmail.focus();
			campoVazio++;
		}else{
			lblErroEmailInvalido.style.display = 'none';
		}
	}
}