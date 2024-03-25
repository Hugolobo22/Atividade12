/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/

let cat = {
    nome: 'Celeste',
    age: 1,
    color: 'Branca',
    bestFriends: ['Hugo', 'Inês'],
    sound: function(){
        return ('MIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU')
    }
}

console.log(`Estas são as informações sobre o gato(a):
    Nome: ${cat.nome}
    Ano: ${cat.age}
    Cor: ${cat.color}
    Melhores amigos: ${cat.bestFriends}
    som: ${cat.sound()}`);


/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/

console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu ${cat.nome}, "age", que recebeu ${cat.age}, "color", que recebeu ${cat.color}, "bestFriends", que recebeu um array com os itens ${cat.bestFriends[0]} e ${cat.bestFriends[1]}, e "sound", que recebeu uma função que retorna ${cat.sound()}.`)

/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/

cat.age+=2
console.log(cat.age)

/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/

function addamigo(amigo1){
    cat.bestFriends.push(amigo1)
}

addamigo("Fernanda")
console.log(cat.bestFriends)

/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/

function addcor(cor1){
    coradicional = cor1
    novacor = cat.color.concat(' e ', coradicional)
}

addcor('cinza')
console.log(novacor)

/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/

function verifica(value) {
    return typeof value === 'object'
  }
  
  console.log(verifica(cat))


/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/

let dog = {
    nome: 'Nina',
    age: 6,
    color: 'Marrom',
    bestFriends: ['Hugo', 'Inês'],
    sound: function(){
        return ('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU')
    }
}

console.log(`A soma das idades de ${cat.nome} e ${dog.nome} é ${cat.age + dog.age}.`)

/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

// const isAnSUV = car => {
//     if (car === 'Honda HR-V' || car === 'Jeep Renegade' || car === 'Ford EcoSport' || car === 'Hyundai iX35') {
//         return true
//     }

//     return false
// }

// console.log(isAnSUV('Honda Civic'))
// console.log(isAnSUV('Ford EcoSport'))

const isAnSUV = car => {
    const suvModels = ['Honda HR-V', 'Jeep Renegade', 'Ford EcoSport', 'Hyundai iX35'];
    return suvModels.includes(car);
}

console.log(`O carro 'Honda Civic' é um SUV? ${isAnSUV('Honda Civic')}`);
console.log(`O carro 'Ford EcoSport' é um SUV? ${isAnSUV('Ford EcoSport')}`);

/*
  09
 
  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/

function funcaotype(type) {
    const messages = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.'
    };

    return messages[type] || 'Tipo não reconhecido.';
}

console.log(funcaotype('null'))
console.log(funcaotype('undefined'))
console.log(funcaotype('object'))
console.log(funcaotype('string'))

/*

10

- Declare uma constante que recebe o seu nome;
- Ela deve ter um escopo global.
*/

const meunome = 'Hugo'

/*
  11

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/

function minhaidade (){
    let idade = 20
    console.log("Minha idade é:", idade)
}

minhaidade()

// console.log(idade)
// Aconcete quando usamos uma variável que não foi declarada de forma correta, nesse caso específico, acontece pois declaro a variável dentro da função

/*
  12

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/

let car = {
    nome: "Yaris",
    brand: "Toyota",
    colors: ['Branco', 'Prata', 'Preto'],
    isRunning: false,
    run: function() {
        car.isRunning = true;
        return `O ${car.nome} está em movimento`
    },
    stop: function() {
        car.isRunning = false;
        return `O ${car.nome} está parado`
    },
    getColorsMessage: function() {
        return `O ${car.nome} está disponível nas cores ${car.colors.join(", ")}`
    }
}

console.log(car.run())
console.log(car.stop())
console.log(car.getColorsMessage())


/*
  13

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/

car.run()

if (car.isRunning) {
    console.log(`${car.nome} está em movimento.`)
} else {
    console.log(`${car.nome} não está em movimento.`)
}

/*
  14

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/

car.stop()

if (car.isRunning) {
    console.log(`${car.nome} não está parado.`)
} else {
    console.log(`${car.nome} está parado.`)
}

/*
  15

  - Exiba, no console, a mensagem com as cores do carro.
*/

console.log(car.colors)

/*
  16

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/

console.log(`O carro é um ${car['brand']} ${car['nome']}`)

/*
  17
  - Aqui vamos simular um sistema de cadastro de um médico que deseja guardar informações sobre os seus pacientes em um hospital
  - Aqui faça uma simulação de um banco de dados com informações sobre pacientes de um hospital (20 pacientes)
  - Cada paciente deve ser um objeto declarado, e armazenado em um banco de dados com array
  - Cada paciente deve possuir os seguintes atributos: nome, idade, cpf, sintoma, classificação de risco (de 0-5), situação de risco
  - Você deve verificar qual a classificação de cada paciente e atribuir a situação do paciente como 'Risco leve' caso ele tenha classificação 1 ou 2, 
        'Risco Moderado' caso ele tenha risco de 3 ou 4, e 'Grave risco' caso ele tenha risco de valor igual a 5.
  - Depois imprima um relatório completo sobre os pacientes.
*/

