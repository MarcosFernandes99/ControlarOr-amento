let nomeProjeto
let orcamento = 0
let valor = 0
let tipoDespesa

CriarProjeto()

valor = parseFloat(prompt(`Qual o valor?`))
tipoDespesa = prompt(`Qual o tipo de despesa? R - Receita/ D - Despesa`)

CalcularCusto(nomeProjeto, valor, tipoDespesa)


function CriarProjeto(){
    nomeProjeto = prompt(`Qual o nome do projeto`)
    orcamento = parseFloat(prompt(`Qual o orçamento`))
}

function CalcularCusto(nomeParametro, valorParametro, despesaParametro){
    if(despesaParametro == "D"){
       if(valorParametro > orcamento){
            console.log(`Valor inserido - R$${valorParametro}`)
            console.log(`Valor superior ao orçamento!`)
       }
       else{
        orcamento = orcamento - valorParametro
       }
    }
    else if(despesaParametro == "R"){
        orcamento = orcamento + valorParametro
    }

    console.log(`Nome do projeto: ${nomeParametro}, Orçamento Atual: R$${orcamento}`)
    
}