function carregar(){
    var msg = window.document.getElementById('msg')
    var img1 = window.document.getElementById('imagem1')
    var texto = window.document.getElementById('pesquisa')
    var data = new Date()
    var hora = data.getHours()
    var segundo = data.getSeconds()

    // var hora = 16
    var minuto = data.getMinutes()
    msg.innerHTML = ` ${hora}:${minuto}:${segundo}`


    if(texto = "Paris"){
        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/paris/manha.jpg'
            document.body.style.backgroundImage = url('manha.jpg')
            document.body.style.display = none
            // display none pesquisa
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/paris/tarde.jpg'
            document.body.style.backgroundImage = url('manha.jpg')
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.backgroundImage = "url('images/paris/noite.jpg')";
            document.body.style.backgroundPosition = "50%";

        }
        
    }else if(texto = "Rio","Rio de Janeiro"){  
        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/novo-manha.png'
            document.body.style.background = '#e7ea96'
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/novo-tarde.png'
            document.body.style.background = '#c96b45'
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.background = '#043571'
    
        }     
    }else if(texto = "São Paulo","Sao Paulo"){

        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/novo-manha.png'
            document.body.style.background = '#e7ea96'
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/novo-tarde.png'
            document.body.style.background = '#c96b45'
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.background = '#043571'
    
        }
     
    }else if(texto = "Londres","London"){
     
        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/novo-manha.png'
            document.body.style.background = '#e7ea96'
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/novo-tarde.png'
            document.body.style.background = '#c96b45'
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.background = '#043571'
    
        }
  
    }else if(texto = "Tokyo","Toquio"){

        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/novo-manha.png'
            document.body.style.background = '#e7ea96'
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/novo-tarde.png'
            document.body.style.background = '#c96b45'
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.background = '#043571'
    
        }
     
    }else if(texto = "New York","Nova Iorque","Nova York"){
     
        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/novo-manha.png'
            document.body.style.background = '#e7ea96'
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/novo-tarde.png'
            document.body.style.background = '#c96b45'
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.background = '#043571'
    
        }

    }else{
     
        if(hora >= 0 && hora < 12){
            //BOM DIA!
            img1.src = 'images/novo-manha.png'
            document.body.style.background = '#e7ea96'
            
        }else if(hora >= 12 && hora <= 18){
            //BOA TARDE!
            img1.src = 'images/novo-tarde.png'
            document.body.style.background = '#c96b45'
    
        }else{
            //BOA NOITE!
            img1.src = 'images/novo-noite.png'
            document.body.style.background = '#043571'
    
        }

    }

}