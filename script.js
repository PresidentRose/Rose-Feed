
$("button").click(function() {
    var age=$(".age").val();
    var hair=$(".hair").val();
    console.log(age,hair);
    
    if(age>11 && hair==="Black"){
        $(".Character").text("Lucas");
        
    }
    
    else if(age<=11 && hair==="Brown"){
        $(".Character").text("Mike");
        
    }
    
    else if(age<11 && hair==="Black"){
        $(".Character").text("Eleven");
        
    }
    
    else if(age>=11 && hair==="Brown"){
        $(".Character").text("Dustin");
        
    }
    
    else{
        $(".Character").text("DemiGorgon is Here for you");
        }
});

