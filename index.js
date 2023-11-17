let nomeDoHeroi = "Shota Nakama";
let XPdoHeroi = 11.000;

if(XPdoHeroi < 1.000) {
    XPdoHeroi = "Ferro" 
} else if(XPdoHeroi >= 1.001 && XPdoHeroi <= 2.000) {
    XPdoHeroi = "Bronze"
} else if(XPdoHeroi >= 2.001 && XPdoHeroi <= 5.000) {
    XPdoHeroi = "Prata"
} else if(XPdoHeroi >= 6.001 && XPdoHeroi <= 7.000) {
    XPdoHeroi = "Ouro"
} else if(XPdoHeroi >= 7.001 && XPdoHeroi <= 8.000) {
    XPdoHeroi = "Platina"
} else if(XPdoHeroi >= 8.001 && XPdoHeroi <= 9.000) {
    XPdoHeroi = "Ascendente"
} else if(XPdoHeroi >= 9.001 && XPdoHeroi <= 10.000) {
    XPdoHeroi = "Imortal"
} else if(XPdoHeroi >= 10.001) {
    XPdoHeroi = "Radiante"
}

console.log("O herói de nome " + nomeDoHeroi + " está no nível de " + XPdoHeroi)