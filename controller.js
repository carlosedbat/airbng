var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;



var url = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";//Sua URL

var xhttp = new XMLHttpRequest();
xhttp.open("GET", url, false);
xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

//console.log(xhttp.responseText);
var resposta = {};
resposta = xhttp.responseText;
answer = JSON.parse(resposta);
var salvar = JSON.stringify(answer);
texto = JSON.stringify(answer[2].photo);
function obterDados(){
var elemento = document.getElementById("imagem");
elemento.src = texto;
return elemento
}

console.log(texto);

function GFG_Fun() {
    var img = document.createElement('img');
    img.src = "https://a0.muscache.com/im/pictures/77a102a4-cf65-475e-be60-4d592307ab4a.jpg?aki_policy=xx_large";
    img.className = "card-img-top"
    document.getElementById('teste1').appendChild(img);
    down.innerHTML = "Image Element Added."; 
}
function GFG_Fan() {
    texto = JSON.stringify(answer[2].photo);
    var img = document.getElementById('imagem');
    img.src = [texto];

}