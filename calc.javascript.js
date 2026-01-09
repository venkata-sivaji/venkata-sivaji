let input = document.querySelector("input")
function add(a){
    input.value += a
}


function clrscr(){
    input.value=""
}

function del(){
    input.value=input.value.slice(0,input.value.length-1)
}

function tot(){
    input.value= eval(input.value)
}