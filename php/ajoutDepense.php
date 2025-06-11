<?php
session_start();

require_once 'fonctions.php';
require_once 'config/settings.php';

$db = connexionDB();
$profilePicture = isset($_SESSION['idImageUser']) ? getProfilePicture($_SESSION['idImageUser'], $db) : "images/profileImage/default.jpg";


if (isset($_POST)) {
    consoleLog("POST request received");
    if (isset($_POST["id"])
    && isset($_POST["nameExpense"])
    && isset($_POST["nameProduct"])
    && isset($_POST["priceUnit"])
    && isset($_POST["quantityProduct"])
    && isset($_POST["priceTotal"])) {
        consoleLog("All required fields are set");
        addExpense($_SESSION['id'], 1, $_POST["nameExpense"], getTotalExpensePrice($_POST["priceTotal"]), count($_POST["nameProduct"]), $db);
        $expenseId = $db->lastInsertId();
        
        for ($i = 0; $i < count($_POST["nameProduct"]); $i++) {
    // function addProduct($idExpense, $idImageProduct, $name, $priceUnit, $quantity, $prixTotal, $db)
            addExpense($expenseId, 1, $_POST["nameProduct"][$i], $_POST["priceUnit"][$i], $_POST["quantityProduct"][$i], $_POST["priceTotal"][$i], $db);
        }
    } else {
        consoleLog("pas le bon post");
    }
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_DIR; ?>theme.css<?php echo '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>">
    <title>Ajout d'une dépense</title>
    <script src="<?= JS_DIR; ?>ajoutDepense.js<?php echo '?v=' . filemtime(JS_DIR . 'ajoutDepense.js');?>"></script>
</head>

<body>
    <header class="header">
        <div class="container-header container-logo"><img class="logo" src="<?= IMG_DIR; ?>logo.png" alt="logo de l'aplication"
                width="112" height="64"></div>
        </div>
        <div class="container-header container-photo-profil">
            <img class="photo-profil bouton_user" src="../<?php echo $profilePicture; ?>" alt="photo de profil"
                width="64" height="64">
        </div>
    </header>
    <nav>
        <a href="index.html"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
            </svg></a>
        <h1 class="text-center">Ajout d'une dépense</h1>
        <span></span>
    </nav>
    <hr>
    <main>

        <div class="container-addExpense">
            <form action="" method="post" class="c-addExpense-form">
                <div class="nameAddExpense"><input type="text" onfocus="handleFocus()" name="nameExpense" value="Nom de la dépense"></div>
                <div class="c-addExpense-footer">
                    <p class="bold renderTotalExpense" id="totalExpense">Total =<input class="inputTotalExpense bold inputNumber" id="totalPriceExpense" type="number" value="0.00"></input>€</p>
                    <button class="btn" id="btnAddProduct">Ajouter un produit</button>
                    <input type="submit" value="Enregistrer" class="btn btn-blue" id="btnSaveExpense"> 
                </div>
            </form>
        </div>


    </main>
    <footer>
    </footer>
</body>

</html>