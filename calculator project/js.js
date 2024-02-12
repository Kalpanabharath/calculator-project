let input=document.getElementById("userinput");


function adddivde(){
     input.value=input.value+"/"
}

function disnum(num){
    
      input.value+=num
}

function addplus(){
     input.value=input.value+"+"

}
function adddot(){
     input.value=input.value+"."
}
function find(){
     try{
          input.value=eval(input.value)
     }
     catch(error){
          alert('invalid')
     }

}
function addminous(){
     input.value=input.value+"-"
}
function addmultiply(){
     input.value=input.value+"*"
}
function del(){
     input.value=  ""

}
function pop(){
     input.value=input.value.slice(0,-1)
}
function makebraket(){
     input.value="("+input.value+")"
}


