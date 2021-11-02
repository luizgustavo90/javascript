function verificar()
{
    var data = new Date() // coletando a data de hoje
    var ano= data.getFullYear() // coletando o ano
    var fano = document.getElementById('txtano') // coletando os dados do usuario do HTML - txtano
    var res = document.getElementById('res') // coletando os dados do usuario do HTML - res

    if(fano.value.lengh==0 || fano.value>ano){ //condicional se colocarem ano 0 ou ano>2021
        window.alert=('Erro , insira um valor correto')
    }
    else{
        var fsex = document.getElementsByName('radsex') //coletaando a informação de sexo dada pelo usuario do HTML
        var idade = ano - Number(fano.value) // calculando a idade do usuario
        var genero =''
        var img = document.createElement ('img')
        img.setAttribute('id','foto')


        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
            img.setAttribute('src', 'Imagens/crianca-masc-full.png') // chamando a imagem quando atende a condição

            }
            else if( idade <=21){
            img.setAttribute('src', 'Imagens/jovem-masc-full.png')  // chamando a imagem quando atende a condição

            }
            else if(idade <=50){
            img.setAttribute('src', 'Imagens/adulto-masc-full.png') // chamando a imagem quando atende a condição
            }
            else{
            img.setAttribute('src', 'Imagens/idoso-masc-full.png') // chamando a imagem quando atende a condição
            }
        }
        
        else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade<10){
            img.setAttribute('src', 'Imagens/crianca-fem-full.png') // chamando a imagem quando atende a condição

            }
            else if( idade <=21){
            img.setAttribute('src', 'Imagens/jovem-fem-full.png') // chamando a imagem quando atende a condição

            }
            else if(idade <=50){
            img.setAttribute('src', 'Imagens/adulto-fem-full.png') // chamando a imagem quando atende a condição
            }
            else{
            img.setAttribute('src', 'Imagens/idosa-fem-full.png') // chamando a imagem quando atende a condição
            }
        }
        res.style.textAlign = 'center' // alinhando o texto
        res.style.fontFamily = 'Verdana' // trocando a fonte do txto
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>` // formando o texto
        res.appendChild(img) // puxando a imagem

    }




}