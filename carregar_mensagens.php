

<?php
include 'conexao.php';

header('Content-Type: application/json');


$sql = $pdo->prepare("SELECT * FROM mensagens");

$sql->execute();


if ($sql->rowCount() >= 1) {
    echo json_encode($sql->fetchAll(PDO::FETCH_ASSOC));
} else {
    echo json_encode('Nenhum comentário encontrado');
}
?>



