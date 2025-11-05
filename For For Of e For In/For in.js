/*
    Estrutura de Repetição - LOOP
        - For In
        - Usado para iterar Objetos
*/

//  Chave name, Valor Kaiqui
const user = {
  name: "Kaiqui",
  age: 23,
  street: "Rua Efigênia Amarilis de Jesus",
};

// user.name -> Kaiqui
// user['name'] -> Kaiqui

// for (let key in user) {
//     console.log(user['name']) // no objeto pode colocar o nome da chave
// }

for (let key in user) {
  console.log(`${key}: ${user[key]}`); // posso fazer assim ou
  console.log(key + ": " + user[key]); // assim
}
