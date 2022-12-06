document.addEventListener('DOMContentLoaded', function (event) {

    caixa1 = document.querySelectorAll('.caixa1')
    
    i = 0
    enviar.addEventListener('click', function(event) {
        if (i == 0){
            caixa1.innerHTML = "✅"
            i = 1
        }
        if ( i == 1){
            caixa1.innerHTML = "🔲"
            i = 0
        }
        

  
    })




})