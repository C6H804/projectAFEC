let dataSetTest = [
["Essence","10/04/25","Jeudi 10 Avril à 08h45","52,30€"],
["Courses","12/04/25","Samedi 12 Avril à 14h10","78,90€"],
["Restaurant","15/04/25","Mardi 15 Avril à 20h05","42,50€"],
["Cinéma","18/04/25","Vendredi 18 Avril à 21h30","13,00€"],
["Abonnement Internet","01/04/25","Mardi 1 Avril à 00h05","29,99€"],
["Facture Électricité","05/04/25","Samedi 5 Avril à 12h15","88,75€"],
["Parking","08/04/25","Mardi 8 Avril à 09h50","5,00€"],
["Cadeau","25/04/25","Vendredi 25 Avril à 18h30","35,20€"],
["Café","07/04/25","Lundi 7 Avril à 08h10","3,50€"],
["Livres","20/04/25","Dimanche 20 Avril à 16h45","24,80€"],
["Pleins de carburant pour la voiture","10/04/25","Jeudi 10 Avril à 08h45","52,30€"],
["Achat de courses alimentaires pour la semaine","12/04/25","Samedi 12 Avril à 14h10","78,90€"],
["Dîner au restaurant italien en centre-ville","15/04/25","Mardi 15 Avril à 20h05","42,50€"],
["Sortie au cinéma pour voir le dernier blockbuster","18/04/25","Vendredi 18 Avril à 21h30","13,00€"],
["Paiement de l’abonnement mensuel à Internet","01/04/25","Mardi 1 Avril à 00h05","29,99€"],
["Règlement de la facture d’électricité du mois","05/04/25","Samedi 5 Avril à 12h15","88,75€"],
["Paiement du stationnement en centre-ville","08/04/25","Mardi 8 Avril à 09h50","5,00€"],
["Achat d’un cadeau d’anniversaire pour un ami","25/04/25","Vendredi 25 Avril à 18h30","35,20€"],
["Achat d’un café et d’un croissant à la boulangerie","07/04/25","Lundi 7 Avril à 08h10","3,50€"],
["Achat de plusieurs livres à la librairie","20/04/25","Dimanche 20 Avril à 16h45","24,80€"]
];
let id = 0;

function ajouterDepense(parent,id,srcImage,nomDepense, dateShort, dateLong, ammount) {
    let depense = document.createElement("div");
    depense.className = "depense";
    depense.id = id;
    let image = document.createElement("img");
    image.src = srcImage;
    image.alt = "image depense";
    image.className = "image-depense";
    image.width = 48;
    image.height = 48;
    
    let nom = document.createElement("strong");
    nom.innerText = nomDepense;
    
    let dateMobile = document.createElement("i");
    dateMobile.innerText = dateShort;
    dateMobile.className = "mobile";
    
    let dateDesktop = document.createElement("i");
    dateDesktop.innerText = dateLong;
    dateDesktop.className = "desktop";
    
    let ammountDepense = document.createElement("strong");
    let fleche = document.createElement("img");
    fleche.src = "icons/angle-small-down.svg";
    fleche.alt = "fleche depense";
    fleche.width = "38px";
    fleche.height = "38px";

    ammountDepense.innerText = ammount;
    depense.appendChild(image);
    depense.appendChild(nom);
    depense.appendChild(dateMobile);
    depense.appendChild(dateDesktop);
    depense.appendChild(ammountDepense);
    depense.appendChild(fleche);
    parent.appendChild(depense);
}

function rajouterDepense(numeroData) {
    let parent = document.getElementById("depenses_container");
    id++;
    // let id = "depense" + (parent.childElementCount + 1);
    ajouterDepense(parent, id, "images/pates.jpg", dataSetTest[numeroData][0], dataSetTest[numeroData][1], dataSetTest[numeroData][2], dataSetTest[numeroData][3]);
    console.log("done");
}

function fillDepenses() {
    for (i = 0; i < 60; i++) {
        numeroData = Math.floor(Math.random() * (dataSetTest.length-1));
        rajouterDepense(numeroData);
    }
}


function init() {
    console.log("init");
    fillDepenses();
}