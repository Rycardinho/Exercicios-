function carregar () {

let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
//let hora = data.getHours()
let hora = 20

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = "manhã.png"
        msg.innerHTML = `Agora são ${hora} horas, Bom Dia!`
        document.body.style.background = '#87CEEB'
    } else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src = "tarde.png"
        msg.innerHTML = `Agora são ${hora} horas, Boa Tarde!`
        document.body.style.background = '#D2691E'
    } else {
        // boa noite 
        img.src = "noite.png"
        msg.innerHTML = `Agora são ${hora} horas, Boa Noite!`
        document.body.style.background = '#515154'
    }


} 



