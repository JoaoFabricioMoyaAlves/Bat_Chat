
$('#Form_Login').submit(function(e){
    e.preventDefault();
    var email_login = $('#Email_Login').val();
    var senha_login = $('#Senha_Login').val();

    //console.log(email_login, senha_login);

    $.ajax({
        url:'login.php',
        method:'POST',
        data:{email: email_login, senha: senha_login},
        dataType: 'json'
    }).done(function(result){
        console.log(result);
        sessionStorage.setItem("id", result[0].id);
        sessionStorage.setItem("nomeU", result[0].nome);

       window.location.href = "chat.php";
    });
    



 });



    
    
    function Alterar_Menu(){
    $('.Msg_Login').css("display","none");
    $('.Msg_Cadastro').css("display","block");
    $(".Menu_Cadastro").css("display","block");
    $(".Menu_Cadastro").css("animation","menus_cadastro 5s");
    $(".Menu_login").css("display","none");
    };

    function Alterar_Menu_Login(){
        $('.Msg_Cadastro').css("display","none");
        $('.Msg_Login').css("display","block");
        $(".Menu_Cadastro").css("display","none");
        $(".Menu_login").css("display","Block");
        $(".Menu_login").css("animation","menus_login 5s");
        
        };

    
        $('#Form_Cadastro').submit(function(e){
            e.preventDefault();
            var nome_cadastro = $('#Nome_Cadastro').val();
            var email_cadastro = $('#Email_Cadastro').val();
            var senha_cadastro = $('#Senha_Cadastro').val();
        
            $.ajax({
                url:'cadastro.php',
                method:'POST',
                data:{nome: nome_cadastro, email: email_cadastro, senha: senha_cadastro},
                dataType: 'json'
            }).done(function(result){
                console.log(result);
                if(result == 'cadastrado com sucesso'){

                alert('Cadastro feito com Sucesso!!!');
            }else if(result == 'Email já existe'){
                alert('Email já existe');
            }else{
                alert('falha ao fazer cadastro!!!');
            }
            });
            
        
        
         });
        