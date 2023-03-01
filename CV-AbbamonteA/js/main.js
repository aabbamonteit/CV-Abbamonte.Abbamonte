// Functions for each action-command.

function help(){
  return "<h2><span style=\"color:#eb926d;\">Ayuda:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Información completa.</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Lo importante a conocer.</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>La mejor forma de encontrarme.</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>Mi vida en internet a un click.</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Cosas en las que se supone que soy bueno.</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Descargar un Curriculum actualizado.</td>\
  </tr>\
  <tr>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contacto:</span></h2><table>\
  <tr>\
    <td>Correo</td>\
    <td><a href=\"mailto:a.abbamonte@prueba.com\">a.abbamonte@prueba.com</a></td>\
  </tr>\
  <tr>\
    <td>Teléfono</td>\
    <td><a href=\"tel:+54911-1234 5678\">+54 9 11-1234-5678</a></td>\
  </tr>\
  <tr>\
    <td>Dirección</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Calle falsa 123</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>1234</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Wilde, Avellaneda</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>ARG</td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Habilidades:</span></h2><table>\
  <tr>\
    <td>CSS</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>HTML</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>Testing QA</td>\
    <td>▰▰▰▰▰▰▰▰▱▱ 80%</td>\
  </tr>\
  <tr>\
    <td>BD</td>\
    <td>▰▰▰▰▰▰▰▰▰▰ 100%</td>\
  </tr></table>";
}

function about(){
  return "<p>Un gran entusiasta de la tecnología, con ganas de continuar perfeccionando habilidades y conocimientos para crecer a nivel profesional y personal, buscando mi primero empleo remoto en el mundo IT.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDescargar desde <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">aquí</a>.</p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fab fa-facebook\"></i> Facebook</a></li>\
  </ul>";
}


// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else{
      document.getElementById('injected').innerHTML=help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
