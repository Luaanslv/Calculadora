var numero = document.getElementById("resultado").innerHTML
function insert(num){
    numero = document.getElementById("resultado").innerHTML;
   document.getElementById("resultado").innerHTML = numero + num ;
        
}
function addhistor(res, resultado) {
    let histor = document.getElementById("resultado").innerHTML;
    if(histor){
        document.getElementById("res").innerHTML= `${numero} = ${histor}`;
    }else{
        document.getElementById('res').innerHTML = "Nada...";
    }
    
}

    function clean(){
    document.getElementById('resultado').innerHTML = "";
    
    }

    function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
    }
    function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    
    if(resultado){
        numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada...";
    }
    
}
   