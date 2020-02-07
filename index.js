var result = document.getElementById('result');  
var input = document.querySelector("input");
var num1 = document.getElementById('num1');
var num2 = document.getElementById("num2");
var a = Number(num1.value);
var b = Number(num2.value);
function sum(x, y){
  result.value = x + y;
}

function sub(x, y){
  result.value = x-y;
}

function mul(x, y){
  result.value = x*y;
}

function percent(x, y){
  if(x > 0){
    result.value = (y*100)/x;
  } else {
      result.value = "underfined";
  }
}

function div(x, y){
  result.value = x/y;
}

function intdiv(x, y){
  result.value = (x / y);
  result.value = result.value - (result.value%1);
}

function abs(x){
  if(x < 0) {
    result.value = (x ** 2) ** 0.5;
  } else { result.value = x }
}


function sqr(x){
  result.value = x ** 2;
}

function factorial(x) {
    if (x > 1){
    return x ? x * factorial(x - 1) : 1;
  } else {
      if(x == 1) {
        return 1;
      } else {
        result.value = "underfined";
      }
  }
}

function fact(x) {
  var result = document.getElementById('result');  
  result.value = factorial(x);
}

function round(x, y, z){
  y = x - (x%1);
  z = y+1;
  var mid = x - y;
  if(mid >= 0.5) {
    result.value = z;
  } else 
      if(mid < 0.5) {
        result.value = y;
      }
}

function sin(x){
  result.value = Math.sin(x); 
}

function cos(x){
  result.value = Math.cos(x); 
}

function tg(x){
  result.value = Math.tan(x); 
}

function ctg(x){
  result.value = Math.atan(x); 
}

function allow_enter(){
  input.keyup = function(){
    this.value = this.value.replace(/[^0-9\.]/g, '');
  };
}