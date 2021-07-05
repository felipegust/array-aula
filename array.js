let resultado = null;

let fruits1 = [
    'Abacate',
    'Abacaxi',
    'Açaí',
    'Acerola'
]

let fruits2 = [
    'Amora',
    'Araticum',
    'Bacaba',
    'Banana']

let fruits = fruits1.concat(fruits2)

let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let numeros = Array.from(Array(50).keys())

const estoque = [
    { nome: 'Abacate', quantidade: 2 },
    { nome: 'Abacaxi', quantidade: 0 },
    { nome: 'Banana', quantidade: 5 },
    { nome: 'Açaí', quantidade: 10 },
    { nome: 'Acerola', quantidade: 15 },
];

// Static Methods
// Array.from()

// resultado = Array.from( fruits )
// resultado = Array.from( 'frutas' )

// Array.isArray()
// console.log(Array.isArray(fruits))
// console.log(Array.isArray({ frutas: true }))

// Instance properties
// Array.prototype.length

// console.log(fruits.length)



// Métodos
// Manipulação de Arrays

// Array.prototype.concat()
// Concatena um objeto a um array
// resultado = fruits1.concat(fruits2)
// resultado = fruits1.concat("Laranja")
// resultado = fruits1.concat({ fruta: "Laranja"})



// Array.prototype.fill()
// Popula array com objeto desejado
// resultado = alfabeto.fill(0)
// resultado = alfabeto.fill("a", 10)
// resultado = alfabeto.fill("a", 10, 15)
// resultado = Array.from(Array(100))
// resultado.fill({count: 0})

// Array.prototype.flat()
// Nivela um array multi-nível
// let arr = [fruits1, fruits2]
// console.log(arr)
// console.log(arr.flat())

// let arr = [[fruits1], [[fruits2]]]
// console.log(arr)
// console.log(arr.flat().flat().flat())


// Array.prototype.join()
// Concatena todos elementos de um array com o parâmetro inserido
// resultado = alfabeto.join("")
// resultado = alfabeto.join("-")


// Array.prototype.pop()
// remove o último elemento do array
// let letra = alfabeto.pop()
// console.log(letra)
// console.log(alfabeto)

// Array.prototype.push()
// concatena N objetos no final do array
// alfabeto.push("ZZ")
// console.log(alfabeto)
// alfabeto.push("ZZ", "ZZZ", "ZZZZ")
// console.log(alfabeto)

// Array.prototype.shift()
// O Contrário do .pop(), remove o primeiro item do array
// resultado = alfabeto.shift()
// console.log(alfabeto)

// Array.prototype.unshift()
// Adiciona no começo do array
// numeros.unshift(1,2,3,4,5,6)
// console.log(numeros)


// Array.prototype.reverse()
// resultado = alfabeto.reverse()

// Array.prototype.slice()
// "Fatia" o array
// resultado = alfabeto.slice(14)

// Array.prototype.splice()
// serve pra adicionar itens em determinadas posições, substituindo ou não valores
// console.log(fruits)
// fruits.splice(1, 0, "Laranja")
// console.log(fruits)

// console.log(fruits)
// fruits.splice(2, 2, "Laranja")
// console.log(fruits)

// fruits.splice(3)
// console.log(fruits)

// fruits.splice(4, 0, alfabeto)
// console.log(fruits.flat())



// Para iterar sobre um array

// Array.prototype.entries()
// for (let entry of fruits.entries()) {
//     console.log(entry)
// }

// Array.prototype.keys()
// for (let key of fruits.keys()) {
//     console.log(key)
// }

// Array.prototype.values()
// for (let value of fruits.values()) {
//     console.log(value)
// }


// Procurando Valores de Forma Simples

// Array.prototype.includes()
// resultado = alfabeto.includes("A")
// resultado = alfabeto.includes("A", 2)

// Array.prototype.indexOf()
// resultado = alfabeto.indexOf("ZZ")
// resultado = fruits.indexOf("Maçã")

// resultado = []
// for ( let letra of "FELIPE") {
//     resultado.push(alfabeto.indexOf(letra))
// }

// Array.prototype.lastIndexOf()

// resultado = alfabeto.lastIndexOf("Z")
// alfabeto = alfabeto.concat(alfabeto)
// resultado = alfabeto.indexOf("Z")



