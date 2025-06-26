<?php


function getExpense($db, $iduser) {
    $query = "SELECT * FROM expense WHERE idUser = :iduser ORDER BY date DESC";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    renderExpense($result, $db);
}

function renderExpense($expenses, $db) {
    foreach($expenses as $expense) {
        $imagePath = getImagePath($db, $expense['idImageProduct']);
        echo `<script>
        let newExpense = [$expense['id'], "$expense['nom']", "$expense['date']", "$expense['prixTotal']", $expense['quantitee'], "$imagePath"]
        </script>`
    }
}

function getProduct($db, $expenseId) {
    $query = "SELECT product.* FROM product, expense WHERE product.idDepense = expense.id AND product.idDepense = :expenseId";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':expenseId', $expenseId, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function renderProduct($products) {
echo "aaa";
}

function getImagePath($db, $path) {
    $query = "SELECT chemin FROM product.image WHERE id = :id";
    $stmt = $db->prepare($query);
    $stmt->bindParam(':id', $path, PDO::PARAM_INT);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result ? $result['chemin'] : null;
}
