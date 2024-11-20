const emojis = [
    "😀",
    "😀",
    "😻",
    "😻",
    "😈",
    "😈",
    "🐭",
    "🐭",
    "🐰",
    "🐰",
    "🐺",
    "🐺",
    "🕷",
    "🕷",
    "🦊",
    "🦊",
]

let OpenCards = [];

let Random = emojis.sort(() => (Math.random() > 0.5) ? 2:-1)

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = 'cards';  
    box.innerHTML = Random[i];
    box.onclick = cliquei;
    document.querySelector('.pecas').appendChild(box)
}

function cliquei() {
    if(OpenCards.length < 2){
        this.classList.add("Veja");
        OpenCards.push(this);
    }

    if (OpenCards.length == 2) {
        setTimeout(VerificarPartida(), 1000);
    }
}

function VerificarPartida(){
    if (OpenCards[0].innerHTML === OpenCards[1].innerHTML){
        OpenCards[0].classList.add("ACERTOU!")
        OpenCards[1].classList.add("ACERTOU!")  
    } else{
        OpenCards[0].classList.remove("Veja")
        OpenCards[1].classList.remove("Veja")
    }

    OpenCards = [];

    if (document.querySelectorAll(".ACERTOU!").length === emojis.length){
        alert("VOCÊ VENCEU!!")
    }
}
