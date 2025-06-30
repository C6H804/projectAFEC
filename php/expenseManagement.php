<?php
session_start();
require_once 'fonctions.php';
require_once 'config/settings.php';
if (!isset($_SESSION['id'])) {
    header("Location: connexion.php");
    exit();
}
$db = connexionDB();
require_once 'components/RenderExpense.php';
?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_DIR; ?>theme.css<?php echo '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>">
    <title>Projet AFEC</title>
    <script type="module" src="../assets/scripts/_FonctionCreateElement.js"></script>
</head>

<body>
    <header class="header">
        <div class="container-header container-logo"><img class="logo" src="../images/logo.jpg" alt="logo de l'aplication"
                width="64" height="64"></div>
        <div class="container-header container-photo-profil">
            <img class="photo-profil bouton_user" src="../images/default_user_profile_picture.jpg" alt="photo de profil"
                width="64" height="64">
        </div>
    </header>
    <nav>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
        <h1 class="text-center">Mes dernières dépenses</h1>
        <!-- <span></span> -->
        <hr>
    </nav>
    <main>
        <?php
        echo $_SESSION['id'];
        getExpense($db, $_SESSION['id']);
        ?>
    </main>
    <footer>

    </footer>
</body>
</html>