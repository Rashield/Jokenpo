function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function definePlayer(escolha,player){
    let imgEscolha="";
    let imgEscolhaUser = document.querySelector(".escolhauser");
    let imgEscolhaPC = document.querySelector(".escolhapc");
    if(player=="user"){ 
        imgEscolha = document.querySelector(".escolhauser");
    }else if(player =="PC"){
        imgEscolha = document.querySelector(".escolhapc");
    }
    if(escolha==1){
        imgEscolha.style.backgroundImage = `url("./imgs/pedra.png")`;
    }else if(escolha==2){
        imgEscolha.style.backgroundImage = `url("./imgs/papel.png")`;
    }else if(escolha==3){
        imgEscolha.style.backgroundImage = `url("./imgs/tesoura.png")`;
    }
    setTimeout(() => {
        imgEscolhaPC.style.backgroundImage = ``;
        imgEscolhaUser.style.backgroundImage = ``;
    }, 3000);
};

let winsUser=0, winsPC=0,aviso=false;

function jogada(escolhaUser){
    let escolhaPC = getRandomInt(1,4);
    if(escolhaUser == 1){
        definePlayer(escolhaUser,"user");
        if(escolhaPC==2){
            definePlayer(escolhaPC,"PC");
            winsPC++;
        }else if(escolhaPC==3){
            definePlayer(escolhaPC,"PC");
            winsUser++;
        }else{
            definePlayer(escolhaPC,"PC");
        };
    }else if(escolhaUser==2){
        definePlayer(escolhaUser,"user");
        if(escolhaPC==3){   
            definePlayer(escolhaPC,"PC");
            winsPC++;
        }else if(escolhaPC==1){
            definePlayer(escolhaPC,"PC");
            winsUser++;
        }else{definePlayer(escolhaPC,"PC");};
    }else if(escolhaUser==3){
        definePlayer(escolhaUser,"user");
        if(escolhaPC==2){
            definePlayer(escolhaPC,"PC");
            winsUser++;
        }else if(escolhaPC==1){
            definePlayer(escolhaPC,"PC");
            winsPC++;
        }else {definePlayer(escolhaPC,"PC");};
    }
    exibeWins();
    ganhador(winsUser,winsPC);
};
function exibeWins(){
    let exibeWins = document.querySelector(".placar");
    exibeWins.innerHTML = 
    `
    <p>VOCÊ ${winsUser} X ${winsPC} PC</p>
    `;
}
function ganhador(User, PC){
    if(User == 3 || PC ==3){
        winsUser=0;
        winsPC=0;
        setTimeout(() => {
            exibeWins();
        }, 3000);
    };
}
