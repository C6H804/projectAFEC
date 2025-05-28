<?php
session_start();
var_dump($_SESSION);
echo "<br>";

require_once 'fonctions.php';
require_once 'config/settings.php';

$db = connexionDB();
$profilePicture = isset($_SESSION['idImageUser']) ? getProfilePicture($_SESSION['idImageUser'], $db) : "images/profileImage/default.jpg";


if (isset($_POST)) {
    consoleLog("POST request received");


    if (verifyEmpty($_POST["nameExpense"])) {
        consoleLog("Le nom de la dépense est vide");
    } else {
        consoleLog("Le nom de la dépense est : " . $_POST["nameExpense"]);
    }
    
    
    var_dump($_POST);
    echo "<br>";
    var_dump($_POST["nameProduct"]);
    foreach($_POST["nameProduct"] as $key => $value) {
        echo "Product Name: " . htmlspecialchars($value) . "<br>";
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
    <script src="<?= JS_DIR; ?>ajoutDepense.js"></script>
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
                <div class="nameAddExpense"><input type="text" name="nameExpense" value="Nom de la dépense"></div>
                <!-- <div class="c-addExpense-product">
                    <div class="c-addExpense-product-image"><img src="../images/pates.jpg" width="64" height="64" alt=""></div>
                
                    <div class="c-addExpense-product-inputArea">
                        <div class="c-addExpense-product-inputArea-Name"><input type="text" id="inputName0" name="nameProduct[]" placeholder="Nom du produit" class="addExpenseDiv expenseProductNameInput"></div>
                        <div class="inputAreaPrice"><label for="expenseProductPriceUnitInput" class="desktop">Prix : </label><input type="number" id="inputPrice0" name="priceUnit[]" placeholder="Prix du produit" class="addExpenseDiv expenseProductPriceUnitInput"></div>
                        <div class="inputAreaAmmount"><label for="expenseProductAmmountInput" class="desktop">Quantité : </label><input type="number" id="inputAmmount0" name="quantityProduct[]" placeholder="Quantité" class="addExpenseDiv expenseProductAmmountInput"></div>
                        <div class="expenseProductTextValid bold"><label class="bold" for="inputTotalPrice0"># 1/1 Prix total du produit : </label><input type="number" value="0.00" name="priceTotal[]" id="inputTotalPrice0" class="bold InputPrixTotalProduct">€</div>
                    </div>

                    <div class="c-addExpense-product-trashArea"><svg onclick="init();" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="red" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg></div>
                </div> -->

                <div class="c-addExpense-footer">
                    <p class="bold renderTotalExpense" id="totalExpense">Total =<input class="inputTotalExpense bold" id="totalPriceExpense" type="number" value="0.00"></input>€</p>
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