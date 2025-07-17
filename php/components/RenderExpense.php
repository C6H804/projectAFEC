<?php

function getExpense($db, $iduser) {
    $query = "SELECT * FROM expense WHERE idUser = :iduser ORDER BY date DESC";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    renderExpense($db, $result);
}

function renderExpense($db, $expenses) {
    print "<script>let expenses = [";
    $first = true;
    foreach($expenses as $expense) {
        if (!$first) {
            print ",";
        }
        $first = false;

        $id = $expense['id'];
        $name = addslashes($expense['nom']);
        $date = $expense['date'];
        $totalPrice = $expense['prix'];
        $quantity = $expense['quantitee'];
        $imagePath = getImagePath($db, $expense['idImageProduct']);
        echo "
        {
            id: $id,
            name: '$name',
            date: '$date',
            totalPrice: $totalPrice,
            quantity: $quantity,
            imagePath: '$imagePath',
            products: [";
        $products = getProduct($db, $id);
        $firstProduct = true;
        foreach($products as $p) {
            if (!$firstProduct) {
                print ",";
            }
            $firstProduct = false;
            $pId = $p['id'];
            $pName = addslashes($p['nom']);
            $pPrixUnite = $p['prixUnite'];
            $pQuantity = $p['quantitee'];
            $pPrixTotal = $p['prixTotal'];
            $pImagePath = getImagePath($db, $p['idImageProduct']);

            print "
                {
                    id: $pId,
                    name: '$pName',
                    prixUnite: $pPrixUnite,
                    quantity: $pQuantity,
                    prixTotal: $pPrixTotal,
                    imagePath: '$pImagePath'
                }";
        }
        echo "]
        }";
    }
    print "];";
    echo "</script>";
}

function getProduct($db, $expenseId) {
    $query = "SELECT product.* FROM product, expense WHERE product.idDepense = expense.id AND product.idDepense = :expenseId";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':expenseId', $expenseId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getImagePath($db, $path) {
    $query = "SELECT chemin FROM productImage
     WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $path, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result ? $result['chemin'] : "images/productImage/pates.jpg";
}

