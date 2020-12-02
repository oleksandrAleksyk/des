$(document).ready(function(){

    $(".blue").click(function(){   
        $(".upperSection").removeClass("green red lightGreen black white blue"); 
        $(".colorPicker div").removeClass("borderBlack");            
        $(".upperSection").addClass("blue");      
        localStorage.setItem("bg-color","blue") ;
    })
  
    $(".green").click(function(){     
        $(".upperSection").removeClass("blue red lightGreen black white"); 
        $(".colorPicker div").removeClass("borderBlack");      
        $(".upperSection").addClass("green");
       
        localStorage.setItem("bg-color","green")  ;             
    })

    $(".red").click(function(){        
        $(".upperSection").removeClass("blue green lightGreen black white");  
        $(".colorPicker div").removeClass("borderBlack"); 
        $(".upperSection").addClass("red");
         
        localStorage.setItem("bg-color","red")   ;        
    })
    $(".lightGreen").click(function(){    
        $(".upperSection").removeClass("blue red green black white"); 
        $(".colorPicker div").removeClass("borderBlack");     
        $(".upperSection").addClass("lightGreen");
      
        localStorage.setItem("bg-color","lightGreen") ;           
    })

    $(".black").click(function(){    
        $(".upperSection").removeClass("blue green red lightGreen white"); 
        $(".colorPicker div").removeClass("borderBlack");  
        $(".upperSection").addClass("black");        
        
        localStorage.setItem("bg-color","black")   ;        
    })

    $(".white").click(function(){    
        $(".upperSection").removeClass("blue green red lightGreen black");   
        $(".colorPicker div").addClass("borderBlack"); 
        $(".upperSection").addClass("white");  
        localStorage.setItem("bg-color","white");
    })
    

    let func=()=>{
        let backgroundColor = localStorage.getItem("bg-color");
        if(backgroundColor===null) {
            $(".upperSection").removeClass("blue green red lightGreen black white");  
            $(".upperSection").addClass("blue");       
            $(".colorPicker div").removeClass("borderBlack");     
        } else {
            if(backgroundColor!=="white") {
            $(".upperSection").addClass(backgroundColor);  }
            else {
                $(".upperSection").addClass(backgroundColor);
                $(".colorPicker div").addClass("borderBlack"); 
            }               
        }
    }


    func();

})