// 1.Crie uma função que recebe um número e verifica se ele é par ou ímpar.

let one = (numero) => {
  if (numero % 2 == 0) {
    return `O número ${numero} é par`;
  } else {
    return `O número ${numero} é impar`;
  }
};

console.log(one(3));
console.log(one(4));

// 2.Crie uma arrow function que receba um número e verifique se é primo.

let two = (numero) => {
  var cont = 0;
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      cont++;
    }
  }
  if (cont == 2 || numero == 1) {
    return `O número ${numero} é primo`;
  } else {
    return `O número ${numero} não é primo`;
  }
};

console.log(two(29));
console.log(two(6));

// 3.Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo”
// através de uma callback

function three(callback) {
  setTimeout(function () {
    for (let i = 10; i > 0; i--) {
      console.log(`Contagem regressiva usando callback ${i}`);
    }
    callback();
  }, 3000);
}

function saudacao() {
  console.log('Feliz ano novo callback');
}

three(saudacao);

// 4.Faça o mesmo utilizando Promise com concatenação de then

function four() {
  return new Promise((res) => {
    setTimeout(function () {
      for (let i = 10; i > 0; i--) {
        res(console.log(`Contagem regressiva usando promise ${i}`));
      }
    }, 4000);
  });
}

function saudacaoPromise() {
  setTimeout(function () {
    return new Promise((res) => {
      res(console.log(`Feliz ano novo com promise`));
    });
  }, 4000);
}

four()
  .then((res) => {
    res;
  })
  .then(saudacaoPromise());

// 5.Agora repita a função utilizando o método async/await

function cont() {
  return new Promise((res) => {
    setTimeout(function () {
      for (let i = 10; i > 0; i--) {
        res(console.log(`Contagem regressiva usando async/await ${i}`));
      }
    }, 5000);
  });
}

function saudacaoAwait() {
  return new Promise((res) => {
    res(console.log(`Feliz ano novo com async/await`));
  });
}

async function five() {
  const contador = await cont();
  const saudacao = await saudacaoAwait();
}

five();

// 6.Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0],
// construa uma função para imprimir apenas as notas acima de 7

var notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7];

const six = notas.filter(function (numero) {
  return numero > 7;
});

console.log(six);

// 7.Crie um array de objetos onde cada objeto será um produto de supermercado e terá o
// nome do produto e o seu respectivo preço, agora construa uma função que some todos os
// valores e te devolva o total

const compras = [
  { item: 'arroz', preco: 15.5 },
  { item: 'feijão', preco: 7.3 },
  { item: 'macarrão', preco: 5.2 },
  { item: 'carne', preco: 30.5 },
  { item: 'frango', preco: 12.5 },
  { item: 'batata', preco: 5.5 },
  { item: 'alface', preco: 2 },
];

const seven = compras.reduce(function (sum, number) {
  return sum + number.preco;
}, 0);

console.log(`A soma do total dos produtos é ${seven}`);

// 8. Em uma escola ficou definido que os alunos do 8º ano terão aulas de história e os
// alunos do 9º terão aulas de física às quartas-feiras. Você deve criar uma função que
// receba um array de objetos contendo nome e série de cada aluno e atribua a sua respectiva
// disciplina da quarta-feira. (O array de alunos deve ser criado como você desejar contanto
// que contenha pelo menos 5  alunos).

const alunos = [
  { nome: 'Paulo', serie: 8 },
  { nome: 'João', serie: 9 },
  { nome: 'Pedro', serie: 8 },
  { nome: 'Maria', serie: 9 },
  { nome: 'Viviane', serie: 8 },
];

function eigth(alunos) {
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].serie === 8) {
      console.log(
        `O aluno ${alunos[i].nome} da ${alunos[i].serie}ª série tem aula de História`
      );
    } else {
      console.log(
        `O aluno ${alunos[i].nome} da ${alunos[i].serie}ª série tem aula de Física`
      );
    }
  }
}

eigth(alunos);
