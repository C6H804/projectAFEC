let dataSetTest = [
["Essence","10/04/25","Jeudi 10 Avril à 08h45","502,30€"],
["Courses","12/05/25","Samedi 12 Avril à 14h10","178,90€"],
["Restaurant","15/06/25","Mardi 15 Janvier à 20h05","242,50€"],
["Cinéma","18/07/25","Vendredi 18 Janvier à 21h30","123,00€"],
["Abonnement Internet","01/08/25","Mardi 1 Janvier à 00h05","29,99€"],
["Facture Électricité","05/09/25","Samedi 5 Février à 12h15","88,75€"],
["Parking","08/10/25","Mardi 8 Février à 09h50","5,00€"],
["Cadeau","25/11/25","Vendredi 25 Mars à 18h30","35,20€"],
["Café","07/04/25","Lundi 7 Mars à 08h10","3,50€"],
["Livres","20/05/25","Dimanche 20 Mai à 16h45","24,80€"],
["Pleins de carburant pour la voiture","10/06/25","Jeudi 10 Juin à 08h45","522,30€"],
["Achat de courses alimentaires pour la semaine","12/07/25","Samedi 12 Juillet à 14h10","178,90€"],
["Dîner au restaurant italien en centre-ville","15/08/25","Mardi 15 Aout à 20h05","425,50€"],
["Sortie au cinéma pour voir le dernier blockbuster","18/09/25","Vendredi 18 Septembre à 21h30","133,00€"],
["Paiement de l’abonnement mensuel à Internet","01/10/25","Mardi 1 Octobre à 00h05","291,99€"],
["Règlement de la facture d’électricité du mois","05/11/25","Samedi 5 Novembre à 12h15","881,75€"],
["Paiement du stationnement en centre-ville","08/12/25","Mardi 8 Décembre à 09h50","5,00€"],
["Achat d’un cadeau d’anniversaire pour un ami","25/01/25","Vendredi 25 Décembre à 18h30","325,20€"],
["Achat d’un café et d’un croissant à la boulangerie","07/02/25","Lundi 7 Avril à 08h10","3,50€"],
["Achat de plusieurs livres à la librairie","20/03/25","Dimanche 20 Avril à 16h45","241,80€"]
];
let id = 0;

function ajouterDepense(parent,id,srcImage,nomDepense, dateShort, dateLong, ammount) {
    let depense = document.createElement("div");
    depense.className = "depense";
    depense.id = "depense" + id;
    
    let depenseTete = document.createElement("div");
    depenseTete.className = "depenseTete";
    depenseTete.id = "tete" + id;
    
    let image = document.createElement("img");
    image.src = srcImage;
    image.alt = "image depense";
    image.className = "image-depense";
    image.width = 48;
    image.height = 48;
    
    let nom = document.createElement("strong");
    nom.className = "nom-depense";
    nom.innerText = nomDepense;
    
    let dateMobile = document.createElement("i");
    dateMobile.innerText = dateShort;
    dateMobile.className = "mobile";
    
    let dateDesktop = document.createElement("i");
    dateDesktop.innerText = dateLong;
    dateDesktop.className = "date desktop";
    
    let ammountDepense = document.createElement("strong");
    ammountDepense.className = "ammount-depense";
    ammountDepense.innerText = ammount;
    
    let fleche = document.createElement("img");
    fleche.src = "icons/chevron-down.svg";
    fleche.alt = "fleche de déroulement pour voir les détails de la dépense";
    fleche.className = "desktop fleche-depense";
    fleche.width = "48";
    fleche.height = "48";
    fleche.onclick = function() {unrollDepense(id)};
    
    depense.appendChild(depenseTete);

    depenseTete.appendChild(image);
    depenseTete.appendChild(nom);
    depenseTete.appendChild(dateMobile);
    depenseTete.appendChild(dateDesktop);
    depenseTete.appendChild(ammountDepense);
    depenseTete.appendChild(fleche);
    
    parent.appendChild(depense);
}

function rajouterDepense(numeroData) {
    let parent = document.getElementById("depenses_container");
    // let id = "depense" + (parent.childElementCount + 1);
    ajouterDepense(parent, id, "images/pates.jpg", dataSetTest[numeroData][0], dataSetTest[numeroData][1], dataSetTest[numeroData][2], dataSetTest[numeroData][3]);
    id++;
    console.log("done");
}

function fillDepenses(quantity) {
    for (i = 0; i < quantity; i++) {
        numeroData = Math.floor(Math.random() * (dataSetTest.length-1));
        rajouterDepense(numeroData);
    }
}

function init(page) {
    console.log("init");
    let screenWidth = window.innerWidth;
    if (screenWidth < 720) {
        fillDepenses(3);
    } else {
        let screenHeight = window.innerHeight;
        fillDepenses(Math.floor((screenHeight-200) / 90));
    }
}

function unrollDepense(id) {
    console.log(id);
}