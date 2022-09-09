let projetos = []
let orcamento = []
let nomeProjeto
let valor = 0
let tipoDespesa
let contador = 0

let continuar = 1
while(continuar == 1){
CriarProjeto()
}

nomeProjeto = prompt(`Qual projeto deseja buscar?`)
valor = parseInt(prompt(`Qual o valor?`))
tipoDespesa = prompt(`Qual o tipo de despesa? R - Receita/ D - Despesa`)
CalcularCusto(nomeProjeto, valor, tipoDespesa)





function CriarProjeto(){
    projetos[contador] = prompt(`Qual o nome do projeto?`)
    orcamento[contador] = parseInt(prompt(`Qual o orçamento`))
    contador++
    console.log(projetos)
    console.log(orcamento)

    continuar = prompt(`Deseja cadastrar outro projeto? 1-SIM/2-NÃO`)
    return continuar
}

function CalcularCusto(nomeParametro, valorParametro, despesaParametro){
    for(let i = 0; i < contador; i++){
        if(nomeParametro == projetos[i]){
            if(despesaParametro == "D"){
                if(valorParametro > orcamento[i]){
                     console.log(`Valor inserido - R$${valorParametro}`)
                     console.log(`Valor superior ao orçamento!`)
                }
                else{
                 orcamento[i] = orcamento[i] - valorParametro
                 console.log(`Nome do projeto: ${nomeParametro}, Orçamento Atual: R$${orcamento}`)
                }
             }
             else if(despesaParametro == "R"){
                 orcamento[i] = orcamento[i] + valorParametro
                 console.log(`Nome do projeto: ${nomeParametro}, Orçamento Atual: R$${orcamento}`)
             }
         }         
    }  
}