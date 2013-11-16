/*
Zampoña Virtual V 1.0
Desarrollado por https://github.com/jerrycode
Noviembre de 2013.
*/
var historial=document.getElementById('historial');
var nota_down=function(par){
	switch(par){
		case 'arca1':
			document.getElementById('arca1').src='img/pipa2.jpg';
			document.getElementById('arca_si').play();
		break;
		case 'arca2':
			document.getElementById('arca2').src='img/pipa2.jpg';
			document.getElementById('arca_sol').play();
		break;
		case 'arca3':
			document.getElementById('arca3').src='img/pipa2.jpg';
			document.getElementById('arca_mi').play();
		break;
		case 'arca4':
			document.getElementById('arca4').src='img/pipa2.jpg';
			document.getElementById('arca_do').play();
		break;
		case 'arca5':
			document.getElementById('arca5').src='img/pipa2.jpg';
			document.getElementById('arca_la').play();
		break;
		case 'arca6':
			document.getElementById('arca6').src='img/pipa2.jpg';
			document.getElementById('arca_fa').play();
		break;
		case 'arca7':
			document.getElementById('arca7').src='img/pipa2.jpg';
			document.getElementById('arca_re').play();
		break;


		case 'ira1':
			document.getElementById('ira1').src='img/pipa2.jpg';
			document.getElementById('ira_la').play();
		break;
		case 'ira2':
			document.getElementById('ira2').src='img/pipa2.jpg';
			document.getElementById('ira_fa').play();
		break;
		case 'ira3':
			document.getElementById('ira3').src='img/pipa2.jpg';
			document.getElementById('ira_re').play();
		break;
		case 'ira4':
			document.getElementById('ira4').src='img/pipa2.jpg';
			document.getElementById('ira_si').play();
		break;
		case 'ira5':
			document.getElementById('ira5').src='img/pipa2.jpg';
			document.getElementById('ira_sol').play();
		break;
		case 'ira6':
			document.getElementById('ira6').src='img/pipa2.jpg';
			document.getElementById('ira_mi').play();
		break;
	}
}

var nota_up=function(par){
	switch(par){
		case 'arca1':
			document.getElementById('arca1').src='img/pipa.jpg';
			document.getElementById('arca_si').pause();
			document.getElementById('arca_si').currentTime = 0;
		break;
		case 'arca2':
			document.getElementById('arca2').src='img/pipa.jpg';
			document.getElementById('arca_sol').pause();
			document.getElementById('arca_sol').currentTime = 0;
		break;
		case 'arca3':
			document.getElementById('arca3').src='img/pipa.jpg';
			document.getElementById('arca_mi').pause();
			document.getElementById('arca_mi').currentTime = 0;
		break;
		case 'arca4':
			document.getElementById('arca4').src='img/pipa.jpg';
			document.getElementById('arca_do').pause();
			document.getElementById('arca_do').currentTime = 0;
		break;
		case 'arca5':
			document.getElementById('arca5').src='img/pipa.jpg';
			document.getElementById('arca_la').pause();
			document.getElementById('arca_la').currentTime = 0;
		break;
		case 'arca6':
			document.getElementById('arca6').src='img/pipa.jpg';
			document.getElementById('arca_fa').pause();
			document.getElementById('arca_fa').currentTime = 0;
		break;
		case 'arca7':
			document.getElementById('arca7').src='img/pipa.jpg';
			document.getElementById('arca_re').pause();
			document.getElementById('arca_re').currentTime = 0;
		break;


		case 'ira1':
			document.getElementById('ira1').src='img/pipa.jpg';
			document.getElementById('ira_la').pause();
			document.getElementById('ira_la').currentTime = 0;
		break;
		case 'ira2':
			document.getElementById('ira2').src='img/pipa.jpg';
			document.getElementById('ira_fa').pause();
			document.getElementById('ira_fa').currentTime = 0;
		break;
		case 'ira3':
			document.getElementById('ira3').src='img/pipa.jpg';
			document.getElementById('ira_re').pause();
			document.getElementById('ira_re').currentTime = 0;
		break;
		case 'ira4':
			document.getElementById('ira4').src='img/pipa.jpg';
			document.getElementById('ira_si').pause();
			document.getElementById('ira_si').currentTime = 0;
		break;
		case 'ira5':
			document.getElementById('ira5').src='img/pipa.jpg';
			document.getElementById('ira_sol').pause();
			document.getElementById('ira_sol').currentTime = 0;
		break;
		case 'ira6':
			document.getElementById('ira6').src='img/pipa.jpg';
			document.getElementById('ira_mi').pause();
			document.getElementById('ira_mi').currentTime = 0;
		break;

	}
}



