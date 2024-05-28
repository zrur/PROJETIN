document.addEventListener('DOMContentLoaded', function() {
    alert("Olá, sou o Irock, seu Bicho de Estimação Favorito");

    const ROCK_IMAGEM_SRC = "./img/S.W.png";
    const NOVA_IMAGEM_FUNDO_SRC = "./img/bar.jpg";

    const rockImage = document.getElementById('ROCK');
    const imagemFundo = new Image();

    rockImage.addEventListener('click', mudarDialogo);

    function mudarDialogo() {
        let userName = prompt("Qual é o seu nome?");
        if (userName) {
            alert("Olá, " + userName + "! Vamo tomar uma!");
            trocarImagem();
        }
    }

    function trocarImagem() {
        // Trocar a imagem do bicho de estimação
        rockImage.src = ROCK_IMAGEM_SRC;

        // Quando a nova imagem de fundo for carregada, trocar o fundo do site
        imagemFundo.onload = function() {
            document.body.style.backgroundImage = 'url(' + NOVA_IMAGEM_FUNDO_SRC + ')';
        };

        // Pré-carregar a nova imagem de fundo
        imagemFundo.src = NOVA_IMAGEM_FUNDO_SRC;
    }
});

///isso seria oq o livro esta escrito
//fuction touchRock(){var userName = prompt("Qual o seu nome?",
//                                   "Entre com seu nome aqui."  ///////////                                   "Entre com seu nome aqui."  

//if (userName){
//  alert("Prazer em conhece você," + userName + ".");
//  document.getElementById("rockImg").src = "rock_happy.png";
//}
///////