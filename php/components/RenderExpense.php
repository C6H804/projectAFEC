<?php


function getExpense($db, $iduser) {
    $query = "SELECT * FROM expense WHERE idUser = :iduser ORDER BY date DESC";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    renderExpense($result, $db);
}

function renderExpense($db, $expenses) {
    var_dump($expenses);
    echo "
    <script>
    let expenses = [
    ";
    foreach($expenses as $expense) {
        
        $id = $expense['id'];
        $name = $expense['nom'];
        $date = $expense['date'];
        $totalPrice = $expense['pix'];
        $quantity = $expense['quantitee'];
        $imagePath = getImagePath($db, $expense['idImageProduct']);
        echo "
        {
        id: $id,
        name: '$name',
        dqte. '$date',
        totalPrice: $totalPrice,
        quantity: $quantity,
        imagePath: '$imagePath',
        ";
        // renderProduct($db, $id);
    }
    echo "}];";
    echo "console.log(expenses);";
    echo" </script>";
}


function renderProduct($db, $expenseId) {
    $products = getProduct($db, $expenseId);
    echo "products: [";
    foreach($products as $p) {
        $pId = $p['id'];
        $pName = $p['nom'];
        $pPrixUnite = $p['prixUnite'];
        $pQuantity = $p['quantitee'];
        $pPrixTotal = $p['prixTotal'];
        $pImagePath = getImagePath($db, $p['idImageProduct']);

        echo "
        {
        id: $pId,
        name: '$pName',
        prixUnite: $pPrixUnite,
        quantity: $pQuantity,
        prixTotal: $pPrixTotal,
        imagePath: '$pImagePath'
    },
        ";
    }
    echo "]";
}

function getProduct($db, $expenseId) {
    $query = "SELECT product.* FROM product, expense WHERE product.idDepense = expense.id AND product.idDepense = :expenseId";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':expenseId', $expenseId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getImagePath($db, $path) {
    $query = "SELECT chemin FROM product.image WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $path, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result ? $result['chemin'] : null;
}

