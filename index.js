$(document).ready(function(){

    
  

    $(".blue").click(function(){   
        $(".upperSection").removeClass("green red lightGreen black white blue"); 
        $(".aboutUsSection").removeClass("green red lightGreen black white blue"); 
        $(".colorPicker div").removeClass("borderBlack");            
        $(".upperSection").addClass("blue");    
        $(".aboutUsSection").addClass("blue");   
        localStorage.setItem("bg-color","blue") ;
    })
  
    $(".green").click(function(){     
        $(".upperSection").removeClass("blue red lightGreen black white"); 
        $(".aboutUsSection").removeClass("green red lightGreen black white blue"); 
        $(".colorPicker div").removeClass("borderBlack");      
        $(".upperSection").addClass("green");
        $(".aboutUsSection").addClass("green");   
        localStorage.setItem("bg-color","green")  ;             
    })

    $(".red").click(function(){        
        $(".upperSection").removeClass("blue green lightGreen black white");  
        $(".aboutUsSection").removeClass("green red lightGreen black white blue"); 
        $(".colorPicker div").removeClass("borderBlack"); 
        $(".upperSection").addClass("red");
        $(".aboutUsSection").addClass("red");   
        localStorage.setItem("bg-color","red")   ;        
    })
    $(".lightGreen").click(function(){    
        $(".upperSection").removeClass("blue red green black white"); 
        $(".aboutUsSection").removeClass("green red lightGreen black white blue"); 
        $(".colorPicker div").removeClass("borderBlack");     
        $(".upperSection").addClass("lightGreen");
        $(".aboutUsSection").addClass("lightGreen");  
      
        localStorage.setItem("bg-color","lightGreen") ;           
    })

    $(".black").click(function(){    
        $(".upperSection").removeClass("blue green red lightGreen white"); 
        $(".aboutUsSection").removeClass("green red lightGreen black white blue"); 
        $(".colorPicker div").removeClass("borderBlack");  
        $(".upperSection").addClass("black");        
        $(".aboutUsSection").addClass("black");   
        localStorage.setItem("bg-color","black")   ;        
    })

    $(".white").click(function(){    
        $(".upperSection").removeClass("blue green red lightGreen black");  
        $(".aboutUsSection").removeClass("green red lightGreen black white blue");  
        $(".colorPicker div").addClass("borderBlack"); 
        $(".upperSection").addClass("white");  
        $(".aboutUsSection").addClass("white");   
        localStorage.setItem("bg-color","white");
    })
    

    let colorChanger=()=>{
        let backgroundColor = localStorage.getItem("bg-color");
        if(backgroundColor===null) {
            $(".upperSection").removeClass("blue green red lightGreen black white");
            $(".aboutUsSection").removeClass("green red lightGreen black white blue");  
            $(".upperSection").addClass("blue");       
            $(".colorPicker div").removeClass("borderBlack");     
        } else {
            if(backgroundColor!=="white") {
            $(".upperSection").addClass(backgroundColor);
            $(".aboutUsSection").addClass(backgroundColor);   }
            
            else {
                $(".upperSection").addClass(backgroundColor);
                $(".colorPicker div").addClass("borderBlack"); 
            }               
        }
    }


    let fillLeftBar = ()=>{
        let position = $(document).scrollTop();        
        let sectionPosition = $(".aboutUsSection").offset();
        let point = position/sectionPosition.top; 
        console.log(point);

        if(point>0 && point<0.7){
           $(".r2").removeClass("roundWhite");
           $(".r3").removeClass("roundWhite");
           $(".r4").removeClass("roundWhite");
           $(".r1").addClass("roundWhite");           
        } else if(point>0.7 && point<1.8) {
            $(".r1").removeClass("roundWhite");
            $(".r3").removeClass("roundWhite");
            $(".r4").removeClass("roundWhite");
            $(".r2").addClass("roundWhite");  
        } else if(point>1.8 && point<2.8){
            $(".r1").removeClass("roundWhite");
            $(".r2").removeClass("roundWhite");
            $(".r4").removeClass("roundWhite");
            $(".r3").addClass("roundWhite");  
        } else if(point>2.8) {
            $(".r1").removeClass("roundWhite");
            $(".r2").removeClass("roundWhite");
            $(".r3").removeClass("roundWhite");
            $(".r4").addClass("roundWhite"); 
        }

    }

    $(".aboutUsButton").click(function(){
        $(".aboutUsSection").scrollIntoView();
    })

    $(document).scroll(function(){
        fillLeftBar();
    }); 

    colorChanger();

    

    







})