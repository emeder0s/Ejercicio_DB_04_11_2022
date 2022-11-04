#DROP DATABASE ejercicio3DB;
CREATE DATABASE ejercicio3DB;
USE ejercicio3DB;

#DROP TABLE usuarios;
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT,
    username VARCHAR(50),
    passwrd VARCHAR(15),
    PRIMARY KEY (id)
);

DELIMITER //
CREATE PROCEDURE registro(IN username VARCHAR(50), IN passwrd VARCHAR(15))
BEGIN
  INSERT INTO usuarios VALUES (NULL, username, passwrd);
END;
//
DELIMITER ;

CALL registro('davinia@thebridgeschool.es', 'root');
SELECT * FROM usuarios;
