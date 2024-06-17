const h1Presentation = document.querySelector("#h1Presentation")
const h2Presentation = document.querySelector("#h2Presentation")
const greenDisc = document.getElementById("greenDisc")
const redDisc = document.getElementById("redDisc")
const statusText = document.getElementById("statusText")
const btnWhatsapp = document.getElementById("whatsapp")
const glideItens = document.querySelector(".glide__slides")
const costumersArea = document.querySelector("#costumers")
const contactPhone = document.getElementById("contactPhone")
const contactEmail = document.getElementById("contactEmail")

function toggleStatus(){
    switch(statusText.textContent){
        case "Online" : 
        greenDisc.style.display="block"
        statusText.style.color="green"
        statusText.style.display="block"
        btnWhatsapp.style.display="block"
        if($(window).width() < 1200){
            $(".hide").show()
        }
        break;
        case "Inativo" :
        redDisc.style.display="block"
        statusText.style.color="red"
        statusText.style.display="block"
        break;
        default : alert("ERRO NO SISTEMA")
        break;
    }
}

function addRate(person, rate){
    costumersArea.innerHTML += `<div><h3>${person}</h3><p>${rate}</p></div>`
}

function p(content){
    return `<p>${content}</p>`
}

toggleStatus()

addRate("Fracisco Carlos", "A gente nunca espera precisar de reboque, mas quando precisa é bom ter alguém de confiança como Sr Plínio da Fire Reboque.")

addRate("Paulo Moura", "Recomendo o serviço de reboque. Me tirou do prego 2 vezes, já.")

addRate("Eduardo Campos", "Ótimo serviço. Motorista profissional, gente boa!")



