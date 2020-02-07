var num1 = document.getElementById('num1');
var num2 = document.getElementById("num2");
var a = Number(num1.value);
var b = Number(num2.value);
var result = document.getElementById('result');  
var input = document.querySelector("input");

function sum(x, y){
  result.value = a+b;
}

function sub(x, y){
  result.value = x-y;
}

function mul(x, y){
  result.value = x*y;
}

function percent(x, y){
  if(x != 0){
    result.value = (y*100)/x;
  } else {alert("На нуль делить НЕЛЬЗЯ!!!!!!!!!")}
}

function div(x, y){
  result.value = x/y;
}

function intdiv(x, y){
  result.value = parseInt(x / y);
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
          alert("Нельзя посчитать факториал отрицательного числа и числа равного нуля :(");
      }
  }
}

function fact(x) {
  var result = document.getElementById('result');  
  result.value = factorial(x);
}

function round(x){
  result.value = Math.round(x); 
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

function allow_enter(x, y){
  input.keyup = function(){
    this.value = this.value.replace(/[^0-9\.]/g, '');
  };
}