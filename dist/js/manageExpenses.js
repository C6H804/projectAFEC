// expenses is defined in the html file, so we can use it directly here

console.log(expenses);


import { renderExpense } from "../../assets/scripts/_FonctionRenderExpensesC.js";
import { createElement } from "../../assets/scripts/_FonctionCreateElement.js";




init();
function init() {
    let target = createElement("article", { class: "depenses_container-db", id: "depenses_container-db" });

    document.getElementById("main").appendChild(target);
    expenses.forEach((expense) => {
        target.appendChild(renderExpense(expense));
        document.getElementById("fleche" + expense.id).addEventListener("click", handleArrowClick);
        document.getElementById("header" + expense.id).addEventListener("click", function () {
            handleHeaderClick(expense.id);
        });
    });
}

function handleArrowClick(e) {
    if (window.innerWidth < 720) return;
    let fleche = e.target.closest('.fleche') || e.target;
    if (!fleche) return;
    if (fleche.classList.contains("onWait")) return;
    fleche.classList.add("onWait");
    if (fleche.classList.contains("fleche-off")) {
        fleche.classList.remove("fleche-off");
        fleche.classList.add("fleche-on");
        unwrapExpense(fleche.id.replace("fleche", ""));
    } else if (fleche.classList.contains("fleche-on")) {
        fleche.classList.remove("fleche-on");
        fleche.classList.add("fleche-off");
        wrapExpense(fleche.id.replace("fleche", ""));
    } else {
        fleche.classList.add("fleche-off");
        wrapExpense(fleche.id.replace("fleche", ""));
    }
    setTimeout(() => {
        fleche.classList.remove("onWait");
    }, 500);
}

function handleHeaderClick(id) {
    if (window.innerWidth <= 720) {
        let fleche = document.getElementById("fleche" + id)
        if (!fleche) return;
        if (fleche.classList.contains("onWait")) return;
        fleche.classList.add("onWait");

        if (fleche.classList.contains("fleche-off")) {
            fleche.classList.remove("fleche-off");
            fleche.classList.add("fleche-on");
            unwrapExpense(fleche.id.replace("fleche", ""));
        } else if (fleche.classList.contains("fleche-on")) {
            fleche.classList.remove("fleche-on");
            fleche.classList.add("fleche-off");
            wrapExpense(fleche.id.replace("fleche", ""));
        } else {
            fleche.classList.add("fleche-off");
            wrapExpense(fleche.id.replace("fleche", ""));
        }

        setTimeout(() => {
            fleche.classList.remove("onWait");
        }, 500);
    }
}



function unwrapExpense(id) {
    console.log(id);
    expenses.forEach((expense) => {
        if (expense.id == id) {
            let PBody = createElement("div", { class: "c-depense-db_body", id: "body" + id });
            let parent = document.getElementById("depense" + id);
            const entete = createElement("div", { class: "c-depense-db_body_top" });
            entete.innerHTML = `
<div class="nbrProduitsTete bold underline">${expense.quantity} produits</div>
<div class="nomProduitTete italic desktop">Nom du produit</div>
<div class="prixProduitUnitTete italic desktop">Prix du produit</div>
<div class="quantiteProduitTete italic desktop">Quantité</div>
<div class="prixTotalTete italic desktop">Prix total</div>
            `;
            PBody.appendChild(entete);
            parent.appendChild(PBody);
            let middle = createElement("div", { class: "c-depense-db_body_middle", id: "middle" + id });
            expense.products.forEach((product) => {
                addProduct(product, middle);
            });
        }
    });
}

function wrapExpense(id) {
    document.getElementById("body" + id).remove();
    console.log(id);
}


function addProduct(p, target) {
    let product = createElement("div", { class: "produit"});

    let image = createElement("img", { class: "imageProduit", src: p.imagePath});
    let textMobile = createElement("div", { class: "text-mobile mobile"});
    textMobile.innerHTML = `<div><span>${quantity} - </span><span class="bold">${p.name}</span><span> - à ${p.prixUnite}€</span></div><div><span class="bold">Total à ${prixTotal}€</span></div>`
    let nameProduct = createElement("div", {class: "desktop nomProduit bold", inneHTML: p.name});
    // namepoduct.innerHTML = p.name;
    let prixUnite = createElement("div", { class: "desktop prixProduitUnit", innerHTML: p.prixUnite.toFixed(2) + " €"});
    // prixUnite.innerHTML = p.prixUnite.toFixed(2) + " €";
    let quantity = createElement("div", { class: "desktop quantiteProduit", innerHTML: p.quantity});
    // quantity.innerHTML = p.quantity;
    let prixTotal = createElement("div", { class: "desktop prixTotal", innerHTML: p.prixTotal.toFixed(2) + " €"});    
    // prixTotal.innerHTML = p.prixTotal.toFixed(2) + " €";

    product.appendChild(image);
    product.appendChild(textMobile);
    product.appendChild(nameProduct);
    product.appendChild(prixUnite);
    product.appendChild(quantity);
    product.appendChild(prixTotal);
    target.appendChild(product);
}



