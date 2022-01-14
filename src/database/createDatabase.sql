CREATE TABLE plantes
    {
        id int NOT NULL ,
        nom_latin VARCHAR(50),
        nom_fr VARCHAR(50),
        hauteur int,
        nectar int,
        pollen int,
        miellat VARCHAR(50),
        floraison VARCHAR(100),
        emplacement VARCHAR(100),
        photo VARCHAR(100),
        localisation VARCHAR(100),
        PRIMARY KEY (id),
    };

CREATE TABLE qr
    {
        id int NOT NULL,
        id_plante int,
        longitude NUMBER(8,6),
        latitude NUMBER(8,6),
        PRIMARY KEY (id),
        FOREIGN KEY (id_plante) REFERENCES plantes(id)
    }

CREATE TABLE utilisateur
    {
        id int NOT NULL,
        mail VARCHAR(500),
        nom VARCHAR(50),
        mdp VARCHAR(254),
        PRIMARY KEY (id)
    }

CREATE TABLE ruche
    {
        id int NOT NULL,
        nom VARCHAR(50),
        PRIMARY KEY (id)
    }