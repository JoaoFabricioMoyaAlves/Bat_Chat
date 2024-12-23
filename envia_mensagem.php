<?php
include 'conexao.php';

header('Content-Type: application/json');


$dataApenas = date('Y-m-d');
$mensagem = $_POST['msg'];
$id = $_POST['idu'];
$nome = $_POST['nome'];


$sql = $pdo->prepare("INSERT INTO mensagens (dataM, idU, nomeU, mensagem) VALUES (:data, :id, :nome, :mensagem)");


$sql->execute([
    ':data' => $dataApenas,
    ':id' => $id,
    ':nome' => $nome,
    ':mensagem' => $mensagem
]);


if ($sql->rowCount() >= 1) {
    echo json_encode(['Mensagem enviada com sucesso']);
} else {
    echo json_encode(['Falha ao enviar a mensagem']);
}
?>
