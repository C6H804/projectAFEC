CREATE table IF NOT EXISTS userImage (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chemin VARCHAR(255) NOT NULL
);
INSERT INTO userImage (chemin) VALUES ('images/pofileImage/default.jpg');

CREATE TABLE IF NOT EXISTS productImage (
    id INT PRIMARY KEY AUTO_INCREMENT,
    textAlternatif VARCHAR(100),
    chemin VARCHAR(255) NOT NULL
);
INSERT INTO productImage (textAlternatif, chemin) VALUES ('image de sachet de pates', 'images/productImage/pates.jpg');


CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    mail VARCHAR(100) NOT NULL UNIQUE,
    mdp VARCHAR(255) NOT NULL,
    idImageUser INT DEFAULT 1,
    FOREIGN KEY (idImageUser) REFERENCES userImage(id) ON DELETE SET NULL ON UPDATE CASCADE,
    dateInscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dateLastConnexion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dateLastEdit TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS expense (
    id INT PRIMARY KEY AUTO_INCREMENT,
    idUser INT,
    idImageProduct INT,
    nom VARCHAR(100) NOT NULL,
    quantitee INT NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUser) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idImageProduct) REFERENCES productImage(id) ON DELETE SET NULL ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    idDepense INT,
    idImageProduct INT,
    nom VARCHAR(100) NOT NULL,
    prixUnite DECIMAL(10, 2) NOT NULL,
    quantitee INT NOT NULL,
    prixTotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (idDepense) REFERENCES expense(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (idImageProduct) REFERENCES productImage(id) ON DELETE SET NULL ON UPDATE CASCADE
);


-- remplissage de la table user
INSERT INTO user (nom, prenom, mail, mdp) VALUES
('Dupont', 'Jean', 'dupontjean@gmail.com', 'azerty'),
('Martin', 'Pierre', 'martinpierre@gmail.com', 'azerty'),
('Durand', 'Paul', 'durandpaul@gmail.com', 'azerty');


-- code pour update dateLastConnexion de user
UPDATE user SET dateLastConnexion = CURRENT_TIMESTAMP WHERE id = 1;
-- code pour update dateLastEdit de user
UPDATE user SET dateLastEdit = CURRENT_TIMESTAMP WHERE id = 1;


-- ajouter un compte à user
INSERT INTO user (nom, prenom, mail, mdp) VALUES ("Dupont", "Jean", "dupontjean@gmail.com", "mdp");



-- récupérer le nom des dépenses ainsi que le chemin de leur productImage

SELECT nom AS "nameExpense",
date AS "dateExpense",
prix AS "priceExpense",
quantitee AS "quantityExpense",
productImage.chemin AS "pathExpense"
FROM expense
JOIN productImage ON expense.idImageProduct = productImage.id
AND expense.idUser = 1
WHERE idUser = 1;

