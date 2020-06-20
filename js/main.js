function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";    
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com");
    window.location.href = "https://www.google.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML ="Obrigado por passar o mouse";
    // alert("Trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML ="Passe o mouse aqui";
}

function load()
{
    alert("página carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(n1, n2){
    return n1 + n2;
}

function validarIdade(idade){
    var validar;
    if (idade >= 18){
        var validar = true;
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
console.log(validarIdade(idade));
*/
/*
function soma(n1, n2) {
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d.getMonth() + 1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count < 5) {
    console.log(count);
    //count = count + 1;
    alert(count);
    count++;
}
*/
/*var idade = prompt("Qual sua idade");
//var idade = 18;
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/*
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/
/*
var nome = "Breno Souza";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
alert(frase.replace("Japão", "Brasil"));
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("-"));