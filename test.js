//SCRIPT
var clicks = -1;
var STOP = 0;
alert("Cliques sur la plateau pour commencer à jouer");
Initialisation();

//DÉFINITION DES VARIABLES

//Variables pour reconnaitre la localisation de chacune des div
var un = document.getElementById("un");
var deux = document.getElementById("deux");
var trois = document.getElementById("trois");
var quatre = document.getElementById("quatre");
var cinq = document.getElementById("cinq");
var six = document.getElementById("six");
var sept = document.getElementById("sept");
var huit = document.getElementById("huit");
var neuf = document.getElementById("neuf");
// Variables associées à la case blanche : current
var current = document.getElementsByClassName("current"); 
var currentid = current[0].getAttribute("id");
var currentclass = current[0].getAttribute("class");

/*majvar = function(){
    current = document.getElementsByClassName("current"); 
    currentid = current[0].getAttribute("id");
    currentclass = current[0].getAttribute("class");
    
    //CETTE FONCTION NE MET MALHEUREUSEMENT PAS A JOUR LES VARIABLES LORSQUE ON L'APPELLE : majvar();
}*/

//FONCTIONS

//Modification à chaque clic : migration des images
Click = function(){

    if(STOP==1){ 
        alert ("La partie est terminée")
    }
    if(STOP==0){

        un.onclick = function(){
            if (currentid=="deux" || currentid=="quatre"||currentid=="un"){
                console.log(currentid);
                /*On modifie la case qui était initialement blanche*/
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("un").getAttribute("class");
                /*On modifie la case cliquée qui devient blanche*/
                un.className = "current";
                /*On modifie les variables currentX*/
                /* majvar() FONCTION QUI NE FONCTIONNE PAS :'( */
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu") /*La case à bouger n'est pas voisine de la case vide*/
            }
        };

        deux.onclick = function(){
            if (currentid=="un" || currentid=="trois"|| currentid=="cinq"||currentid=="deux"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("deux").getAttribute("class");
                deux.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        trois.onclick = function(){
            if (currentid=="deux" || currentid=="six"||currentid=="trois"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("trois").getAttribute("class");
                trois.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        quatre.onclick = function(){
            if (currentid=="un" || currentid=="cinq"|| currentid == "sept"||currentid=="quatre"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("quatre").getAttribute("class");
                quatre.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        cinq.onclick = function(){
            if (currentid=="deux" || currentid=="quatre"|| currentid=="six"||currentid=="huit"||currentid=="cinq"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("cinq").getAttribute("class");
                cinq.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        six.onclick = function(){
            if (currentid=="trois" || currentid=="cinq"|| currentid=="neuf"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("six").getAttribute("class");
                six.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        sept.onclick = function(){
            if (currentid=="quatre" || currentid=="huit"||currentid=="sept"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("sept").getAttribute("class");
                sept.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        huit.onclick = function(){
            if (currentid=="sept" || currentid=="cinq"|| currentid=="neuf"||currentid=="huit"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("huit").getAttribute("class");
                huit.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };

        neuf.onclick = function(){
            if (currentid=="six" || currentid=="huit"|| currentid=="neuf"){
                var caseNewImage =document.getElementById(currentid);
                caseNewImage.className = document.getElementById("neuf").getAttribute("class");
                neuf.className = "current";
                currentid=current[0].getAttribute("id");
            } else {
                alert("Petit Tricheur je t'ai vu")
            }
        };
    }
}

//Fonction appellée à chaque clic  + comptage clicks
function onClick() {
    Click();
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
    if(STOP==0){GoalTest();}
};

//Fonction Restart
var restart = document.getElementById("restart");
restart.onclick=function(){
    clicks = -1;
    STOP = 0;
    Initialisation();
}

//Fonction de test victoire
GoalTest=function (){
    if (un.className==un.id && deux.className==deux.id && trois.className==trois.id && quatre.className==quatre.id && cinq.className==cinq.id && six.className==six.id && sept.className==sept.id && huit.className==huit.id){
        STOP=1;
        alert("TERIN2")
        console.log("TERMINÉ");
    }
    else{ STOP = 0 ;}
}

//Fonction d'initialisation
 function Initialisation(){
    var listeid = ["un","deux","trois","quatre","cinq","six","sept","huit","neuf"];
    var listeclass = ["un","deux","trois","quatre","cinq","six","sept","huit","current"];
    var ind=entierAleatoire(0, listeclass.length);
    var listeclass2 = [];
    for (id_div in listeid){
        ind=entierAleatoire(0, listeclass.length-1);
        while (ind >= listeclass.length){ind=entierAleatoire(0, listeclass.length);}
        listeclass2.push(listeclass[ind]);
        listeclass.splice(ind, 1); //Supprime l'élément d'indice "ind" dans la listeclass
    }
    un.className=listeclass2[0];
    deux.className=listeclass2[1];
    trois.className=listeclass2[2];
    quatre.className=listeclass2[3];
    cinq.className=listeclass2[4];
    six.className=listeclass2[5];
    sept.className=listeclass2[6];
    huit.className=listeclass2[7];
    neuf.className=listeclass2[8];
    listeclass = ["un","deux","trois","quatre","cinq","six","sept","huit","current"];// Réinitialisation
}

//Génération d'un entier
function entierAleatoire(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
     //La variable contient un nombre aléatoire compris entre min et max
}

//IL RESTE À METTRE A JOUR LE NOMBRE DE CLICKS LORS DU BOUTON RESTART