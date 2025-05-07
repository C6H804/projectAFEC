import { createElement } from "../../assets/scripts/_FonctionCreateElement.js";

// expressJs

let dataSetTest = [
    [
        [0, "Courses", "07/04/25-16h44", 65.58, 8, "images/pates.jpg"],
        [1, "Essence", "21/05/25-10h30", 50.00, 1, "images/pates.jpg"],
        [2, "Restaurant", "15/06/25-20h15", 120.00, 2, "images/pates.jpg"],
        [3, "Cinéma", "18/07/25-21h00", 15.00, 1, "images/pates.jpg"],
        [4, "Courses", "20/08/25-18h00", 30.00, 1, "images/pates.jpg"],
        [5, "Essence", "22/09/25-09h00", 40.00, 1, "images/pates.jpg"],
        [6, "Restaurant", "10/10/25-12h30", 60.00, 2, "images/pates.jpg"],
        [7, "Cinéma", "12/11/25-19h45", 20.00, 1, "images/pates.jpg"]
    ],
    [
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
        ],
        [
            [0, "Pâtes", 1.50, 2, 3.00, "images/pates.jpg"],
            [1, "Lait", 0.80, 1, 0.80, "images/pates.jpg"],
            [2, "Pain", 1.20, 1, 1.20, "images/pates.jpg"],
            [3, "Viande", 5.00, 1, 5.00, "images/pates.jpg"],
            [4, "Fruits", 2.00, 3, 6.00, "images/pates.jpg"],
            [5, "Légumes", 1.50, 2, 3.00, "images/pates.jpg"],
            [6, "Boissons", 1.00, 4, 4.00, "images/pates.jpg"],
            [7, "Produits d'entretien", 3.00, 1, 3.00, "images/pates.jpg"],
            [8, "riz", 1.50, 2, 3.00, "images/pates.jpg"],
            [9, "poulet", 5.00, 1, 5.00, "images/pates.jpg"],
            [10, "poisson", 4.00, 1, 4.00, "images/pates.jpg"],
            [11, "boisson", 2.00, 3, 6.00, "images/pates.jpg"],
            [12, "produit d'entretien", 3.00, 1, 3.00, "images/pates.jpg"],
            [13, "chocolat", 2.00, 1, 2.00, "images/pates.jpg"],
            [14, "bonbon", 1.00, 1, 1.00, "images/pates.jpg"],
            [15, "gateau", 3.00, 1, 3.00, "images/pates.jpg"],
            [16, "glace", 2.50, 1, 2.50, "images/pates.jpg"],
            [17, "soda", 1.50, 1, 1.50, "images/pates.jpg"],
            [18, "chips", 2.00, 1, 2.00, "images/pates.jpg"],
            [19, "biscuits", 1.50, 1, 1.50, "images/pates.jpg"],
            [20, "céréales", 3.00, 1, 3.00, "images/pates.jpg"],
            [21, "yaourt", 0.80, 1, 0.80, "images/pates.jpg"],
            [22, "fromage", 2.50, 1, 2.50, "images/pates.jpg"],
            [23, "charcuterie", 4.00, 1, 4.00, "images/pates.jpg"],
            [24, "sauce", 1.50, 1, 1.50, "images/pates.jpg"],
            [25, "épices", 2.00, 1, 2.00, "images/pates.jpg"],
            [26, "vinaigre", 1.00, 1, 1.00, "images/pates.jpg"],
            [27, "huile", 3.00, 1, 3.00, "images/pates.jpg"],
            [28, "sel", 0.50, 1, 0.50, "images/pates.jpg"],
            [29, "poivre", 0.80, 1, 0.80, "images/pates.jpg"],
            [30, "sucre", 1.00, 1, 1.00, "images/pates.jpg"],
            [31, "farine", 1.50, 1, 1.50, "images/pates.jpg"],
            [32, "levure", 0.80, 1, 0.80, "images/pates.jpg"],
            [33, "beurre", 2.00, 1, 2.00, "images/pates.jpg"],
            [34, "crème", 1.50, 1, 1.50, "images/pates.jpg"],
            [35, "lait", 0.80, 1, 0.80, "images/pates.jpg"],
            [36, "oeufs", 2.00, 1, 2.00, "images/pates.jpg"],
            [37, "pain", 1.20, 1, 1.20, "images/pates.jpg"],
            [38, "pâtes", 1.50, 2, 3.00, "images/pates.jpg"],
            [39, "riz", 1.50, 2, 3.00, "images/pates.jpg"],
            [40, "semoule", 1.50, 2, 3.00, "images/pates.jpg"],
            [41, "quinoa", 2.00, 2, 4.00, "images/pates.jpg"],
            [42, "lentilles", 1.50, 2, 3.00, "images/pates.jpg"],
            [43, "haricots", 1.50, 2, 3.00, "images/pates.jpg"],
            [44, "pois chiches", 1.50, 2, 3.00, "images/pates.jpg"],
            [45, "maïs", 1.50, 2, 3.00, "images/pates.jpg"],
            [46, "sauces", 1.50, 2, 3.00, "images/pates.jpg"],
            [47, "épices", 1.50, 2, 3.00, "images/pates.jpg"],
            [48, "vinaigre", 1.50, 2, 3.00, "images/pates.jpg"],
            [49, "huile", 1.50, 2, 3.00, "images/pates.jpg"]
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

function init() {
    console.log("init depense.js");
    // essayer le plus possible d'utiliser des noms de variables, fonctions et autres en anglais exemple : dépense -> expense, produit -> product, etc...
    loadExpense(6, document.getElementById("depenses_container-db"));
}


function loadExpense(ammount, parent) {
    // savoir combient de dépenses à ajouter (paramètre de la fonction)
    // fonction pour ajouter une dépense (source, id de la dépense)
    // si taille tableau de dépense (datasetTest[0]) vaut 0 mettre un texte "Aucune dépense à afficher"
    // faire en sorte la ammount ne dépasse pas la taille du tableau de dépense (datasetTest[0])

    for (let i = 0; i < Math.min(ammount, dataSetTest[0].length); i++) {
        addExpense(parent, i);
    }
}

function addExpense(parent, id) {
    // fonction récupérer les données de la dépense (id)
    // créer l'élément dépense en utilisant _FonctionCreateElement.js
    // ordre des données : [id, srcImage, nomDepense, dateShort, dateLong, ammount]
    let expenseData = getExpenseValues(id);
    let expense = createElement("div", { class: "c-depense-db", id: "depense" + id });


    let expenseHeader = createElement("div", { class: "c-depense-db_header" });



    let image = createElement("img", { class: "image-depense", src: expenseData[1], alt: "image de la dépense", width: 48, height: 48, });
    let name = createElement("div", { class: "nom-depense bold" });
    name.innerHTML = expenseData[2];
    let dateMobile = createElement("div", { class: "mobile date large-mobile italic" });
    dateMobile.innerHTML = expenseData[3];
    let dateDesktop = createElement("div", { class: "date desktop italic" });
    dateDesktop.innerHTML = expenseData[4];
    let ammount = createElement("div", { class: "ammount-depense bold" });
    ammount.innerHTML = expenseData[5];
    let fleche = createElement("img", { src: "icons/chevron-up.svg", alt: "fleche de déroulement pour voir les détails de la dépense", class: "desktop fleche-depense", width: 48, height: 48, id: "fleche" + id });
    fleche.onclick = function () { unfoldDb(id) };

    expenseHeader.appendChild(image);
    expenseHeader.appendChild(name);
    expenseHeader.appendChild(dateMobile);
    expenseHeader.appendChild(dateDesktop);
    expenseHeader.appendChild(ammount);
    expenseHeader.appendChild(fleche);

    expense.appendChild(expenseHeader);

    parent.appendChild(expense);
}


function getExpenseValues(id) {
    // récupère la valeure de la dépense (id) dans le tableau dataSetTest[0][id]
    // la retourne dans un tableau
    // récupère la date au bon format

    return [dataSetTest[0][id][0],
    dataSetTest[0][id][5],
    dataSetTest[0][id][1],
    getDate(dataSetTest[0][id][2], true),
    getDate(dataSetTest[0][id][2], false),
    dataSetTest[0][id][3] + "€ "];
}


function getDate(date, short) {
    if (short)
        return date.substring(0, 8);
    //(Year Code + Month Code + Century Code + Date Number - Leap Year Code) mod 7
    const CenturyCode = 6;
    const YY = parseInt(date.substring(6, 8));
    const MM = parseInt(date.substring(3, 5));
    const DD = parseInt(date.substring(0, 2));
    const Time = date.substring(9, 14);
    const IndexMonth = ["Décembre", "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre"];
    const IndexDay = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    let YearCode = Math.floor((YY + Math.floor(YY / 4)) % 7);
    const indexMonthCode = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    let MonthCode = indexMonthCode[MM - 1];
    let LeapYearCode = ((YY + 2000) % 400 === 0 || ((YY + 2000) % 4 === 0 && (YY + 2000) % 100 !== 0)) ? 1 : 0;

    let Day = (YearCode + MonthCode + CenturyCode + DD - LeapYearCode) % 7;
    // console.log(YearCode + " " + MonthCode + " " + CenturyCode + " " + DD + " " + " " + LeapYearCode);
    let result = IndexDay[Day % 7] + " " + DD + " " + IndexMonth[MM % 12] + " à " + Time;
    // let result = IndexDay[Day%7];

    return result;
}




function unfoldDb(id) {
    let arrow = document.getElementById("fleche" + id);
    arrow.onclick = function () { useless() };

    // créer squelette 
    parent = document.getElementById("depense" + id);

    parent.className = "c-depense-db";

    let body = createElement("div", { class: "c-depense-db_body", id: "body" + id });
    let top = createElement("div", { class: "c-depense-db_body_top" });
    let middle = createElement("div", { class: "c-depense-db_body_middle" });
    let bottom = createElement("div", { class: "c-depense-db_body_bottom" });

    // récupérer données
    let dataProducts = getProductData(id)

    createHeader(id, dataProducts.length, top);

    body.appendChild(top);

    body.appendChild(middle);
    parent.appendChild(body);
    body.appendChild(bottom);


    dataProducts.forEach((element, index) => {
        setTimeout(() => {
            addProduct(id, element, middle);
           // (-1/2)*x^2 + 50x
        },Math.max(0, (-1/2)*Math.pow(index, 2) + 50*index));
    });

    let trash = createElement("img", { src: "icons/trash-xmark.svg", id: "trashDepense0", alt: "Icone de poubelle", class: "trash", width: 48, height: 48 });
    let labelTrash = createElement("label", { for: "trashdepense0" });
    labelTrash.innerHTML = "Supprimer dépense";
    bottom.appendChild(trash);
    bottom.appendChild(labelTrash);


    arrow.src = "icons/chevron-down.svg";
    arrow.onclick = function () { refoldDb(id) };
}


function addProduct(id, data, target) {
    let produit = createElement("div", { class: "produit" });

    let imageProduct = createElement("img", { src: data[5], class: "imageProduit" });

    let textMobile = createElement("div", { class: "text-mobile mobile" });
    let divA = document.createElement("div");
    let spanA = document.createElement("span");
    spanA.innerHTML = data[3] + " - ";
    let spanB = createElement("span", { class: "bold" });
    spanB.innerHTML = data[1];
    let spanC = document.createElement("span");
    spanC.innerHTML = " - à " + data[2].toFixed(2) + "€";
    divA.appendChild(spanA);
    divA.appendChild(spanB);
    divA.appendChild(spanC);
    let divB = document.createElement("div");
    let spanD = createElement("span", { class: "bold" });
    spanD.innerHTML = "Total à " + data[4].toFixed(2) + "€";
    divB.appendChild(spanD);
    textMobile.appendChild(divA);
    textMobile.appendChild(divB);

    let nomProduitDesktop = createElement("div", { class: "desktop nomProduit bold" });
    nomProduitDesktop.innerHTML = data[1];

    let prixProduitUnit = createElement("div", { class: "desktop prixUnite" });
    prixProduitUnit.innerHTML = data[2].toFixed(2) + "€";

    let quantiteProduit = createElement("div", { class: "desktop quantiteProduit" });
    quantiteProduit.innerHTML = data[3];

    let prixProduitTotal = createElement("div", { class: "desktop bold" });
    prixProduitTotal.innerHTML = data[4].toFixed(2) + "€";

    produit.appendChild(imageProduct);
    produit.appendChild(textMobile);
    produit.appendChild(nomProduitDesktop);
    produit.appendChild(prixProduitUnit);
    produit.appendChild(quantiteProduit);
    produit.appendChild(prixProduitTotal);
    target.appendChild(produit)
}

function createHeader(id, data, target) {
    let quantityProducts = createElement("div", { class: "nbrProduitsTete bold underline" });
    quantityProducts.innerHTML = data + " produits";
    let name = createElement("div", { class: "nomProduitTete italic desktop" });
    name.innerHTML = "Nom du produit";
    let priceProduct = createElement("div", { class: "prixProduitUnitTete italic desktop" });
    priceProduct.innerHTML = "Prix du produit";
    let quantityUnitProduct = createElement("div", { class: "quantiteProduitTete italic desktop" });
    quantityUnitProduct.innerHTML = "Quantité";
    let totalPriceProduct = createElement("div", { class: "prixTotalTete italic desktop" });
    totalPriceProduct.innerHTML = "Prix total";

    target.appendChild(quantityProducts);
    target.appendChild(name);
    target.appendChild(priceProduct);
    target.appendChild(quantityUnitProduct);
    target.appendChild(totalPriceProduct);
}

function getProductData(id) {
    return dataSetTest[1][id];
}

function refoldDb(id) {
    let expense = document.getElementById("depense" + id);

    let arrow = document.getElementById("fleche" + id);
    arrow.onclick = function () { useless() };

    document.getElementById("body" + id).remove();
    arrow.src = "icons/chevron-up.svg";
    arrow.onclick = function () { unfoldDb(id) };
}

function useless() {
    console.log("spam");
}

init();
