let out = document.getElementById('out')
 
 
function append(input){
  out.value += input
}
  // claer AC 
function append11(){
  out.value = ''
}

//  equl
function append22(){
  out.value = eval(out.value)
}


// delete 
function append33(){
 out.value = out.value.toString().slice(0, -1)
}
