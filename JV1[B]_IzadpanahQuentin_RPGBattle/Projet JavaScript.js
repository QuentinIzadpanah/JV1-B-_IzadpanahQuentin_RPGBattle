//Variables ennemy

var Yann = document.getElementById("Yann")
var hpYann = document.getElementById("vieYann")
var Pablo = document.getElementById("Pablo")
var hpPablo = document.getElementById("viePablo")
var Julius = document.getElementById("Julius")
var hpJulius = document.getElementById("vieJulius")
var mechant = document.getElementsByClassName("ennemy")
var hpmechant = document.getElementsByClassName("hpennemy")
var hpbarennemy = document.getElementsByClassName("progressennemy")
var hptextennemy = document.getElementsByClassName("hpvalueennemy")
//variables Hero
var Ewenn = document.getElementById("Ewenn")
var hpEwenn = document.getElementById("vieEwenn")
var Mathieu = document.getElementById("Mathieu")
var hpMathieu = document.getElementById("vieMathieu")
var Orion = document.getElementById("Orion")
var hpOrion = document.getElementById("vieOrion")
var Sebastien = document.getElementById("Sebastien")
var hpSebastien = document.getElementById("vieSebastien")
var hero = document.getElementsByClassName("hero")
var hphero = document.getElementsByClassName("hphero")
var hpbarhero = document.getElementsByClassName("progresshero")
var hptexthero = document.getElementsByClassName("hpvaluehero")
//Variable texte
var lancement = document.getElementsByClassName("texte")
var interactionDialogue = document.getElementsByClassName("text")
// Nombre aléatoire
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
var defHeal = getRandomArbitrary(7, 10);
var heroChiffre = getRandomArbitrary(0, 3);
var damageValue = getRandomArbitrary(5, 20);
var damageValueMechant = getRandomArbitrary(15, 25);
heroChiffre = 0
damageValue = 0
//Compteur de Tour
compteurDeTour = 0
//Hp Héros
heroschoisis = 0
hpEwennValue = 200
hpMathieuValue = 175
hpOrionValue = 150
hpSebastienValue = 155
hpHeroTab = ["Ewenn","Mathieu","Orion","Sebastien"]
//Hp Méchants
hpYannvalue = 150
hpPablovalue = 150
hpJuliusvalue = 150
//Booléen
isAttacking = false
attackEnnemy = false
//Lancement onclick
lancement[0].onclick = function () {
    if (compteurDeTour == 0) {
        compteurDeTour += 1;
        lancement[0].innerHTML = "C'est Ewenn qui attaque !";
        interactionDialogue[0].style.visibility = "visible";
        interactionDialogue[1].style.visibility = "visible";
        interactionDialogue[2].style.visibility = "visible";
    }
}
//Lancement attaque onclick
interactionDialogue[0].onclick = function () {
    isAttacking = true;

}

