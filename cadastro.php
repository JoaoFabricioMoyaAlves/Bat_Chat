<?php

include 'conexao.php';


$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$sqlSELECT = $pdo->prepare("SELECT * FROM usuario WHERE email = :email");
$sqlSELECT->execute([':email' => $email]);

if ($sqlSELECT->rowCount() > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Email já existe']);
    exit;
}


$sqlINSERT = $pdo->prepare("INSERT INTO usuario (email, nome, senha) VALUES (:email, :nome, :senha)");
$sqlINSERT->execute([
    ':email' => $email,
    ':nome' => $nome,
    ':senha' => $senha
]);

if ($sqlINSERT->rowCount() == 1) {
    echo json_encode(['status' => 'success', 'message' => 'Cadastrado com sucesso']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Falha ao cadastrar usuário']);
}

?>
