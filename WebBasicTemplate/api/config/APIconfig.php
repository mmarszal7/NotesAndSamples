<?php
    session_start();
    require_once 'DB.php';
	
	$dbServer = 'localhost';
	$dbLogin = 'root';
	$dbHaslo = '';
	$dbBaza = 'test';
    
    DB::connect($dbServer, $dbLogin, $dbHaslo, $dbBaza);
    DB::getConnection() -> query ('SET NAMES utf8');
    DB::getConnection() -> query ('SET CHARACTER_SET utf8_unicode_ci');
?>