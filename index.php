<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bat Chat</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
<div class="Menu_Inicial">
    <div class="Menu_login">
     <img src="assets/Logo_Bat_Chat.png" alt="Logo_Bat_Chat" class="Logo_Menu_Login">
       <form class="Form_Login" id = "Form_Login">
           <label for="Email_Login">Email</label>
           <input type="text" name="Email_Login" id="Email_Login">
           <label for="Senha_Login">Senha</label>
           <input type="password" name="Senha_Login" id="Senha_Login">
           <button type="submit" class="btn_Login" id="btn_Login">Entrar</button>
       </form>
    </div>
    <div class="Msg_Cadastro">
        <h2>
            Cadastre-se!!!
        </h2>
        <p> Entre no nosso chat e conheça pessoas incríveis! caso você já seja um participante dessa bolha, <strong onclick="Alterar_Menu_Login()" >Faça seu cadastro aqui.</strong></p>


    </div>
    <div class="Menu_Cadastro">
        <img src="assets/Logo_Bat_Chat.png" alt="Logo_Bat_Chat" class="Logo_Menu_Login">
        <form class="Form_Cadastro" id ="Form_Cadastro">
            <label for="Nome_Cadastro">Nome:</label>
            <input type="text" name="Nome_Cadastro" id="Nome_Cadastro">
            <label for="Email_Cadastro">Email:</label>
            <input type="email" name="Email_Cadastro" id="Email_Cadastro">
            <label for="Senha_Cadastro">Senha:</label>
            <input type="password" name="Senha_Cadastro" id="Senha_Cadastro">
            <button type="submit" class="btn_Cadastro">Cadastrar-se</button>
         
        </form>
    </div>
    <div class="Msg_Login">
        <h2>
            Seja-BEM VINDO.
        </h2>
        <p> Bat chat é um canal de mensagens para comunicação de uma unica bolha. caso ainda não seja um participante dessa bolha <strong onclick="Alterar_Menu()" >Faça seu cadastro aqui.</strong></p>


    </div>
</div>


</body>
<script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
<script src="login.js"></script>

</html>