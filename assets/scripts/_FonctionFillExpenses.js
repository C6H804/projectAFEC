export function FillExpense(id, name, date, totalPrice, quantity, imagePath, products) {
    let newExpense = [
        {id: id, name: name, date: date, totalPrice: totalPrice, quantity: quantity, imagePath: imagePath, products: 
            [
                products.map(product => ({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: product.quantity,
                    totalPrice: product.totalPrice,
                    imagePath: product.imagePath
                }))
            ]
        }
    ];
    expenses.push(newExpense);
}