// Higher Order Funcions
// Métodos que recebem outras funções como parâmetro, permitindo fazer "mais com menos"


// Array.prototype.some()
// Se o array contém algum item determinado

// resultado = fruits.some(fruta => fruta === 'Laranja')

// let abc = alfabeto.slice(0,3)
// resultado =  alfabeto.some(x => abc.includes(x))

// resultado = numeros.some(x => x % 2===0)
// resultado = numeros.some(x => x > 100)

// Array.prototype.every()
// Se todos os itens do array atendem a determinada condição

// resultado = fruits1.every(fruta => typeof (fruta) === "string")
// resultado = fruits1.every(palavra => palavra.length > 3)
// resultado = abc.every(letra => alfabeto.includes(letra))


// Array.prototype.find()
// Encontra o PRIMEIRO item no array que atende a condição de busca

// resultado = numeros.find(numero => numero > 10);
// resultado = estoque.find((item) => item.nome === 'Banana');
// resultado = estoque.find(({ quantidade }) => quantidade < 2);

// Array.prototype.findIndex()
// resultado = alfabeto.findIndex(letra => letra === "Z")
// resultado = numeros.findIndex(numero => numero > 100)


// Array.prototype.filter()
// filtra o array baseado na condição passada

// resultado = fruits.filter(fruta => fruta.startsWith('A'))
// resultado = numeros.filter(numero => numero % 2 !== 0)
// resultado = estoque.filter(({quantidade}) => quantidade > 5)


// Array.prototype.forEach()
// Executa a função para cada elemento presente no array

// resultado = []
// numeros.forEach(numero => { resultado.push(numero * 10) })

// alfabeto.forEach((letra, idx) => {
//     console.log(`A letra ${letra} está na posição ${idx + 1} do alfabeto!`)
// })

// forEach espera funções síncronas!
// portanto, não faça isso:

// let juntaLetras = async (atual, adicionar) => { return atual + adicionar }
// let todasLetras = ""

// alfabeto.forEach(async letra => {
//     todasLetras = await juntaLetras(todasLetras, letra)
// })

// console.log(`todas as letras do alfabeto: ${todasLetras}`)

// esperado: ABCDEFGHIJKLMNOPQRSTUVWXYZ
// resultado: ""


// faça isso: (for ... of)
// let juntaLetras = async (atual, adicionar) => { return atual + adicionar }
// let todasLetras = ""

// const testeAsync = async () => {
//     for (letra of alfabeto) {
//         todasLetras = await juntaLetras(todasLetras, letra)
//     }
//     console.log(`todas as letras do alfabeto: ${todasLetras}`)
// }

// testeAsync()


// Array.prototype.map()
// retorna uma cópia do array com a função aplicada

// resultado = alfabeto.map(letra => letra+"_")
// resultado = numeros.map(numero => numero * 2)

// resultado = estoque.map(item => {
//     return { fruta: item.nome, novaQuantidade: item.quantidade / 2 }
// })


// Array.prototype.reduce()

// Básico (soma, maior valor, etc)
// const soma = (a, b) => (a + b)
// const maiorValor = (a, b) => Math.max(a, b)

// resultado = numeros.reduce(maiorValor)

// Mais útil, soma em arrays de objetos
// const soma = (a, b) => (a + b.quantidade)
// resultado = estoque.reduce(soma, 0)

// melhor ainda, removendo duplicados
// let newArray = fruits.concat(fruits)
// console.log(newArray)

// resultado = newArray.reduce((acumulador, valorAtual) => {
//     if (!acumulador.includes(valorAtual)) {
//         acumulador.push(valorAtual);
//     }
//     return acumulador;
// }, []);


// Array.prototype.sort()
// Ordena o array ALFABETICAMENTE

// fruits.sort()
// console.log(fruits)

// numeros.sort()
// console.log(numeros)

// If compareFunction(a, b) returns a value > than 0, sort b before a.
// If compareFunction(a, b) returns a value ≤ 0, leave a and b in the same order.

// resultado = numeros.sort((a, b) => a - b)
// resultado = fruits.sort((a,b) => a.length - b.length)

resultado = estoque.sort((a, b) => {
    return a.quantidade - b.quantidade
})


console.log(resultado)