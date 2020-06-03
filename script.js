function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var uano = window.document.getElementById('iNNSC')
    var res = window.document.getElementById('foto')
    if(uano.value.length == 0 || uano.value >= ano){
        window.alert('Verifique os dados novamente!')
    }else{
        var fsex = document.getElementsByName('nRDB')
        var idade = ano - Number(uano.value)
        var tt = document.createElement('img')
        tt.setAttribute('id','fott')
        var genero = 'pessoa'
        if(fsex[0].checked){
            genero = 'Homen'
           if(idade >= 0 && idade <= 10){
                tt.setAttribute('src','imagens/menino.jpg')
                genero = 'menino'
           }else if(idade <= 18) {
                tt.setAttribute('src','imagens/jovemh.jpg')
           }else if (idade <=59){
                tt.setAttribute('src','imagens/homen.jpg')
           }else if(idade > 59){
               tt.setAttribute('src','imagens/idoso.jpg')
               genero = 'idoso'
           }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                tt.setAttribute('src','imagens/menina.jpg')
                genero = 'menina'
           }else if(idade <= 18) {
                tt.setAttribute('src','imagens/jovemf.jpg')
           }else if (idade <=59){
                tt.setAttribute('src','imagens/mulher.jpg')
           }else if(idade > 59){
               tt.setAttribute('src','imagens/idosa.jpg')
               genero = 'idosa'
           }
        }
        res.innerHTML = `Detectamos um ${genero} com idade de ${idade} anos`
        res.appendChild(tt)
    }
    
}