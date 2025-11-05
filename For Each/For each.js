/*
    ForEach(item, index, array)

    item - Dados/Informações contidos na posição atual do Array
    index - Número da Posição, Sempre começando em 0
    array - Retorna o Array completo

*/

const users = [
  { name: "Kaiqui", age: 23, contact: "(11) 93367-3435" },
  { name: "Cleia", age: 43, contact: "(11) 96667-6544" },
  { name: "Thamires", age: 23, contact: "(11) XXXXX-XXXX" },
  { name: "João", age: 17, contact: "(11) XXXXX-XXXX" },
];

// colocar o array - // forEach - // função // o parametro item é obrigatorio
// users.forEach(function (item, index, array) {
//   console.log(item);
//   console.log(index);
// });

users.forEach(function (item, index) {
  if (item.age >= 18) {
    console.log("É maior de Idade!");
  } else {
    console.log("É menor de Idade!");
  }
});

users.forEach(function (item, index) {
  if (item.age < 18) {
    console.log(`O cliente ${item.name}, posição ${index} é menor de idade`);
  }
});
