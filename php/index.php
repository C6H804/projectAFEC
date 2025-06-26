<?php
    session_start();
    require_once 'fonctions.php';
    require_once 'config/settings.php';
    if (!isset($_SESSION['id'])) {
        header("Location: connexion.php");
        exit();
    }
    $db = connexionDB();
    $profilePicture = isset($_SESSION['idImageUser']) ? getProfilePicture($_SESSION['idImageUser'], $db) : "images/profileImage/default.jpg";
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_DIR;?>theme.css<?php echo '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>">
    <title>Projet AFEC</title>
    <script type="module" src="../assets/scripts/_FonctionCreateElement.js"></script>
</head>

<body>
    <header class="header">
        <div class="container-header container-logo"><img class="logo" src="../images/logo.jpg" alt="logo de l'aplication"
                width="64" height="64"></div>
        <button class="btn-header desktop">Ajouter une nouvelle dépense</button>
        <button class="btn-header btn-blue desktop">Gérer mes dépenses</button>
        <div class="container-header container-photo-profil">
            <img class="photo-profil bouton_user" src="../images/default_user_profile_picture.jpg" alt="photo de profil"
                width="64" height="64">
        </div>
    </header>
    <nav>
        <!-- <img src="../icons/arrow-turn-down-left.svg" alt="fleche de retour" width="24" height="24" class="button-back"> -->
        <h1 class="text-center">Mes dernières dépenses</h1>
        <!-- <span></span> -->
        <hr>
    </nav>
    <main>
        <article class="depenses_container-db" id="depenses_container-db">

        </article>
        <div class="container-center"><button class="btn btn-blue mobile"
                onclick="window.location.href='gestionDepenses.html'">Gérer mes dépenses</button></div>
        <article class="charts-container container-center">
            <img src="../images/templateChart.jpg" alt="graphiques de la semaine" class="charts">
        </article>
    </main>
    <footer class="footer">
        <div class="footer__content">
            <button onclick="window.location.href='ajoutDepense.html'" class="btn" id="ajoutDepenseBtnM"><svg src="../icons/plus-svgrepo-com.svg" width="48" height="48"></svg></button>
            <label for="ajoutDepenseBtnM">Ajouter une dépense</label>
        </div>
    </footer>
    <script type="module" src="<?= JS_DIR; ?>fonctionDepense.js <?php '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>"></script>
    <script src="../dist//js/fonctionDepense.js"></script>
</body>

</html>

<!-- 
balise meta description 160characteres max
-->