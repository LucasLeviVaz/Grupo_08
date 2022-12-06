document.addEventListener('DOMContentLoaded', function (event) {

    const caixas = document.querySelectorAll('.caixa1')
    
    caixas.forEach(caixa1 => {
        a = 0
        caixa1.addEventListener('click', function(event) {
            if (a == 0){
                caixa1.innerHTML = "✅"
                a = 1
            }
            else{
                caixa1.innerHTML = "🔲"
                a = 0
            }
            console.log('fifiwf')

    
        })
    })


    const certinhos = document.querySelectorAll('.certinho')
    
    certinhos.forEach(certinho => {
        b = 0
        certinho.addEventListener('click', function(event) {
            if (b == 0){
                certinho.innerHTML = "✅"
                b = 1
            }
            else{
                certinho.innerHTML = "🔲"
                b = 0
            }
            console.log('fifiwf')

    
        })
    })
})