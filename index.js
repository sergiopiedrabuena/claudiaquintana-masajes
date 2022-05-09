$(document).ready(function(){
    //utilizar el heigth de pantalla del usuaria para definir el height del div imgPortada
    var height = $(window).height();
          $('#cajaPortada').height(height);
          //utilizar el heigth de pantalla del usuaria para definir el height del div cajaTrabajo
          $('#cajaTextoPortada').height(height-(height/3));
          $('#fondoTextoPortada').height(height/3);
          $('#titulo').css('margin-top',height-(height/3));
          
});
