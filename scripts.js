function track(){
    var firstvalue=parseInt(document.getElementById('one').value);
    var secondvalue=parseInt(document.getElementById('two').value);
    var thirdvalue=parseInt(document.getElementById('three').value);
    var array=[firstvalue,secondvalue,thirdvalue];
    var text;
    if(firstvalue <= 0|| secondvalue <= 0 || thirdvalue <=0 ){
        text="Undefined"
    }
    else if((isNaN(firstvalue))||(isNaN(secondvalue))||(isNaN(thirdvalue))){
         text="an error.Please fill in the blank space."
    }
    else if (
        (firstvalue + secondvalue <= thirdvalue &&
            secondvalue + firstvalue <= thirdvalue)||
            (firstvalue + thirdvalue <= secondvalue &&
            thirdvalue + firstvalue <= secondvalue) ||
            (secondvalue + thirdvalue <= firstvalue && thirdvalue + secondvalue <= firstvalue)
         ) {
        text = "Not a Triangle.";
      }
    // Not a triangle
    else if(firstvalue === secondvalue && 
        firstvalue===thirdvalue &&
        secondvalue === thirdvalue){
        text = "Equilaterial Triangle.";
    }
     //Equivalent Triangle
    
    else if(firstvalue===secondvalue || 
        firstvalue===thirdvalue || 
        secondvalue===thirdvalue) {
        text="Isosceles Triangle.";
    } 
    //Isoscele Triangle
    else if(firstvalue!==secondvalue &&
         firstvalue!==thirdvalue &&
         secondvalue!==thirdvalue){
        text="Scalene Triangle."
    }
    //Scalene Triangle
    
    else{
        text = "Error.";
    }
    
    document.getElementById('demo').innerHTML="The value["+array+"]"+" is ";
    document.getElementById('demo').innerHTML += text;

    document.getElementById("form").reset
}

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();