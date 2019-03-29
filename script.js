$("button").click(function(){
    var Age =parseInt( $(".Age").val());
    
    var color = $(".color").val();
    
    if(color==="red" && Age >15){
        $(".answer").text("you are spiderman");
    }else if(color==="red" && Age <15){
        $(".answer").text("you are wolverine");
        }else if(color==="blue" && Age >15){
            $(".answer").text("you are superman");
            }else if(color==="blue" && Age <15){
            $(".answer").text("you are flash");
            }else{
                  $(".answer").text("you are not a superhero");
                }
    
    
});
    
    
    
    
   