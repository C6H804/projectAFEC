<?php
// fonctions.php

function connexionDB()
{
    $db = new PDO(
        'mysql:host=localhost;
    dbname=money;
    charset=utf8mb4',
        'root',
        ''
    );
    if ($db) {
        consoleLog('connexion à la base de donnée réussie');
        return $db;
    } else {
        consoleLog('connexion à la base de donnée échouée');
        return null;
    }
    return null;
}


function consoleLog($message)
{
    echo "<script>console.log('$message');</script>";
}

function connexionAccount($email, $password, $db)
{
    $userData = $db->query("SELECT * FROM user WHERE mail = '$email'")->fetchAll(PDO::FETCH_ASSOC);
    foreach ($userData as $user) {
        if (password_verify($password, $user['mdp'])) {
            consoleLog("mot de passe correct");
            consoleLog("bonjour $user[prenom]");
            // consoleLog($user['id'] . " " . $user['nom'] . " " . $user['prenom'] . " " . $user['mail'] . " " . $user['mdp'] . " " . $user['dateLastConnexion']);
            $db->exec("UPDATE user SET dateLastEdit = CURRENT_TIMESTAMP WHERE id = '$user[id]'");
            return $user;
        } else {
            consoleLog("mot de passe incorrect");
            return false;
        }
    }
    return true;
}

function registerAccount($email, $password, $validPassword, $name, $surname, $acceptConditions, $db)
{
    $newPassword = password_hash($password, PASSWORD_DEFAULT);
    consoleLog("mot de passe haché : $newPassword");
    if ($password === $validPassword) {
        if ($acceptConditions) {
            $db->exec("INSERT INTO user (mail, mdp, nom, prenom, idImageUser) VALUES ('$email', '$newPassword', '$name', '$surname', 1)");
            consoleLog("Compte créé avec succès");
            return true;
        } else {
            consoleLog("Vous devez accepter les conditions d'utilisation");
            return false;
        }
    } else {
        consoleLog("Les mots de passe ne correspondent pas");
        return false;
    }
}


function getProfilePicture($idImageUser, $db)
{
    // imagePath = $db->query("SELECT path FROM image WHERE id = '$idImageUser'")->fetchColumn();
    $imageData = $db->query("SELECT chemin FROM userImage WHERE id = '$idImageUser'")->fetch(PDO::FETCH_ASSOC);
    return $imageData['chemin'];
}

function addExpense($idUser, $idImageProduct, $name, $price, $quantity, $db) {
    $result = "INSERT INTO depense (idUser, idImageProduct, nom, prix, quantite) VALUES ('$idUser', '$idImageProduct', '$name', '$price', '$quantity')";
    
}


function verifyEmpty($array) {
    foreach ($array as $value) {
        if (empty($value)) {
            consoleLog("Un champ est vide");
            return false;
        }
    }
    return true;
}