<?php
// db.php

function getPdoFromSettings(array $config): PDO {
    $db = $config['db'];
    $dsn = "mysql:host={$db['host']};dbname={$db['dbname']};charset={$db['charset']}";

    try {
        return new PDO($dsn, $db['user'], $db['password'], [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        ]);
    } catch (PDOException $e) {
        die("Erreur de connexion : " . $e->getMessage());
    }
}




// Chargement de la configuration
$config = include 'settings.php';
// die(__DIR__);

// Connexion BDD
$pdo = getPdoFromSettings($config);

// supprimer puis créer la table donnees
// puis ajouter les données dans la table
$pdo->exec("DROP TABLE IF EXISTS donnees");

$pdo->exec("CREATE TABLE donnees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    value TEXT NOT NULL,
    date DATE NOT NULL)");

$pdo->exec("INSERT INTO donnees (value, date) VALUES
    ('test1', '2023-10-01'),
    ('test2', '2023-10-02'),
    ('test3', '2023-10-03')");

$tailleTab = $pdo->query("SELECT COUNT(*) FROM donnees")->fetchColumn();



// $stmt = $this->pdo->prepare("SELECT FAQ_ID, QUESTION, ANSWER FROM races_faq WHERE ID_RACE = ?");
//         $stmt->execute([$raceId]);
//         $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

