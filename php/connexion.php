<?php
session_start();
print_r($_SESSION);

require_once 'fonctions.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    consoleLog("methode post détectée");
    $connexionValid = verificationConnexion();
    if ($connexionValid) {
        // connexion base de données
        $db = connexionDB();
        $connexionUser = connexionAccount($_REQUEST['email'], $_REQUEST['password'], $db);
        if ($connexionUser != false) {
            consoleLog("connexion effectuée, bonjour " . $connexionUser['prenom']);
            $_SESSION['id'] = $connexionUser['id'];
            $_SESSION['nom'] = $connexionUser['nom'];
            $_SESSION['prenom'] = $connexionUser['prenom'];
            $_SESSION['email'] = $connexionUser['mail'];
            $_SESSION['dateLastConnexion'] = $connexionUser['dateLastConnexion'];
            $_SESSION['idImageUser'] = $connexionUser['idImageUser'];
            print_r($_SESSION);
            header("Location: index.php");
            exit();
        } else {
        }
    }
} else {
    consoleLog("connexion échouée");
    session_unset();
    session_destroy();
}

    
function verificationConnexion() {
    if (count($_REQUEST) >=3) {
        if (isset($_REQUEST['email']) && isset($_REQUEST['password']) && isset($_REQUEST['remember'])) {
            $email = $_REQUEST['email'];
            $password = $_REQUEST['password'];
            $remember = $_REQUEST['remember'];
            // print("Email: $email<br>Mot de passe: $password<br>Se souvenir de moi: $remember");
            return true;
        }
    }
    return false;
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/css/theme.css">
    <title>Projet AFEC</title>
    <script>
        console.log("démarrage de la page");
    </script>
</head>

<body>
    <header>
        <div class="container-header container-logo"><img class="logo" src="images/logo.png" alt="logo de l'aplication"
        width="112" height="64"></div>
        <div class="container-header container-title"><h1 class="title">Connexion</h1></div>
        <div class="container-header container-photo-profil">
            <img class="photo-profil bouton_user" src="images/default_user_profile_picture.jpg" alt="photo de profil"
            width="64" height="64">
        </div>
    </header>
    <main>
        <article class="containerConnexion">
            <img src="images/default_user_profile_picture" alt="">
            <form action="" method="POST">
                <div class="connexion-mail">
                    <label for="email">Adresse email</label>
                    <input type="email" name="email" id="email" placeholder="Entrez votre adresse email" required>
                </div>
                <div class="connexion-password">
                    <label for="password">Mot de passe</label>
                    <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe" required>
                </div>
                <div class="connexion-chekbox">
                    <input type="checkbox" name="remember" id="remember">
                    <label for="remember">Se souvenir de moi</label>
                </div>
                <div class="connexion-button">
                    <button type="submit" class="btn">Se connecter</button>
                    <button class="btn">Créer un compte</button>
                </div>
            </form>
<?php 

if (isset($connexionValid)) {
    if ($connexionValid) {
        // print("connexion réussie");
    } else {
        // print("connexion échouée");
    }
} else {
    // print("Aucune tentative de connexion");
}
?>
        </article>
    </main>
    <footer class="footer">
    </footer>

</body>

</html>
