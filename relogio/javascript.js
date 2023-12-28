function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 16
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'images/novo-manha.png'
        document.body.style.background = '#e7ea96'
        
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'images/novo-tarde.png'
        document.body.style.background = '#c96b45'

    }else{
        //BOA NOITE!
        img.src = 'images/novo-noite.png'
        document.body.style.background = '#043571'

    }

}