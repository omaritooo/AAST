var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

document.getElementById('date').innerHTML = today.toLocaleDateString("en-US", options);

function show(){
    document.getElementById('labels').style.display= 'block' ;
  }