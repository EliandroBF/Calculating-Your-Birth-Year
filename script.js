function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    if (fano.value.length < 1 || fano.value > ano){
        alert ("Você escreveu o ano [ERRADO]")
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - fano.value
        var genero = ''
        if (fsex[0].checked){
                genero = "Masculino"
            if (idade < 13){
                //Jovem
            img.setAttribute('src','foto-bebe-m.png')
            }   else if (idade < 21){
                //Jovem
                img.setAttribute('src','foto-jovem-m.png')
            }   else if (idade < 40){
                //Adulto
                img.setAttribute('src','foto-adulto-m.png')
            }   else if (idade < 60){
                //idoso
                img.setAttribute('src','foto-idoso-m.png')
            }
        }else if (fsex[1].checked){
                 genero = "Feminino"
                if (idade < 13){
                    //jovem
                    img.setAttribute('src','foto-bebe-f.png')
                }else if (idade < 21){
                    //jovem
                    img.setAttribute('src', 'foto-jovem-f.png')
                }else if (idade < 40){
                    //Adulto
                    img.setAttribute('src', 'foto-adulto-f.png')
                }else if (idade < 60){
                    //Idoso
                    img.setAttribute('src','foto-idoso-f.png')
            }
        
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detequitamos ${genero} de idade ${idade} anos...`
        res.appendChild(img)
    } 

}