//Fonction attaque
function heroattaque(hero) {
    damageValue = getRandomArbitrary(7, 20);
    isAttacking = false;
    setTimeout(() => {
        if (attackEnnemy == true) {
            lancement[0].innerHTML = "Les ennemies ripostent !";
        }
        else {
            lancement[0].innerHTML = "C'est " + hero.id + " qui attaque !";
        }
    }, 1000);
    return damageValue
}
//Fonction le hero qui subit la riposte
function heroaleatoire() {
    return heroChiffre = getRandomArbitrary(0, 3)
}
//Fonction Riposte mechant
function mechantRiposte() {
    damageValueMechant = getRandomArbitrary(15, 25)
    return damageValueMechant

}
//Boucle d'attaque des héros
for (i = 0; i < mechant.length; i++) {
    mechant[i].onclick = function () {

        if (isAttacking) {
            if (this.id == "Yann") {
                hpYannvalue = hpYannvalue - heroattaque(hero[compteurDeTour]);
                hpbarennemy[0].value = hpYannvalue;
                hptextennemy[0].innerHTML = (hpYannvalue) + " Hp";
                if (hpbarennemy[0].value <= 0) {
                    hptextennemy[0].innerHTML = "Mort";
                }
            }
            else if (this.id == "Pablo") {
                hpPablovalue = hpPablovalue - heroattaque(hero[compteurDeTour]);
                hpbarennemy[1].value = hpPablovalue;
                hptextennemy[1].innerHTML = (hpPablovalue) + " Hp";
                if (hpbarennemy[1].value <= 0) {
                    hptextennemy[1].innerHTML = "Mort";
                }
            }
            else {
                hpJuliusvalue = hpJuliusvalue - heroattaque(hero[compteurDeTour]);
                hpbarennemy[2].value = hpJuliusvalue;
                hptextennemy[2].innerHTML = (hpJuliusvalue) + " Hp";
                if (hpbarennemy[2].value <= 0) {
                    hptextennemy[2].innerHTML = "Mort";
                }
            }

            compteurDeTour += 1;
            //Ripostes des ennemies
            if (compteurDeTour == 5) {
                attackEnnemy = true
                if (attackEnnemy = true) {
                    lancement[0].innerHTML = "Les ennemies ripostent !";
                    interactionDialogue[0].style.visibility = "hidden";
                    interactionDialogue[1].style.visibility = "hidden";
                    interactionDialogue[2].style.visibility = "hidden";
                    hpHeroTab[heroaleatoire()]
                    heroschoisis = hpHeroTab[heroaleatoire()]
                    console.log(hpHeroTab[heroaleatoire()])

                    if (heroschoisis == "Ewenn") {
                        hpEwennValue = hpEwennValue - mechantRiposte()
                        hpbarhero[0].value = hpEwennValue;
                        hptexthero[0].innerHTML = (hpEwennValue) + " Hp";
                        if (hpbarhero[0].value <= 0) {
                            hptexthero[0].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Mathieu") {
                        hpMathieuValue = hpMathieuValue - mechantRiposte()
                        hpbarhero[1].value = hpMathieuValue;
                        hptexthero[1].innerHTML = (hpMathieuValue) + " Hp";
                        if (hpbarhero[1].value <= 0) {
                            hptexthero[1].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Orion") {
                        hpOrionValue = hpOrionValue - mechantRiposte()
                        hpbarhero[2].value = hpOrionValue;
                        hptexthero[2].innerHTML = (hpOrionValue) + " Hp";
                        if (hpbarhero[2].value <= 0) {
                            hptexthero[2].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Sebastien") {
                        hpSebastienValue = hpSebastienValue - mechantRiposte()
                        hpbarhero[3].value = hpSebastienValue;
                        hptexthero[3].innerHTML = (hpSebastienValue) + " Hp";
                        if (hpbarhero[3].value <= 0) {
                            hptexthero[3].innerHTML = "Mort";
                        }
                    }
                    hpHeroTab[heroaleatoire()]
                    heroschoisis = hpHeroTab[heroaleatoire()]
                    console.log(hpHeroTab[heroaleatoire()])

                    if (heroschoisis == "Ewenn") {
                        hpEwennValue = hpEwennValue - mechantRiposte()
                        hpbarhero[0].value = hpEwennValue;
                        hptexthero[0].innerHTML = (hpEwennValue) + " Hp";
                        if (hpbarhero[0].value <= 0) {
                            hptexthero[0].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Mathieu") {
                        hpMathieuValue = hpMathieuValue - mechantRiposte()
                        hpbarhero[1].value = hpMathieuValue;
                        hptexthero[1].innerHTML = (hpMathieuValue) + " Hp";
                        if (hpbarhero[1].value <= 0) {
                            hptexthero[1].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Orion") {
                        hpOrionValue = hpOrionValue - mechantRiposte()
                        hpbarhero[2].value = hpOrionValue;
                        hptexthero[2].innerHTML = (hpOrionValue) + " Hp";
                        if (hpbarhero[2].value <= 0) {
                            hptexthero[2].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Sebastien") {
                        hpSebastienValue = hpSebastienValue - mechantRiposte()
                        hpbarhero[3].value = hpSebastienValue;
                        hptexthero[3].innerHTML = (hpSebastienValue) + " Hp";
                        if (hpbarhero[3].value <= 0) {
                            hptexthero[3].innerHTML = "Mort";
                        }
                    }
                    hpHeroTab[heroaleatoire()]
                    heroschoisis = hpHeroTab[heroaleatoire()]
                    console.log(hpHeroTab[heroaleatoire()])

                    if (heroschoisis == "Ewenn") {
                        hpEwennValue = hpEwennValue - mechantRiposte()
                        hpbarhero[0].value = hpEwennValue;
                        hptexthero[0].innerHTML = (hpEwennValue) + " Hp";
                        if (hpbarhero[0].value <= 0) {
                            hptexthero[0].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Mathieu") {
                        hpMathieuValue = hpMathieuValue - mechantRiposte()
                        hpbarhero[1].value = hpMathieuValue;
                        hptexthero[1].innerHTML = (hpMathieuValue) + " Hp";
                        if (hpbarhero[1].value <= 0) {
                            hptexthero[1].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Orion") {
                        hpOrionValue = hpOrionValue - mechantRiposte()
                        hpbarhero[2].value = hpOrionValue;
                        hptexthero[2].innerHTML = (hpOrionValue) + " Hp";
                        if (hpbarhero[2].value <= 0) {
                            hptexthero[2].innerHTML = "Mort";
                        }
                    }
                    else if (heroschoisis == "Sebastien") {
                        hpSebastienValue = hpSebastienValue - mechantRiposte()
                        hpbarhero[3].value = hpSebastienValue;
                        hptexthero[3].innerHTML = (hpSebastienValue) + " Hp";
                        if (hpbarhero[3].value <= 0) {
                            hptexthero[3].innerHTML = "Mort";
                        }
                    }
                    compteurDeTour =0
                    attackEnnemy = false
                    setTimeout(() => {
                        lancement[0].innerHTML = "A vous d'attaquer --> ";
                        
                    }, 2000);
                    





                }
            }
        }
    }
}
                    //special personnage //MP hero
                        // on reproduit le systeme utilisé pour les barres de vies, mais on change la couleur et on reduit leur valeurs pour en faire des barres de MP
                        // Ewenn --> Gros coup, mathieu et Orion --> degats sur tous les ennemis, Sebastien --> Heal sur tous les alliées
                    //defense personnage
                        //Un heal propre a chaque personnage 
                    //si mort, <none> du game*/
                        // Lorsque qu'un personnage est mort un booléen viens se mettre en false et va empecher toute action que le personnage effectuais, et si c'etait un heors, ça passera son tour de jeu a la place de le faire jouer


