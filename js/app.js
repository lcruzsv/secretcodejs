var codigo = ""; //Codigo secreto
var intentos = 0; //Cantidad de intentos fallidos

document.getElementById('btn-intento').onclick = procesarIntento;
inicio(); //Inicar el juego

function inicio(){
  //Generar un numero aleatorio
  codigo = Math.floor( Math.random() * 10000 ).toString();

  if (codigo.length < 4) //al menos 4 caracteres
  {
    codigo = codigo.length + '0000';
  }
  codigo = codigo.substring(0, 4);
  intentos = 0; //Resetear intentos a cero

  document.getElementById('intentos').innerHTML = 'Intento => Resultado'
}
 
function procesarIntento() {
  var intento = document.getElementById('intento').value; //Obtener el valor del intento
  var resultado = "";
  if (intento.length != 4) {
    alert("El codigo debe tener 4 digitos");
    return;
  }
  for (var i = 0; i < 4; i++) {
    if (intento.charAt(i) == codigo.charAt(i)) {
      resultado += '<i class="fa fa-check" aria-hidden="true"></i>';
    }
    else {
      //Ver si existe en algun lugar de la cadena
      if ( codigo.indexOf(intento.charAt(i)) == -1)
      {
        resultado += '<i class="fa fa-times" aria-hidden="true"></i>';
      }
      else{
        resultado += '<i class="fa fa-arrows-h" aria-hidden="true"></i>';
      }
    }
  }

  //Verifica si adivinaron el codigo...
  if (intento == codigo) {
    alert("Encontrarte el codigo secreto");
    inicio(); //Reiniciar el juego
  }
  else {
    document.getElementById('intentos').innerHTML += '<br>' + intento + ' => ' + resultado;
    intentos++;
    if (intentos == 10)
    {
      alert("Se termino el juego :( no lograste encontrar el código secreto");
      inicio(); //Reiniciar el juego
    }
  }

  document.getElementById('intento').value = "";
  console.log(intento   + ' => '  +  resultado + ' : ' + codigo);
}
