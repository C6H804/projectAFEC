/*let dataSetTest = [
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
];*/

let dataSetTest = [
    [
        [0, "Courses", "07/04/25-16h44", 65.58, 8, "images/pates.jpg"],
        [1, "Essence", "21/05/25-10h30", 50.00, 1, "images/pates.jpg"],
        [2, "Restaurant", "15/06/25-20h15", 120.00, 2, "images/pates.jpg"],
        [3, "Cinéma", "18/07/25-21h00", 15.00, 1, "images/pates.jpg"],
        [4, "Abonnement Internet", "01/08/25-00h05", 29.99, 1, "images/pates.jpg"],
        [5, "Facture Électricité", "05/09/25-12h15", 88.75, 1, "images/pates.jpg"],
        [6, "Parking", "08/10/25-09h50", 5.00, 1, "images/pates.jpg"],
        [7, "Cadeau", "25/11/25-18h30", 35.20, 1, "images/pates.jpg"],
        [8, "Café", "07/04/25-08h10", 3.50, 1, "images/pates.jpg"],
        [9, "Livres", "20/05/25-16h45", 24.80, 1, "images/pates.jpg"],
        [10, "Essence", "10/06/25-08h45", 522.30, 1, "images/pates.jpg"],
        [11, "Courses", "12/07/25-14h10", 178.90, 1, "images/pates.jpg"],
        [12, "Restaurant", "15/08/25-20h05", 425.50, 1, "images/pates.jpg"],
        [13, "Cinéma", "18/09/25-21h30", 133.00, 1, "images/pates.jpg"],
        [14, "Abonnement Internet", "01/10/25-00h05", 291.99, 1, "images/pates.jpg"],
        [15, "Facture Électricité", "05/11/25-12h15", 881.75, 1, "images/pates.jpg"],
        [16, "Parking", "08/12/25-09h50", 5.00, 1, "images/pates.jpg"],
        [17, "Cadeau", "25/01/25-18h30", 325.20, 1, "images/pates.jpg"],
        [18, "Café", "07/02/25-08h10", 3.50, 1, "images/pates.jpg"],
        [19, "Livres", "20/03/25-16h45", 241.80, 1, "images/pates.jpg"]
    ],
    [
        [
            ["id_Produit", "Nom_Produit", "Prix_Unit_Produit", "Quantité_Produit", "Prix_Produit_Final", "Image_Produit"]
        ],
        [
            [0, "Pâtes", 1.50, 2, 3.00, "images/pates.jpg"],
            [1, "Lait", 0.80, 1, 0.80, "images/pates.jpg"],
            [2, "Pain", 1.20, 1, 1.20, "images/pates.jpg"],
            [3, "Viande", 5.00, 1, 5.00, "images/pates.jpg"],
            [4, "Fruits", 2.00, 3, 6.00, "images/pates.jpg"],
            [5, "Légumes", 1.50, 2, 3.00, "images/pates.jpg"],
            [6, "Boissons", 1.00, 4, 4.00, "images/pates.jpg"],
            [7, "Produits d'entretien", 3.00, 1, 3.00, "images/pates.jpg"]
        ],
        [
            [0, "Essence", 1.50, 1, 1.50, "images/pates.jpg"]
        ],
        [
            [0, "Moi", 10.00, 1, 10.00, "images/pates.jpg"],
            [1, "Mathieu", 20.00, 1, 20.00, "images/pates.jpg"]
        ],
        [
            [0, "Film", 10.00, 1, 10.00, "images/pates.jpg"]
        ]
    ]
];

let id = 0;

