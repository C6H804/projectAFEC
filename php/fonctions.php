<?php
// fonctions.php

function loadEnv($path)
{
    if (!file_exists($path)) {
        return;
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) {
            continue;
        }
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        if (!array_key_exists($name, $_SERVER) && !array_key_exists($name, $_ENV)) {
            putenv(sprintf('%s=%s', $name, $value));
            $_ENV[$name] = $value;
            $_SERVER[$name] = $value;
        }
    }
}



function connexionDB($local = true)
{

    loadEnv(__DIR__ . '/../.env');
    $env = getenv('APP_ENV') ?: 'local';
    
    if ($env === 'local') {
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
    } else {
        $db = new PDO(
            "mysql:host=blobidesafec.mysql.db;
            dbname=blobidesafec;
            charset=utf8mb4",
            "blobidesafec",
            "Afec2025Dax"
        );
        if ($db) {
            consoleLog('connexion à la base de donnée réussie');
            return $db;
        } else {
            consoleLog('connexion à la base de donnée échouée');
            return null;
        }
    }
}


function consoleLog($message)
{
    echo "<script>console.log('$message');</script>";
}

function connexionAccount($email, $password, $db)
{
    // Requête préparée pour récupérer les données de l'utilisateur
    $stmt = $db->prepare("SELECT * FROM user WHERE mail = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $userData = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    foreach ($userData as $user) {
        if (password_verify($password, $user['mdp'])) {
            consoleLog("mot de passe correct");
            consoleLog("bonjour {$user['prenom']}");
            
            // Mise à jour de la date de dernière connexion
            $updateStmt = $db->prepare("UPDATE user SET dateLastEdit = CURRENT_TIMESTAMP WHERE id = :userId");
            $updateStmt->bindParam(':userId', $user['id']);
            $updateStmt->execute();
            
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
    // Requête préparée pour vérifier si l'email existe déjà
    $stmt = $db->prepare("SELECT id FROM user WHERE mail = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        consoleLog("un compte existe Déjà avec cette adresse email");
        return false;
    }
    
    if ($password === $validPassword && $acceptConditions === "on") {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        consoleLog("mot de passe haché : $hashedPassword");
        
        // Requête préparée pour l'insertion
        $stmt = $db->prepare("INSERT INTO user (mail, mdp, nom, prenom) VALUES (:email, :password, :name, :surname)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $hashedPassword);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':surname', $surname);
        $stmt->execute();
        
        consoleLog("inscription réussie pour $name $surname"); 
        return true; 
    }
    return false;
}


function getProfilePicture($idImageUser, $db)
{
    $stmt = $db->prepare("SELECT chemin FROM userImage WHERE id = :idImageUser");
    $stmt->bindParam(':idImageUser', $idImageUser);
    $stmt->execute();
    
    $imageData = $stmt->fetch(PDO::FETCH_ASSOC);
    return $imageData['chemin'];
}

function addExpense($idUser, $idImageProduct, $name, $price, $quantity, $db)
{
    // Requête préparée avec des paramètres nommés
    $stmt = $db->prepare("INSERT INTO expense (idUser, idImageProduct, nom, quantitee, prix) VALUES (:idUser, :idImageProduct, :name, :quantity, :price)");
    
    // Association des paramètres avec leurs valeurs
    $stmt->bindParam(':idUser', $idUser);
    $stmt->bindParam(':idImageProduct', $idImageProduct);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':price', $price);
    
    // Exécution de la requête préparée
    $stmt->execute();
    
    consoleLog("fin de l'execution de la fonction addExpense");
}

function getTotalExpensePrice($values) {
    $total = 0;
    foreach ($values as $value) {
        if (is_numeric($value)) {
            $total += $value;
        }
    }
    return $total;
}

function addProduct($idExpense, $idImageProduct, $name, $priceUnit, $quantity, $prixTotal, $db)
{
    $stmt = $db->prepare("INSERT INTO product (idDepense, idImageProduct, nom, prixUnite, quantitee, prixTotal) VALUES (:idExpense, :idImageProduct, :name, :priceUnit, :quantity, :prixTotal)");
    
    $stmt->bindParam(':idExpense', $idExpense);
    $stmt->bindParam(':idImageProduct', $idImageProduct);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':priceUnit', $priceUnit);
    $stmt->bindParam(':quantity', $quantity);
    $stmt->bindParam(':prixTotal', $prixTotal);
    
    $stmt->execute();
}

function getExpenseId($id, $db) {
    $stmt = $db->prepare("SELECT id FROM expense WHERE idUser = :idUser ORDER BY id DESC LIMIT 1");
    $stmt->bindParam(':idUser', $id);
    $stmt->execute();
    
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($result) {
        return $result['id'];
    } else {
        consoleLog("Aucune dépense trouvée pour l'utilisateur avec l'ID $id");
        return null;
    }
}

function addProducts($expenseId, $nameProduct, $priceUnit, $quantityProduct, $priceTotal, $db) {
    $stmt = $db->prepare("INSERT INTO product (idDepense, idImageProduct, nom, prixUnite, quantitee, prixTotal) VALUES (:idExpense, :idImageProduct, :name, :priceUnit, :quantity, :priceTotal)");
    
    for ($i = 0; $i < count($nameProduct); $i++) {
        $stmt->bindParam(':idExpense', $expenseId);
        $idImageProduct = 1; // Valeur fixe dans votre code d'origine
        $stmt->bindParam(':idImageProduct', $idImageProduct);
        $stmt->bindParam(':name', $nameProduct[$i]);
        $stmt->bindParam(':priceUnit', $priceUnit[$i]);
        $stmt->bindParam(':quantity', $quantityProduct[$i]);
        $stmt->bindParam(':priceTotal', $priceTotal[$i]);
        
        $stmt->execute();
    }
}


function verifyText($minLength, $maxLength, $text) {
    $text = trim($text);
    if (strlen($text) < $minLength || strlen($text) > $maxLength) {
        return false;
    }
    return true;
}


function verifyNumber($min, $max, $isFloat, $number) {
    $number = trim($number);
    if (is_nan($number) || $number < $min || $number > $max) {
        return false;
    }
    if (!$isFloat && is_float($number)) {
        return false;
    }
    return true;
}