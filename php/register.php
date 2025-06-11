<?php 
session_start();
require_once "fonctions.php";
require_once "config/settings.php";

// consoleLog(password_hash("motDePasse",PASSWORD_DEFAULT,["cost"=>12]));


// $psw = password_hash("azerty", PASSWORD_DEFAULT);
// $newPassword = "azerty";

// if (password_verify($newPassword, $psw)) {
//     consoleLog("mot de passe correcte");
// } else {
//     consoleLog("mot de passe incorrecte");
// }

// consoleLog("$psw");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    consoleLog("post detected");
    $db = connexionDB(true);
    var_dump($_POST);
    if (registerAccount($_POST["email"], $_POST["password"], $_POST["validPassword"], $_POST["name"], $_POST["surName"], $_POST["acceptConditions"], $db)) {
        consoleLog("inscription réussie");
        // header("Location: index.php");
        // exit();
    } else {
        consoleLog("inscription échouée");
    }    
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= CSS_DIR;?>theme.css<?php echo '?v=' . filemtime(CSS_DIR . 'theme.css'); ?>">
    <title>Projet AFEC</title>
    <script>
        console.log("démarrage de la page");
    </script>
</head>

<body>
    <header class="header">
        <div class="container-header container-logo"><img class="logo" src="images/logo.png" alt="logo de l'aplication"
        width="112" height="64"></div>
        <div class="container-header container-title"><h1 class="title">register</h1></div>
        <div class="container-header container-photo-profil">
            <img class="photo-profil bouton_user" src="images/default_user_profile_picture.jpg" alt="photo de profil"
            width="64" height="64">
        </div>
    </header>
    <main>
        <article class="containerregister">
            <img src="images/default_user_profile_picture" alt="">
            <form action="" method="POST">
                <div class="register-mail">
                    <label for="email">Adresse email</label>
                    <input type="email" name="email" id="email" placeholder="Entrez votre adresse email" required>
                </div>
                <div class="register-password">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required>
                </div>
                <div class="register-validatePassword">
                    <label for="validPassword">Valider mot de passe :</label>
                    <input type="password" name="validPassword" id="validPassword" placeholder="Valider mot de passe" required>
                </div>
                <div class="register-nom">
                    <label for="name">Nom :</label>
                    <input type="input" name="name" id="name" placeholder="Entrez vôtre nom" required>
                </div>
                <div class="register-surName">
                    <label for="surName">Prénom :</label>
                    <input type="input" name="surName" id="surName" placeholder="Entrez vôtre prénom" required>
                </div>
                <div class="register-chekbox">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Se souvenir de moi</label>
                </div>
                <div class="acceptConditions">
                    <input type="checkbox" name="acceptConditions" id="acceptConditions">
                    <label for="acceptConditions">J'accepte les conditions d'utilisation</label>
                </div>
                <div class="register-button">
                    <button type="submit" class="btn">créer mon compte</button>
                    <button class="btn">J'ai déjà un compte</button>
                </div>
            </form>