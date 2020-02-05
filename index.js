a.keyup = function(e){
  this.value = this.value.replace(/[^0-9\.]/g, '');
};

b.keyup = function(e){
  this.value = this.value.replace(/[^0-9\.]/g, '');
};

function sum(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById("num2").value;
  var a = Number(num1);
  var b = Number(num2);
  var result = document.getElementById("result");
  result.value = a+b;
}

function sub(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById("num2").value;
  var a = Number(num1);
  var b = Number(num2);
  var result = document.getElementById("result");
  result.value = a-b;
}

function mul(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById("num2").value;
  var a = Number(num1);
  var b = Number(num2);
  var result = document.getElementById("result");
  result.value = a*b;
}

function percent(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById("num2").value;
  var a = Number(num1);
  var b = Number(num2);
  var result = document.getElementById("result");
  result.value = (b*100)/a;
}

function div(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById("num2").value;
  var a = Number(num1);
  var b = Number(num2);
  var result = document.getElementById("result");
  result.value = a/b;
}

function intdiv(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById("num2").value;
  var a = Number(num1);
  var b = Number(num2);
  var result = document.getElementById("result");
  result.value = Math.trunc(a/b);
}

function abs(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.abs(a);
}


function sqr(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.pow(a, 2);
}

// function fact() {
//   var num1 = document.getElementById('num1').value;
//   var a = Number(num1);
//   var result = document.getElementById("result");
//   result.value = (a != 1) ? a * fact(a - 1) : 1;
// }

function round(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.round(a); 
}

function sin(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.sin(a); 
}

function cos(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.cos(a); 
}

function tg(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.tan(a); 
}

function ctg(){
  var num1 = document.getElementById('num1').value;
  var a = Number(num1);
  var result = document.getElementById("result");
  result.value = Math.atan(a); 
}