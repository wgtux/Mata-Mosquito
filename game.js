var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var criaMosquitoTempo = 1500

var nivelgame = window.location.search
nivelgame = nivelgame.replace('?', '')

if(nivelgame === 'facil'){
    criaMosquitoTempo = 1500
}
else if(nivelgame === 'normal'){
    criaMosquitoTempo = 1000
}
else if(nivelgame === 'dificil'){
    criaMosquitoTempo = 750
}

//definindo o tamanho do palco do jogo
function tamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

tamanhoPalco()

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }
    else {
   document.getElementById('tempo_restante').innerHTML = tempo
    }
},1000)


function posicaoRandomica(){

    //remover o mosquito anterior (caso ele exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //Game Over
        if(vidas > 3){
            //redirecionar a pagina para game_over
            window.location.href= 'game_over.html'
        }

        //removendo a vida
        //console.log('elemento'+vidas)
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
        vidas++
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute' 
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

    
}

// Função para criação do tamanho aleatorio do mosquito
function tamanhoAleatorio(){
    var tamanhoMosquito = Math.floor(Math.random()*3)

    switch(tamanhoMosquito){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
           return 'mosquito3'
    }
}

//Mudando o lado que o mosquito olha de forma randomica
function ladoAleatorio(){
    var lado = Math.floor(Math.random()*2)

    switch(lado){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

