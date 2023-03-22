const lista1 = [9,2,34,56,78,22]
const lista2 = ["a","vermelho","céu","carro"]
const lista3 = [34,"olá",true]

// a) Imprima a **quantidade de itens** de cada array (utilize um `console.log()` para cada impressão).
console.log(lista1.length)
console.log(lista2.length)
console.log(lista3.length)

// b) Imprima o **primeiro item** do primeiro array, o **segundo item** do segundo array, e o **terceiro item** do terceiro array.
console.log(lista1[0])
console.log(lista2[1])
console.log(lista3[2])

// c) **Verifique** se um item está incluído no primeiro array e depois no terceiro array. Imprima o resultado dessas verificações no `console.log()`. A primeira impressão deve retornar um booleano **true** e a segunda deve retornar um booleano **false**.
console.log(lista1.includes(9))
console.log(lista3.includes(9))