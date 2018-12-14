function track(){
    var firstvalue=document.getElementById('one').value;
    var secondvalue=document.getElementById('two').value;
    var thirdvalue=document.getElementById('three').value;
    var text;
    if(firstvalue <= 0|| secondvalue <= 0 || thirdvalue <=0 ){
        text="Undefined"
    }
    
    else if(firstvalue === secondvalue && secondvalue === thirdvalue){
        text = "Equilaterial Triangle.";
    }
     //Equivalent Triangle
    
    else if(firstvalue===secondvalue || firstvalue===thirdvalue || secondvalue===thirdvalue) {
        text="Isoscele Triangle.";
    } 
    //Isoscele Triangle
    else if(firstvalue!==secondvalue && firstvalue!==thirdvalue &&secondvalue!==thirdvalue){
        text="Scalene Triangle."
    }
    //Scalene Triangle
    else if((firstvalue+secondvalue) >= thirdvalue || (secondvalue+thirdvalue) >= firstvalue || (firstvalue+thirdvalue) >= secondvalue){
        text= "it is not a triangle"
    }
   
    else{
        text = "Not a Triangle.";
    }
    document.getElementById('demo').innerHTML = text;
}
