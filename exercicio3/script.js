// Agora, vamos **manipular** os arrays, adicionando ou removendo informações. Para isso, crie **três novos arrays**, chamados `nomeDoArrayOriginalCopia`. Por exemplo, se o seu primeiro array se chama **meusNumeros**, você deve criar um array **meusNumerosCopia**, e assim por diante.
// Copie cada um dos arrays originais para sua respectiva cópia usando o método `slice()`.
const lista1 = [9,2,34,56,78,22]
const lista2 = ["azul","vermelho","amarelo","verde"]
const lista3 = [34,"olá",true]

const lista1Copia = lista1.slice()
const lista2Copia = lista2.slice()
const lista3Copia = lista3.slice()

// Faça o que se pede abaixo nas **cópias** dos arrays originais:

// a) Adicione um item `number` ao **início** do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
lista1Copia.unshift(14)
console.log(lista1,lista1Copia)

// b) Remova o **último item** do segundo array. Utilize `console.log()` para exibir o original e a cópia.
lista2Copia.pop()
console.log(lista2,lista2Copia)

// c) Remova o **segundo item** do terceiro array. Utilize `console.log()` para exibir o original e a cópia.
lista3Copia.splice(1,1)
console.log(lista3,lista3Copia)