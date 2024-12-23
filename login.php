<?php

include 'conexao.php';

header('Content-Type: application/json');

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = $pdo->prepare( "SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha'");

$sql->execute();

if($sql->rowCount() >= 1){
    echo json_encode($sql -> fetchAll(PDO::FETCH_ASSOC));
    
 
}else{
    echo json_encode('Falha ao Fazer Login');
}

?>