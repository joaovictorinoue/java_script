console.log("Olá mundo")
console.log(10 * 2)
console.log(30 + 1)
console.log(100 / 2)
console.log(35.7 * 3.8)
console.log(99 + 21 + 125)
console.log(32 - 3 / 4.5)
console.log(4 + 4 + 4 + 4 / 4)
console.log(127.75 + 53.82)
console.log(355 - 22.7)

/* comentário de 
várias linhas */

// comentario de uma linha

/* variáveis */
/* 
- variável é um espaço reservado na memória para armazenar um valor;
- toda variável tem um nome e um tipo;
- a variável deve ter um nome significativo, exemplo:
  - uma variável que vai armazenar o preço de venda de um produto  pode ter o nome PRECOVENDA;
- arecomendação é que o nome da variável seja simples e significativo, sem caracteres especiais, sem acento, sem espaço e lembrando que o javascript diferencia maiúsculas de minuscúlas, isso significa que PrecoVenda é diferente de precovenda */

//var nome
let nome = 'João'
let idade = 18
let nota1 = 9.5
let fumante = false
//nome 

console.log(nome)
console.log(idade, nota1, fumante)
console.log('Sua nota é ' + nota1)

/* Tipos */
console.log(typeof nome) // 'João é string
console.log(typeof idade) //18 é number
console.log(typeof nota1) //9.5 é number
console.log(typeof fumante) // false é boolean

let veiculos = ['carro', 'moto', 'avião']
console.log(veiculos)
console.log(typeof veiculos)

let cliente = {
    nome: 'João',
    idade: 18
}
console.log(cliente)
console.log(typeof cliente)

let salvar = function () {

}
console.log(typeof salvar)

/* operadores relacionais */
console.log(10 > 3) //maior
console.log(5 < 3) // menor
console.log(15 >= 10) // maior ou igual
console.log(15 <= 10) // menor ou igual
console.log(10 == 10) // igual
console.log(10 != 10) // diferente

/* operadores logicos */
console.log('============')
console.log(10 > 3 && 10 > 15) // Operador E (AND) - com operador E todas as expressões devem ser verdadeiras para o resultado ser verdadeiro

console.log(10 > 3 || 10 > 15 || 10 > 8) // Operador OU (OR) - com o operador OU apenas uma expressão precisa ser verdadeira para o resultado ser verdadeiro

console.log(!10 > 3) // Operador NÃO (NOT) - o operador NOT inverte o resultado da expressão, se for verdadeiro ele inverte para falso e se for falso ele inverte para verdadeiro
