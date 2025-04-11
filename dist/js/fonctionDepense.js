let dataSetTest = [
["Essence","10/04/25","Jeudi 10 Avril à 08h45","502,30€"],
["Courses","12/04/25","Samedi 12 Avril à 14h10","178,90€"],
["Restaurant","15/04/25","Mardi 15 Janvier à 20h05","242,50€"],
["Cinéma","18/04/25","Vendredi 18 Janvier à 21h30","123,00€"],
["Abonnement Internet","01/04/25","Mardi 1 Janvier à 00h05","29,99€"],
["Facture Électricité","05/04/25","Samedi 5 Février à 12h15","88,75€"],
["Parking","08/04/25","Mardi 8 Février à 09h50","5,00€"],
["Cadeau","25/04/25","Vendredi 25 Mars à 18h30","35,20€"],
["Café","07/04/25","Lundi 7 Mars à 08h10","3,50€"],
["Livres","20/04/25","Dimanche 20 Mai à 16h45","24,80€"],
["Pleins de carburant pour la voiture","10/04/25","Jeudi 10 Juin à 08h45","522,30€"],
["Achat de courses alimentaires pour la semaine","12/04/25","Samedi 12 Juillet à 14h10","178,90€"],
["Dîner au restaurant italien en centre-ville","15/04/25","Mardi 15 Aout à 20h05","425,50€"],
["Sortie au cinéma pour voir le dernier blockbuster","18/04/25","Vendredi 18 Septembre à 21h30","133,00€"],
["Paiement de l’abonnement mensuel à Internet","01/04/25","Mardi 1 Octobre à 00h05","291,99€"],
["Règlement de la facture d’électricité du mois","05/04/25","Samedi 5 Novembre à 12h15","881,75€"],
["Paiement du stationnement en centre-ville","08/04/25","Mardi 8 Décembre à 09h50","5,00€"],
["Achat d’un cadeau d’anniversaire pour un ami","25/04/25","Vendredi 25 Décembre à 18h30","325,20€"],
["Achat d’un café et d’un croissant à la boulangerie","07/04/25","Lundi 7 Avril à 08h10","3,50€"],
["Achat de plusieurs livres à la librairie","20/04/25","Dimanche 20 Avril à 16h45","241,80€"]
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
    ammountDepense.innerText = ammount;
    
    let fleche = document.createElement("img");
    fleche.src = "icons/angle-small-down.svg";
    fleche.alt = "fleche depense";
    fleche.className = "desktop";
    fleche.width = "48";
    fleche.height = "48";
    
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

function fillDepenses(quantity) {
    for (i = 0; i < quantity; i++) {
        numeroData = Math.floor(Math.random() * (dataSetTest.length-1));
        rajouterDepense(numeroData);
    }
}

function init() {
    console.log("init");
    fillDepenses(3);
}