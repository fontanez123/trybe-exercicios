Exercicios do bloco 20.2 - Encontrando dados em um banco de dados

-SELECT
Exercício 1:
SELECT 'jhonatan';
Exercício 2:
SELECT 'amanda', 'santos', 'Belo Horizonte', 19;
Exercício 3:
SELECT 'amanda' AS Nome, 'santos' AS Sobrenome, 'Belo Horizonte' AS 'Cidade Natal', 19 AS Idade;
Exercício 4:
SELECT 13*8;
Exercício 5:
SELECT now() as 'Data Atual';

Exercício usando banco de dados sakila:
Exercício 1:
SELECT * FROM sakila.city;
Exercício 2:
SELECT first_name, last_name FROM sakila.customer;
Exercício 3:
SELECT * FROM sakila.rental;
Exercício 4:
SELECT title, description, release_year FROM sakila.film;
Exercício 5:
SELECT * FROM sakila.nome_da_tabela;

-CONCAT
Exercício 1:
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
Exercício 2:
SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;
Exercício 3:
SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;

-DISTINCT
Exercício 1:
SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;
Exercício 2:
SELECT DISTINCT Nome FROM Escola.Estudantes;
Exercício 3:
SELECT DISTINCT Idade FROM Escola.Estudantes;

-COUNT
Exercício 1:
SELECT COUNT(password) FROM sakila.staff;
Exercício 2:
SELECT COUNT(*) FROM sakila.staff;
Exercício 3:
SELECT COUNT(email) FROM sakila.staff;

Exercicios usando esse banco de dados:
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');

Exercício 1:
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
Exercício 2:
SELECT 1, 2, 3;
Exercício 3:
SELECT 10 + 15;
Exercício 4:
SELECT (3 * 4) + 12;
Exercício 5:
SELECT * FROM Scientists;
Exercício 6:
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
Exercício 7:
SELECT Name FROM Scientists
ORDER BY Name ASC;
Exercício 8:
SELECT Name FROM Projects
ORDER BY Name DESC;
Exercício 9:
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Projects;
Exercício 10:
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC LIMIT 3;
Exercício 11:
SELECT DISTINCT Project FROM AssignedTo;
Exercício 12:
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;
Exercício 13:
SELECT Name FROM Projects
ORDER BY Hours ASC
LIMIT 1
OFFSET 1;
Exercício 14:
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;
Exercício 15:
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;
