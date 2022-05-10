$(document).ready(function(){
    $( "body" ).slideDown( );
    $("body").queryLoader2({
        barColor: "orange",
        backgroundColor: "grey",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100,
        onLoadComplete: hidePreLoader
      });
      
      function hidePreLoader() {
        $("#precarga").hide( 500 ).delay( 1800 );
        $( "body" ).slideUp( 300 ).delay( 500 ).fadeIn( 400 );
      }
      

    //utilizar el heigth de pantalla del usuario para definir el height
    var height = $(window).height();
        //calculos y distribucion del height en base a la pantalla del usuario
        $('#cajaPortada').height(height);
        $('#cajaTextoPortada').height(height-(height/3));
        $('#fondoTextoPortada').height(height/3);
        $('#titulo').css('margin-top',height-(height/3));    
});
