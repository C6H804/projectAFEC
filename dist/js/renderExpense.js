let expenses = [
    {
        id:1,
        name: "expense1",
        date: "2023-10-01",
        totalPrice: 100,
        quantity: 2,
        imagePath: "images/pates.jpg",
        products: [
            {
                id: 1,
                name: "product1",
                prixUnite: 50,
                quantitee: 1,
                prixTotal: 50,
                imagePath: "images/pates.jpg",
            }
        ]
    }
];


function renderExpense(expenses) {
    let target = document.getElementById("body");
    expenses.forEach(e => {
        let expense = CreateElement("div");
        expense.className = "expense";
        expense.id = "expense" + e.id;
        expense.innerText = `$e.name - $e.date - $e.totalPrice - $e.quantity, $e.imagePath`;
        target.appendChild(expense);
        renderExpense(e.products, target);
    });
}

function renderProduct(products, target) {
    products.forEach(p => {
        let product = CreateElement("div");
        product.className = "product";
        product.id = "product"+ p.id;
        product.innerText = `$p.name - $p.prixUnite - $p.quantitee - $p.prixTotal - $p.imagePath`;
        target.appendChild(product);
    });
}