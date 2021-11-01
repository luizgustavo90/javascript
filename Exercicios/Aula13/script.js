function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
  
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora>= 0 && hora <=12)
    {
        //bom dia
        img.src='imagens/manha-full.png'
        document.body.style.background = '#FCE277'
    }
    else if (hora >12 && hora <=18)
    {
        img.src='imagens/tarde-full.png'
        document.body.style.background = '#E69539'
    }
    else
    {
        img.src='imagens/noite-full.png'
        document.body.style.background = '#3B4CFF'
    }

}

