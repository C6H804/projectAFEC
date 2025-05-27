<?php
session_start();

require_once 'fonctions.php';
require_once 'config/settings.php';
$db = connexionDB();
$profilePicture = isset($_SESSION['idImageUser']) ? getProfilePicture($_SESSION['idImageUser'], $db) : "images\profileImage\default.jpg";
consoleLog("photo de profil : $profilePicture");
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_DIR;?>theme.css<?php echo '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>">
    <title>Ajout d'une dépense</title>
</head>

<body>
    <header class="header">
        <div class="container-header container-logo"><img class="logo" src="<?=IMG_DIR;?>logo.png" alt="logo de l'aplication"
                width="112" height="64"></div>
        </div>
        <div class="container-header container-photo-profil">
            <img class="photo-profil bouton_user" src="../<?php echo $profilePicture;?>" alt="photo de profil"
                width="64" height="64">
        </div>
    </header>
    <nav>
        <a href="index.html"><img src="../icons/arrow-turn-down-left.svg" alt="fleche de retour" width="24" height="24"
                class="button-back"></a>
        <h1 class="text-center">Ajout d'une dépense</h1>
        <span></span>
    </nav>
    <hr>
    <main>

        <div class="container-addExpense">
            <form action="" method="get" class="c-addExpense-form">
                <div class="nameAddExpense"><input type="text" name="nameExpense" value="Nom de la dépense"></div>

                <div class="c-addExpense-product">
                    <div class="c-addExpense-product-image"><img src="../images/pates.jpg" width="64" height="64" alt=""></div>
                    <div class="c-addExpense-product-inputArea">
                        <div class="c-addExpense-product-inputArea-Name"><input type="text" id="inputName0" name="nameProduct[]" placeholder="Nom du produit" class="addExpenseDiv expenseProductNameInput"></div>
                        <div class="inputAreaPrice"><label for="expenseProductPriceUnitInput">Prix : </label><input type="number" id="inputPrice0" name="priceUnit[]" placeholder="Prix du produit" class="addExpenseDiv expenseProductPriceUnitInput"></div>
                        <div class="inputAreaAmmount"><label for="expenseProductAmmountInput">Quantité : </label><input type="number" id="inputAmmount0" name="quantityProduct[]" placeholder="Quantité" class="addExpenseDiv expenseProductAmmountInput"></div>
                        <div class="expenseProductTextValid bold"><label class="bold" for="inputTotalPrice0"># 1/1 Prix total du produit : </label><input type="number" value="0.00" name="priceTotal[]" id="inputTotalPrice0" class="bold InputPrixTotalProduct">€</div>
                    </div>

                    <div class="c-addExpense-product-trashArea"><img src="../icons/trash-xmark.svg" width="52" height="52" alt=""></div>
                </div>

            </form>
        
        </div>


    </main>
    <footer>
    </footer>
</body>

</html>