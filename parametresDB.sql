-- création table user
-- contiens les informations sur les utilisateurs
-- id : identifiant unique de l'utilisateur
-- nom : nom de l'utilisateur -- max 50 caractères
-- prenom : prénom de l'utilisateur -- max 50 caractères
-- mail : adresse mail de l'utilisateur -- max 100 caractères
-- mdp : mot de passe de l'utilisateur -- max 255 caractères
-- idImageUser : relie la table user à la table userImage
-- dateInscription : date d'inscription de l'utilisateur -- par défaut la date actuelle
-- dateLastConnexion : date de la dernière connexion de l'utilisateur -- par défaut la date actuelle -- se met à jour automatiquement
-- dateLastEdit : date de la dernière modification de l'utilisateur -- par défaut la date actuelle -- se met à jour automatiquement


CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    mail VARCHAR(100) NOT NULL UNIQUE,
    mdp VARCHAR(255) NOT NULL,
    idImageUser INT,
    FOREIGN KEY (idImageUser) REFERENCES userImage(id) ON DELETE SET NULL ON UPDATE CASCADE,
    dateInscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dateLastConnexion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    dateLastEdit TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



-- table userImage
-- contient une id et un chemin sous forme de texte
-- création de la table userImage

CREATE table IF NOT EXISTS userImage (
    id INT PRIMARY KEY AUTO_INCREMENT,
    chemin VARCHAR(255) NOT NULL
);

INSERT INTO userImage (chemin) VALUES ('images/pofileImage/default.jpg');


-- création productImage
-- contient une id et un chemin sous forme de texte
CREATE TABLE IF NOT EXISTS productImage (
    id INT PRIMARY KEY AUTO_INCREMENT,
    textAlternatif VARCHAR(100),
    chemin VARCHAR(255) NOT NULL
);

INSERT INTO productImage (textAlternatif, chemin) VALUES ('image de sachet de pates', 'images/productImage/pates.jpg');


-- création de la table expense
-- contient id unique, idUser qui relie la table user, idImageProduct qui relie la table productImage, nom, quantite, prix, date
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

-- création de la table product
-- contient id unique, idDepense, idImageProduct qui relie la table productImage, nom, prixUnite, quantite, prixTotal
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
INSERT INTO user (nom, prenom, mail, mdp) VALUES ('nom', 'prenom', 'mail', 'mdp');

