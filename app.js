function start(){
    var x;
    var data= prompt("Digite sua nome:");
     if (data!=null){
  x=data;
  document.getElementById("name").innerHTML=x + " vamos começar o jogo?"}
}

function choose()
{
var x;
var r=confirm("Escolha a opção");
    if (r==true){
  x= prompt("Qual o dia do halloween? 1. 31 de outubro 2. 31 de dezembro 3. 31 de janeiro - Inserir apenas o número da alternativa");
        if (x==="1"){
            document.getElementById("q1c").innerHTML=x 
        } else {
            document.getElementById("q1w").innerHTML=x
        }
    x= prompt("Qual cor predominante do halloween?  1. roxo 2. verde 3. amarelo - Inserir apenas o número da alternativa ");
    if (x==="1"){
        document.getElementById("q2c").innerHTML=x 
    } else {
        document.getElementById("q2w").innerHTML=x
    }
    }
    else
  {
  x="Você pressionou Cancelar!";
  }

}

