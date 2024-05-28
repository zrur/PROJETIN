document.addEventListener('DOMContentLoaded', function() {
    alert("Olá, sou o Irock, seu Bicho de Estimação Favorito");

    const ROCK_IMAGEM_SRC = "./img/IROCK.joinha.png";
    const rockImage = document.getElementById('ROCK');

    rockImage.addEventListener('click', mudarDialogo);

    function mudarDialogo() {
        let userName = prompt("Qual é o seu nome?");
        if (userName) {
            alert("Olá, " + userName + "! Prazer em te conhecer!");
            trocarImagem();
        }
    }

    function trocarImagem() {
        rockImage.src = ROCK_IMAGEM_SRC;
    }
});
///isso seria oq o livro esta escrito
//fuction touchRock(){var userName = prompt("Qual o seu nome?",
//                                   "Entre com seu nome aqui."  

//if (userName){
//  alert("Prazer em conhece você," + userName + ".");
//  document.getElementById("rockImg").src = "rock_happy.png";
//}
///////