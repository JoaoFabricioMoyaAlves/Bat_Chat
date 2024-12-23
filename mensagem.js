
var id = sessionStorage.getItem("id");
var nomeU = sessionStorage.getItem("nomeU");


if (id == null) {
    alert('Id não encontrado, faça o login novamente!!');
    window.location.href = "chat.php";
} 



$('#Msg_Buffer').submit(function(e){
    e.preventDefault();

     var mensagem = $('#mensagem').val();

     $.ajax({
        url:'envia_mensagem.php',
        method:'POST',
        data: {msg: mensagem, idu: id, nome: nomeU},
        dataType: 'json'
     }).done(function(resultado){
          console.log(resultado);
          pegaComentarios();

          setTimeout(function(){
            $('.mensagens').scrollTop($('.mensagens')[0].scrollHeight);
          }, 50);
         

          
     }).fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Erro na requisição Ajax:", textStatus, errorThrown);
        console.error("Resposta do servidor:", jqXHR.responseText);
    });
});


function pegaComentarios(){


    $.ajax({
        url:'carregar_mensagens.php',
        method:'GET',
        dataType: 'json'
     }).done(function(resultado){
          console.log(resultado);
          $('.mensagens').empty();

          if(resultado == 'Nenhum comentário encontrado'){
            $('.mensagens').append('<div class="mensagem_outro"> <li class="mensagem_nome_outro">ADM </li><li class="mensagem_texto_outro">Não tem nenhuma mensagem ainda...</li><li class="mensagem_data_outro">00/00/00 00:00</li> </div>');
          
          }else{
          
          for(i=0;i<resultado.length;i++){

             
        if(resultado[i].idU == id){
     
            $('.mensagens').append('<div class="mensagem_sua"> <li class="mensagem_nome_sua">'+resultado[i].nomeU+'</li> <li class="mensagem_texto_sua">'+resultado[i].mensagem+'</li><li class="mensagem_data_sua">'+resultado[i].dataM+'</li></div>');
           

        }else{

        

          $('.mensagens').append('<div class="mensagem_outro"> <li class="mensagem_nome_outro">'+resultado[i].nomeU+' </li><li class="mensagem_texto_outro">'+resultado[i].mensagem+'</li><li class="mensagem_data_outro">'+resultado[i].dataM+'</li> </div>');
                
          }

            }
           
}

    }).fail(function (jqXHR, textStatus, errorThrown) {
        $('.mensagens').append('<div class="mensagem_sua"> <li class="mensagem_nome_sua">ADM</li> <li class="mensagem_texto_sua">Tem algo errado ai...</li><li class="mensagem_data_sua">00/00/00 00:00</li></div>');
           
    });

};

let msgs = 0;

function leitura() {
    $.ajax({
        url: 'carregar_mensagens.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(resultado) {
        console.log(resultado);

        
        if (resultado.length > msgs) {
            msgs = resultado.length; 
            $('.mensagens').empty();

           
            pegaComentarios();

            setTimeout(function() {
                $('.mensagens').scrollTop($('.mensagens')[0].scrollHeight);
            }, 50);
        }
    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Erro na requisição Ajax:", textStatus, errorThrown);
        console.error("Resposta do servidor:", jqXHR.responseText);
    }).always(function() {
        
        setTimeout(leitura, 1500);
    });
}

leitura();