/*
let expenses = [
        {
            id: 5,
            name: 'lave auto',
            date: '2025-07-02 12:25:52',
            totalPrice: 4.50,
            quantity: 2,
            imagePath: '../images/productImage/pates.jpg',
            products: [
                {
                    id: 20,
                    name: 'lave auto',
                    prixUnite: 3.00,
                    quantity: 1,
                    prixTotal: 3.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 21,
                    name: 'pression des pneux',
                    prixUnite: 1.50,
                    quantity: 1,
                    prixTotal: 1.50,
                    imagePath: '../images/productImage/pates.jpg'
                }]
        },
        {
            id: 4,
            name: 'boulangerie',
            date: '2025-07-02 12:21:34',
            totalPrice: 10.60,
            quantity: 3,
            imagePath: '../images/productImage/pates.jpg',
            products: [
                {
                    id: 17,
                    name: 'baguette',
                    prixUnite: 1.30,
                    quantity: 2,
                    prixTotal: 2.60,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 18,
                    name: 'croissants',
                    prixUnite: 2.00,
                    quantity: 1,
                    prixTotal: 2.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 19,
                    name: 'meringue',
                    prixUnite: 3.00,
                    quantity: 2,
                    prixTotal: 6.00,
                    imagePath: '../images/productImage/pates.jpg'
                }]
        },
        {
            id: 3,
            name: 'salaire',
            date: '2025-07-01 12:25:40',
            totalPrice: 9400.00,
            quantity: 5,
            imagePath: '../images/productImage/pates.jpg',
            products: [
                {
                    id: 12,
                    name: 'jean',
                    prixUnite: 1500.00,
                    quantity: 1,
                    prixTotal: 1500.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 13,
                    name: 'patrick',
                    prixUnite: 2300.00,
                    quantity: 1,
                    prixTotal: 2300.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 14,
                    name: 'stéphane',
                    prixUnite: 1700.00,
                    quantity: 1,
                    prixTotal: 1700.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 15,
                    name: 'Janine',
                    prixUnite: 1800.00,
                    quantity: 1,
                    prixTotal: 1800.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 16,
                    name: 'fabrice',
                    prixUnite: 2100.00,
                    quantity: 1,
                    prixTotal: 2100.00,
                    imagePath: '../images/productImage/pates.jpg'
                }]
        },
        {
            id: 2,
            name: 'essence',
            date: '2025-07-01 12:21:11',
            totalPrice: 58.00,
            quantity: 1,
            imagePath: '../images/productImage/pates.jpg',
            products: [
                {
                    id: 11,
                    name: 'sans plomb 95',
                    prixUnite: 58.00,
                    quantity: 1,
                    prixTotal: 58.00,
                    imagePath: '../images/productImage/pates.jpg'
                }]
        },
        {
            id: 1,
            name: 'courses',
            date: '2025-07-01 11:01:50',
            totalPrice: 92.45,
            quantity: 10,
            imagePath: '../images/productImage/pates.jpg',
            products: [
                {
                    id: 1,
                    name: 'sachet de pates',
                    prixUnite: 2.60,
                    quantity: 2,
                    prixTotal: 5.20,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 2,
                    name: 'sachet de riz',
                    prixUnite: 5.85,
                    quantity: 1,
                    prixTotal: 5.85,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 3,
                    name: 'bouteille d\'eau',
                    prixUnite: 0.50,
                    quantity: 6,
                    prixTotal: 3.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 4,
                    name: 'sandwich',
                    prixUnite: 6.20,
                    quantity: 2,
                    prixTotal: 12.40,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 5,
                    name: 'steak',
                    prixUnite: 7.00,
                    quantity: 2,
                    prixTotal: 14.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 6,
                    name: 'saucisses',
                    prixUnite: 3.50,
                    quantity: 4,
                    prixTotal: 14.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 7,
                    name: 'épices',
                    prixUnite: 1.50,
                    quantity: 2,
                    prixTotal: 3.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 8,
                    name: 'soda',
                    prixUnite: 3.00,
                    quantity: 2,
                    prixTotal: 6.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 9,
                    name: 'paté pour chat',
                    prixUnite: 17.00,
                    quantity: 1,
                    prixTotal: 17.00,
                    imagePath: '../images/productImage/pates.jpg'
                },
                {
                    id: 10,
                    name: 'conserves',
                    prixUnite: 3.00,
                    quantity: 4,
                    prixTotal: 12.00,
                    imagePath: '../images/productImage/pates.jpg'
                }]
        }];
        
        */