function whichButton(event){
	switch(event.keyCode){
		case 65:
			document.getElementById('arca1').src='img/pipa2.jpg';
			document.getElementById('arca_si').play();
			historial.innerHTML=historial.innerHTML+'SI ';
		break;
		case 83:
			document.getElementById('arca2').src='img/pipa2.jpg';
			document.getElementById('arca_sol').play();
			historial.innerHTML=historial.innerHTML+'SOL ';
		break;
		case 68:
			document.getElementById('arca3').src='img/pipa2.jpg';
			document.getElementById('arca_mi').play();
			historial.innerHTML=historial.innerHTML+'MI ';
		break;
		case 70:
			document.getElementById('arca4').src='img/pipa2.jpg';
			document.getElementById('arca_do').play();
			historial.innerHTML=historial.innerHTML+'DO ';
		break;
		case 71:
			document.getElementById('arca5').src='img/pipa2.jpg';
			document.getElementById('arca_la').play();
			historial.innerHTML=historial.innerHTML+'LA ';
		break;
		case 72:
			document.getElementById('arca6').src='img/pipa2.jpg';
			document.getElementById('arca_fa').play();
			historial.innerHTML=historial.innerHTML+'FA# ';
		break;
		case 74:
			document.getElementById('arca7').src='img/pipa2.jpg';
			document.getElementById('arca_re').play();
			historial.innerHTML=historial.innerHTML+'RE ';
		break;


		case 90:
			document.getElementById('ira1').src='img/pipa2.jpg';
			document.getElementById('ira_la').play();
			historial.innerHTML=historial.innerHTML+'la ';
		break;
		case 88:
			document.getElementById('ira2').src='img/pipa2.jpg';
			document.getElementById('ira_fa').play();
			historial.innerHTML=historial.innerHTML+'fa# ';
		break;
		case 67:
			document.getElementById('ira3').src='img/pipa2.jpg';
			document.getElementById('ira_re').play();
			historial.innerHTML=historial.innerHTML+'re ';
		break;
		case 86:
			document.getElementById('ira4').src='img/pipa2.jpg';
			document.getElementById('ira_si').play();
			historial.innerHTML=historial.innerHTML+'si ';
		break;
		case 66:
			document.getElementById('ira5').src='img/pipa2.jpg';
			document.getElementById('ira_sol').play();
			historial.innerHTML=historial.innerHTML+'sol ';
		break;
		case 78:
			document.getElementById('ira6').src='img/pipa2.jpg';
			document.getElementById('ira_mi').play();
			historial.innerHTML=historial.innerHTML+'mi ';
		break;

	}
}

function suelta(event){
	switch(event.keyCode){
		case 65:
			document.getElementById('arca1').src='img/pipa.jpg';
			document.getElementById('arca_si').pause();
			//document.getElementById('arsi').src = "";
			//document.getElementById('arsi').removeAttribute("src");
			document.getElementById('arca_si').currentTime = 0;
		break;
		case 83:
			document.getElementById('arca2').src='img/pipa.jpg';
			document.getElementById('arca_sol').pause();
			document.getElementById('arca_sol').currentTime = 0;
		break;
		case 68:
			document.getElementById('arca3').src='img/pipa.jpg';
			document.getElementById('arca_mi').pause();
			document.getElementById('arca_mi').currentTime = 0;
		break;
		case 70:
			document.getElementById('arca4').src='img/pipa.jpg';
			document.getElementById('arca_do').pause();
			document.getElementById('arca_do').currentTime = 0;
		break;
		case 71:
			document.getElementById('arca5').src='img/pipa.jpg';
			document.getElementById('arca_la').pause();
			document.getElementById('arca_la').currentTime = 0;
		break;
		case 72:
			document.getElementById('arca6').src='img/pipa.jpg';
			document.getElementById('arca_fa').pause();
			document.getElementById('arca_fa').currentTime = 0;
		break;
		case 74:
			document.getElementById('arca7').src='img/pipa.jpg';
			document.getElementById('arca_re').pause();
			document.getElementById('arca_re').currentTime = 0;
		break;


		case 90:
			document.getElementById('ira1').src='img/pipa.jpg';
			document.getElementById('ira_la').pause();
			document.getElementById('ira_la').currentTime = 0;
		break;
		case 88:
			document.getElementById('ira2').src='img/pipa.jpg';
			document.getElementById('ira_fa').pause();
			document.getElementById('ira_fa').currentTime = 0;
		break;
		case 67:
			document.getElementById('ira3').src='img/pipa.jpg';
			document.getElementById('ira_re').pause();
			document.getElementById('ira_re').currentTime = 0;
		break;
		case 86:
			document.getElementById('ira4').src='img/pipa.jpg';
			document.getElementById('ira_si').pause();
			document.getElementById('ira_si').currentTime = 0;
		break;
		case 66:
			document.getElementById('ira5').src='img/pipa.jpg';
			document.getElementById('ira_sol').pause();
			document.getElementById('ira_sol').currentTime = 0;
		break;
		case 78:
			document.getElementById('ira6').src='img/pipa.jpg';
			document.getElementById('ira_mi').pause();
			document.getElementById('ira_mi').currentTime = 0;
		break;

		default:
		console.log('Tecla incorrecta');

	}

}

var limpiar=function(){
	var r=confirm("¿Está seguro de limpiar el historial de notas?");
	if (r==true){
		historial.innerHTML='';
	}
}

var hide=function(){
	document.getElementById('cont_hist').style.display='none';
	document.getElementById('mostrar').style.display='inline';
}

var show=function(){
	document.getElementById('cont_hist').style.display='inline';
	document.getElementById('mostrar').style.display='none';
}

var carga_completa=function(){
	document.getElementById('loading').innerHTML='';
}
