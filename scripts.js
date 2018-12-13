function track(){
    var firstvalue=document.getElementById('one').value;
    var secondvalue=document.getElementById('two').value;
    var thirdvalue=document.getElementById('three').value;
    var text;
    if(firstvalue === secondvalue && secondvalue === thirdvalue){
        text = "Equilaterial Triangle"
    }
   
    else{
        text = "not isosceles"
    }
    document.getElementById('demo').innerHTML = text;
}
