<?php

// connexion à la base de données avec pdo sans aller chercher la config

$pdo = new PDO('mysql:host=localhost;dbname=test;charset=utf8mb4', 'root', '');

// vérification de la connexion
if ($pdo) {
    echo "Connexion réussie à la base de données.";
} else {
    echo "Échec de la connexion à la base de données.";
}

$pdo->exec("DROP TABLE IF EXISTS donnees");
$pdo->exec("CREATE TABLE donnees (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    value TEXT NOT NULL,
    date DATE NOT NULL)");
$pdo->exec("INSERT INTO donnees (value, date) VALUES
    ('test1', '2023-10-01'),
    ('test2', '2023-10-02'),
    ('test3', '2023-10-03')");

$result = $pdo->query("SELECT * FROM donnees")->fetchAll(PDO::FETCH_ASSOC);
?>





<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
for ($i = 0; $i < count($result); $i++) {
    echo "<p>" . $result[$i]["ID"] . " --- " . $result[$i]['value'] . " --- " . $result[$i]["date"] . "</p>";
}



?>

</body>
</html>