function start(){
    var x;
    var data= prompt("Digite seu nome:");
     if (data!=null){
  x=data;
  document.getElementById("name").innerHTML=x + " vamos começar o jogo?"}
}

function choose(){
  var x;
  var r=confirm("Você quer continuar e começar o jogo? Pressione Ok para começar e Cancelar para sair do jogo.");
    if (r==true){
      x= prompt("A) Qual o dia do halloween? 1. 31 de outubro 2. 31 de dezembro 3. 31 de janeiro - Inserir apenas o número da alternativa");
        if (x==="1"){
          document.getElementById("q1c").innerHTML="Alternativa - " + x + " | Questão A"
                    } else{
            document.getElementById("q1w").innerHTML="Alternativa - " + x + " | Questão A"
                          }
      x= prompt("B) Qual cor predominante do halloween?  1. roxo 2. verde 3. amarelo - Inserir apenas o número da alternativa ");
        if (x==="1"){
          document.getElementById("q2c").innerHTML= "Alternativa - " + x + " | Questão B"
                } else{
            document.getElementById("q2w").innerHTML="Alternativa - " + x + " | Questão B"
                      }
      x= prompt("C) O que significa o halloween? - 1. Dia dos zoombies | 2. Dia dos palhaços | 3. Dia das bruxas");
        if (x==="3"){
          document.getElementById("q2c").innerHTML="Alternativa - " + x + " | Questão C"
                } else{
            document.getElementById("q2w").innerHTML="Alternativa - " + x + " | Questão C"
                      }

    } else{
      alert("Você cancelou o jogo 🙁");
  }

}
