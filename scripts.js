function track(){
    var firstvalue=parseInt(document.getElementById('one').value);
    var secondvalue=parseInt(document.getElementById('two').value);
    var thirdvalue=parseInt(document.getElementById('three').value);
    var text;
    if(firstvalue <= 0|| secondvalue <= 0 || thirdvalue <=0 ){
        text="Undefined"
    }
    else if (
        (firstvalue + secondvalue <= thirdvalue &&secondvalue + firstvalue <= thirdvalue) ||(firstvalue + thirdvalue <= secondvalue &&thirdvalue + firstvalue <= secondvalue) ||(secondvalue + thirdvalue <= firstvalue && thirddvalue + secondvalue <= firstvalue)
      ) {
        text = "Not a Triangle.";
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
    
    else{
        text = "Error";
    }
    document.getElementById('demo').innerHTML = text;
}
