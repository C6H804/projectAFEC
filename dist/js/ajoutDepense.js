let expense = [
    {}
];

let imageDefault = "../images/pates.jpg";

document.addEventListener("DOMContentLoaded", function () {
    addProduct();

    document.getElementById("btnAddProduct").addEventListener("click", function (event) {
        event.preventDefault();
        addProduct();
    });
});

function valueChange(id, price) {
    let name = document.getElementById("inputName" + id).value;
    let priceUnit = parseFloat(document.getElementById("inputPrice" + id).value);
    let quantity = parseFloat(document.getElementById("inputAmmount" + id).value);
        let totalPrice = parseFloat(document.getElementById("inputTotalPrice" + id).value);
    if (price && !isNaN(priceUnit) && !isNaN(quantity)) {
        document.getElementById("inputTotalPrice" + id).value = (priceUnit * quantity);
        totalPrice = (priceUnit * quantity);
        
    }

    expense[id].name = name;
    expense[id].priceUnit = isNaN(priceUnit) ? 0 : priceUnit;
    expense[id].quantity = isNaN(quantity) ? 0 : quantity;
    expense[id].totalPrice = isNaN(totalPrice) ? 0 : totalPrice;
    

    let totalPriceExpense = 0;
    expense.forEach((e) => {
        totalPriceExpense += e.totalPrice;
    });
    document.getElementById("totalPriceExpense").value = totalPriceExpense;
    console.log("Total Price Expense: " + totalPriceExpense);
    
    
    console.log(expense[id]);
}


function addProduct() {
    let target = document.querySelectorAll(".c-addExpense-form")[0];
    let id = expense[expense.length - 1].id + 1;
    let product = document.createElement("div");
    product.id = "product" + id;
    product.classList.add("c-addExpense-product");
    product.innerHTML = `
        <div class="c-addExpense-product-image"><img src="${imageDefault}" width="64" height="64" alt=""></div>
        <div class="c-addExpense-product-inputArea">
                        <div class="c-addExpense-product-inputArea-Name"><input type="text" onchange="valueChange(${id},false)" id="inputName${id}" name="nameProduct[]" placeholder="Nom du produit" class="addExpenseDiv expenseProductNameInput"></div>
                        <div class="inputAreaPrice"><label for="expenseProductPriceUnitInput" class="desktop">Prix : </label><input type="number" onchange="valueChange(${id},true)" id="inputPrice${id}" name="priceUnit[]" placeholder="Prix du produit" class="addExpenseDiv expenseProductPriceUnitInput"></div>
                        <div class="inputAreaAmmount"><label for="expenseProductAmmountInput" class="desktop">Quantité : </label><input type="number" onchange="valueChange(${id},true)" id="inputAmmount${id}" name="quantityProduct[]" placeholder="Quantité" class="addExpenseDiv expenseProductAmmountInput"></div>
                        <div class="expenseProductTextValid bold"><label class="bold displayQuantityProduct" id="displayQuantityProduct${id}" for="inputTotalPrice0"># 1/1 Prix total du produit : </label><input type="number" onchange="valueChange(${id},false)" value="0.00" name="priceTotal[]" id="inputTotalPrice${id}" class="bold InputPrixTotalProduct">€</div>
        </div>
        <div class="c-addExpense-product-trashArea">
            <svg onclick="removeProduct(${id})" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/></svg>
        </div>
    `;
    // target.appendChild(product);
    // insert just before the last product
    target.insertBefore(product, target.lastElementChild);
    expense.push({
        name: "none",
        priceUnit: 0,
        quantity: 0,
        totalPrice: 0,
        image: imageDefault,
        id: id
    });
    quantityChange()

}

function removeProduct(id) {
    document.getElementById("product" + id).remove();
    quantityChange();
}


function quantityChange() {
    let products = document.querySelectorAll(".displayQuantityProduct");
    let quantityProducts = products.length;
    products.forEach((e, i) => {
        e.innerText = "# " + (i + 1) + "/" + quantityProducts + " Prix total du produit : ";
    });
}
