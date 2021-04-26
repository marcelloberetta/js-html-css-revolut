$(function(){

  /* colore parole nav-left */
   $(".options-nav-left-uno a").click(function(){
     $(".options-nav-left-uno a").css("color", "black");
     $(".options-nav-left-due a").css("color", "gray");
   });
   
   
 
   $(".options-nav-left-due a").click(function(){
     $(".options-nav-left-due a").css("color", "black")
     $(".options-nav-left-uno a").css("color", "gray")
   
   
 });
   /* colore parole vav-left */
 
   /* finestre */
 
 
 
    $(".features").mouseover(function(){
        $(".plans a").css("color", "gray");
        $(".about-us a").css("color", "gray");
        $(".help a").css("color", "gray");
        $(".features a").css("color", "black");
        $(".finestra-features").addClass("active");
        $(".finestra-plans").removeClass("active");
        $(".finestra-about-us").removeClass("active");
        $(".finestra-help").removeClass("active");
        
    });
    $(".features").click(function(){
     $(".finestra-features").removeClass("active");
     $(".features a").css("color", "gray");
    });
 
    $(".plans").mouseover(function(){
     $(".about-us a").css("color", "gray");
     $(".help a").css("color", "gray");
     $(".features a").css("color", "gray");
     $(".plans a").css("color", "black");
     $(".finestra-plans").addClass("active");
     $(".finestra-features").removeClass("active");
     $(".finestra-about-us").removeClass("active");
     $(".finestra-help").removeClass("active");
    });
    $(".plans").click(function(){
     $(".finestra-plans").removeClass("active");
     $(".plans a").css("color", "gray");
    });
 
     $(".about-us").mouseover(function(){
      $(".help a").css("color", "gray");
      $(".plans a").css("color", "gray");
      $(".features a").css("color", "gray");
      $(".about-us a").css("color", "black");
      $(".finestra-about-us").addClass("active");
      $(".finestra-features").removeClass("active");
      $(".finestra-plans").removeClass("active");
      $(".finestra-help").removeClass("active");
    });
    $(".about-us").click(function(){
     $(".finestra-about-us").removeClass("active");
     $(".about-us a").css("color", "gray");
    });
 
    $(".help").mouseover(function(){
     $(".plans a").css("color", "gray");
     $(".about-us a").css("color", "gray");
     $(".features a").css("color", "gray");
     $(".help a").css("color", "black");
     $(".finestra-help").addClass("active");
     $(".finestra-features").removeClass("active");
     $(".finestra-plans").removeClass("active");
     $(".finestra-about-us").removeClass("active");
    });
    $(".help").click(function(){
     $(".finestra-help").removeClass("active");
     $(".help a").css("color", "gray");
    });
 
 
 
 
 
 
 });