function ajouterDepense(parent, id, srcImage, nomDepense, dateShort, dateLong, ammount) {
    let depense = document.createElement("div");
    depense.className = "c-depense-db";
    depense.id = "depense" + id;

    let depenseTete = document.createElement("div");
    depenseTete.className = "c-depense-db_header";

    let image = document.createElement("img");
    image.className = "image-depense";
    image.src = srcImage;
    image.alt = "image depense";
    image.width = 48;
    image.height = 48;

    let nom = document.createElement("div");
    nom.className = "nom-depense bold";
    nom.innerText = nomDepense;

    let dateMobile = document.createElement("div");
    dateMobile.innerText = dateShort;
    dateMobile.className = "mobile date large-mobile italic";

    let dateDesktop = document.createElement("div");
    dateDesktop.innerText = dateLong;
    dateDesktop.className = "date desktop italic";

    let ammountDepense = document.createElement("div");
    ammountDepense.className = "ammount-depense bold";
    ammountDepense.innerText = ammount;

    let fleche = document.createElement("img");
    fleche.src = "icons/chevron-down.svg";
    fleche.alt = "fleche de déroulement pour voir les détails de la dépense";
    fleche.className = "desktop fleche-depense";
    fleche.width = "48";
    fleche.height = "48";
    fleche.onclick = function () { unfold(id) };

    depense.appendChild(depenseTete);

    depenseTete.appendChild(image);
    depenseTete.appendChild(nom);
    depenseTete.appendChild(dateMobile);
    depenseTete.appendChild(dateDesktop);
    depenseTete.appendChild(ammountDepense);
    depenseTete.appendChild(fleche);

    parent.appendChild(depense);
}

function fillDepenses(quantity) {
    for (let i = 0; i < quantity; i++) {
        sendHeadValue(i);
    }
    setupProduct(2);
}

function init(page) {
    console.log("init");
    let screenWidth = window.innerWidth;
    if (screenWidth < 720) {
        fillDepenses(3);
    } else {
        let screenHeight = window.innerHeight;
        fillDepenses(Math.floor((screenHeight - 200) / 90));
    }
}

function setupProductHeader(id,body) {
    let bodyTop = document.createElement("div");
    bodyTop.className = "c-depense-db_body_top";

    let productHeadQuantityTotal = document.createElement("div");
    productHeadQuantityTotal.className = "nbrProduitsTete bold underline";
    productHeadQuantityTotal.innerHTML = dataSetTest[0][id][4] + " produits";

    const ProductHeadName = document.createElement("div");
    ProductHeadName.className = "nomProduitTete italic desktop";
    ProductHeadName.innerHTML = "Nom du produit";

    const ProductHeadPriceUnit = document.createElement("div");
    ProductHeadPriceUnit.className = "prixProduitUnitTete italic desktop";
    ProductHeadPriceUnit.innerHtml = "Prix du produit";

    const ProductHeadQuantity = document.createElement("div");
    ProductHeadQuantity.className = "quantiteProduitTete italic desktop";
    ProductHeadQuantity.innerHtml = "Quantité";

    const ProductHeadPriceTotal = document.createElement("div");
    ProductHeadPriceTotal.className = "prixTotalTete italic desktop";
    ProductHeadPriceTotal.innerHTML = "Prix total";

    bodyTop.appendChild(productHeadQuantityTotal);
    bodyTop.appendChild(ProductHeadName);
    bodyTop.appendChild(ProductHeadPriceUnit);
    bodyTop.appendChild(ProductHeadQuantity);
    bodyTop.appendChild(ProductHeadPriceTotal);
}


function setupProduct(id) {
    let Target = document.getElementById("depense"+id);
    let body = document.createElement("div");
    body.className = "c-depense-db_body";
    body.id = "depenseBody" + id;

    Target.appendChild(body);
    setupProductHeader(id,body);

    
    let bodyMiddle = document.createElement("div");
    bodyMiddle.className = "c-depense-db_body_middle";
    body.appendChild(bodyMiddle);
    
    for (let p = 0; p< dataSetTest[1].length; p++) {
        addProduct(id,bodyMiddle);
    }

    let bodyBottom = document.createElement("div");
    bodyBottom.className = "c-depense-db_body_bottom";
}

