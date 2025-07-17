<?php 
if (!isset($_SESSION['id'])) {
    header("location: connexion.php");
    exit();
}