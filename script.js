
'use strict'
const pesquisaCPF = async ()=> {

msg.ajax({
    url: `https://searchlock.me/api/v1/SEARCHLOCK/cpf/09665678469/`,
    type: "GET",
    
    beforeSend: function (xhr) {
      $("deu certo").html(msg);
      xhr.setRequestHeader('Authorization', 'Bearer APP_3b69d078903e239ee5679e34cb6135a1');
      
  },
  })
  .done(function(msg) {
    $("deu certo").html(msg);
    console.log(msg);
  })
  .fail(function(jqXHR, textStatus, msg) {
    alert('Falhou!');
  });

}



