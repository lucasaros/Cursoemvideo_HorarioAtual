function carregar(){
    var date = new Date();
    var getHours = date.getHours();
    
    var imagem = document.getElementById('img');
    var horario = document.getElementsByClassName('horario__titulo')[0]

    horario.innerText = `Bom Dia! agora são ${getHours} horas da manhã`

    if (getHours > 12 && getHours < 19) {
        imagem.src = "imagens/tarde.jpg"
        horario.innerText = `Boa Tarde! agora são ${getHours} horas da tarde`
    } else if (getHours > 18 && getHours < 24) {
        imagem.src = "imagens/noite.jpeg"
        horario.innerText = `Boa Noite! agora são ${getHours} horas da noite`
    }
}
