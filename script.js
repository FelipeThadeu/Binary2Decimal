function converter() {
    var bin = document.querySelector('#bin')

    //Verifica que o campo está vazia
    if ( bin.value.length == 0 ) { 
        alert('O campo está vazio, favor preencher!')
    }else if (bin.value.length > 8 ) { //Verifica se ultrapassa 8 caracteres
        alert('Número ultrapassa o valor de 8 dígitos, favor preencher somente com 8 dígitos')
    }else {
        //função responsável por verificar se os números são binários
        function verificaBinario(){
            //Esse for verifica digito por digito se é 0 ou 1
            for (var count = 0; count < bin.value.length; count++){
                let verificador = bin.value.split('')
                if (Number(verificador[count]) == 0 || Number(verificador[count]) == 1){
                    return true
                }else{
                    return false
                    break
                }
            }
        }

        if (verificaBinario() == false){
            alert(`Não é binário`)
        }else{
            let binario = bin.value
            let result = parseInt(binario, 2)
            alert(`O seu número em decimal é: ${result}`)
        }
        
    }
}