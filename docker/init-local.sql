DROP DATABASE IF EXISTS hm_test;
CREATE DATABASE IF NOT EXISTS hm_test CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'root';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH
GRANT OPTION;
FLUSH PRIVILEGES;
