var btn = document.querySelector('button');
var inputVal = document.getElementById("input").value; 
var checkVal = document.getElementById("check").value;
var outputVal = document.getElementById("output");

function reverse(s,t) {
  t = '';
  for (var i = s.length - 1; i >= 0; i--){
      t = t += s[i];
  }
  return t;
}

function endWith(s,t,c){
  t = '';
  var n = 0;
  if(c != ''){
    for(var i = (s.length - c.length); i < s.length; i++){
      for(var j = 0; j < c.length; j++){
        if(s[i] == c[j]) n++;
      }
    }
    if(n == c.length) {
      t = true;
    }
    else t = false;
  }
  else alert("Enter some end to check it!");
  return t;
}

function startWith(s,t,c){
  t = '';
  var n = 0;
  if(c != ''){
    for(var i = 0; i < c.length; i++){
      if(s[i] == c[i]) n++;
    }
    if(n == c.length) {
      t = true;
    }
    else t = false;
  }
  else alert("Enter some start to check it!");
  return t;
}

function isCamelCase(s,t){
  t = '';  
  var j = 0, k = 0, n =0;
  for(var i = 0; i < s.length; i++){
    if((s[i] == s[i].toUpperCase()) && (s[i] != ' '))
      j++;
    else 
      if(s[i] != ' ')
       k++;
      else 
        n++;
  }
  if((n == 0) && (k >= 2) && (j >= 2)){
    t = true;
  } else t = false;
  return t;
}

function isSnakeCase(s,t){
  t = '';  
  var j = 0, k = 0, n =0, l = 0;

  for(var i = 0; i < s.length; i++){
    if((s[i] == s[i].toUpperCase()) && (s[i] != ' ') && (s[i] != '_'))
      j++;
    else 
      if((s[i] != ' ') && (s[i] != '_'))
       k++;
      else 
        if(s[i] != '_')
          n++;
        else 
          l++;
  }

  if((n == 0) && (k >= 2) && (j == 0) && (l >= 1)){
    t = true;
  } else t = false;
  return t;
}

function isNan(s){
  var re = /^([^0-9]*)$/;
  return re.test(String(s).toLowerCase());
}

function isPhone(s) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(s).toLowerCase());
}

function isEmail(s){
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(s).toLowerCase());
}