function addProduct(id,parent) {

    // ["id_Produit", "Nom_Produit", "Prix_Unit_Produit", "Quantité_Produit", "Prix_Produit_Final", "Image_Produit"],
    let nameProduct = dataSetTest[1][id][1];
    let priceUnitProduct = dataSetTest[1][id][2];
    let quantityProduct = dataSetTest[1][id][3];
    let totalPriceProduct = dataSetTest[1][id][4];
    let srcImageProduct = dataSetTest[1][id][5];

    let product = document.createElement("div");
    product.className = "produit";

    let productImage = document.createElement("img");
    productImage.className = "imageProduit";
    productImage.src = srcImageProduct;

    let productNameDesktop = document.createElement("div");
    productNameDesktop.className = "desktop nomProduit bold";
    productNameDesktop.innerHTML = nameProduct;

    let productNameMobile = document.createElement("div");
    productNameMobile.className = "text-mobile mobile";

    let divAmobile = document.createElement("div");
    let spanQuantity = document.createElement("span");
    spanQuantity.innerHTML = quantityProduct + " - ";
    let spanName = document.createElement("span");
    spanName.className = "bold";
    spanName.innerHTML = nameProduct;
    let spanPriceUnit = document.createElement("span");
    spanPriceUnit = " - à " + priceUnitProduct + "€";
    divAmobile.appendChild(spanQuantity,spanName,spanPriceUnit);
    //possiblement ligne incorrecte car arguments mal interprété

    let divBMobile = document.createElement("div");
    let spanPriceTotal = document.createElement("span");
    spanPriceTotal.innerHtml = "Total à " + totalPriceProduct;
    divBMobile.appendChild(spanPriceTotal);
    productNameMobile.appendChild(divAmobile,divBMobile);
    //même erreure que ligne 230ish

    let productPriceUnit = document.getElementById("div");
    productPriceUnit.className = "desktop prixUnite";
    productPriceUnit.innerHTML = priceUnitProduct;

    let productQuantity = document.createElement("div");
    productQuantity.className = "desktop quantiteProduit";
    productQuantity.innerHTML = quantityProduct;

    let productTotalPrice = document.createElement("div");
    productTotalPrice.className = "prixTotal bold desktop";
    productTotalPrice.innerHTML = totalPriceProduct;

    product.appendChild(productImage,productNameDesktop,productNameMobile,productPriceUnit,productQuantity,productTotalPrice);
    //possiblement même erreur que ligne 230 et 237
    
}

function unfold(id) {
    console.log(id);
    let depense = document.getElementById("depenseBody"+id);
    if (depense.className == "c-depense-db_body") {
        depense.className = "c-depense-db_body folded";
    } else {
        depense.className = "c-depense-db_body";
    }
}

//[0, "Courses", "07/04/25-16h44", 65.58, 8, "images/pates.jpg"],

function sendHeadValue(id) {
    let nomDepense = dataSetTest[0][id][1];
    let dateShort = getDate(dataSetTest[0][id][2],true);
    let dateLong = getDate(dataSetTest[0][id][2],false);
    let ammount = dataSetTest[0][id][3] + "€";
    let srcImage = dataSetTest[0][id][5];
//function ajouterDepense(parent, id, srcImage, nomDepense, dateShort, dateLong, ammount) {
    let Target = document.getElementById("depenses_container-db");
    ajouterDepense(Target, id, srcImage, nomDepense, dateShort, dateLong, ammount);

}

function getDate(date,short) {
    //(Year Code + Month Code + Century Code + Date Number - Leap Year Code) mod 7
    if (short)
        return date.substring(0, 8);
    const CenturyCode = 6;
    const YY = parseInt(date.substring(6,8));
    const MM = parseInt(date.substring(3,5));
    const DD = parseInt(date.substring(0,2));
    const Time = date.substring(9,14);
    const IndexMonth = ["Décembre","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre"];
    const IndexDay = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];

    let YearCode = Math.floor((YY + (YY/4))%7);
    const indexMonthCode = [0,3,3,6,1,4,6,2,5,0,3,5];
    let MonthCode = indexMonthCode[MM-1];
    let LeapYearCode = isLeap(YY+2000);
    let Day = (YearCode + MonthCode +CenturyCode + DD - LeapYearCode)%7;
    // console.log(YearCode + " " + MonthCode + " " + CenturyCode + " " + DD + " " + " " + LeapYearCode);
    result = IndexDay[Day%7] + " " + DD + " " + IndexMonth[MM%12] + " à " + Time;
    return result;
}


function isLeap(YY) {
    if (YY%400 == 0 || (YY%4==0 && YY%100!=0))
        return (-1);
    return 0;
}
