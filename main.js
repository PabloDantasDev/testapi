

const pesquisaCPF = async ()=> {
 
 

   $.ajax({
        url: `https://searchlock.me/api/v1/SEARCHLOCK/cpf/09665678469`,//
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      type: "GET", /* or type:"GET" or type:"PUT" */
      dataType: "json",
      data: {
       },

        beforeSend: function (xhr) {
          
          xhr.setRequestHeader('Authorization', 'Bearer APP_3b69d078903e239ee5679e34cb6135a1',format='jsonp');     
      }, })
      
      .done(function(msg) {
        var msg =JSON.parse(msg)
        console.log(msg);
        preencheformulario(msg);
      })
    }

       const preencheformulario = (msg)=>{

      document.getElementById('cpf').value=msg.msg.cpf;
    }

document.getElementById("#pcpf")==addEventListener('click',pesquisaCPF);
