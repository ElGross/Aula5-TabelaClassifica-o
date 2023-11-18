var listaDeJogadores = [];
var elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  listaDeJogadores.forEach((jogador, index) => {
    console.log(jogador);
    elementoTabela.innerHTML += `<tr>
  <td>${jogador.nome}</td>
  <td>${jogador.vitoria}</td>
  <td>${jogador.empate}</td>
  <td>${jogador.derrota}</td>
  <td>${jogador.pontos}</td>
  <td><button onClick="adicionarV(${index})">V</button></td> 
  <td><button onClick="adicionarE(${index})">E</button></td>
  <td><button onClick="adicionarD(${index})">D</button></td> <td><button onClick="Zerar(${index})">Zerar</button></td>
  <td><button onClick="Excluir(${index})">Excluir</button></td> </tr>`;
  });
}

function criarJogador() {
  var nomeNovoJogador = document.getElementById("campoNomeJogador").value;
  listaDeJogadores.push({
    nome: nomeNovoJogador,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("campoNomeJogador").value = "";
  exibirNaTela();
}

function adicionarV(index) {
  listaDeJogadores[index].vitoria++;
  listaDeJogadores[index].pontos = listaDeJogadores[index].pontos + 3;
  exibirNaTela();
}

function adicionarE(index) {
  listaDeJogadores[index].empate++;
  listaDeJogadores[index].pontos++;
  exibirNaTela();
}

function adicionarD(index) {
  listaDeJogadores[index].derrota++;
  exibirNaTela();
}

function Zerar(index) {
  listaDeJogadores[index].vitoria = 0;
  listaDeJogadores[index].empate = 0;
  listaDeJogadores[index].derrota = 0;
  listaDeJogadores[index].pontos = 0;
  exibirNaTela();
}

function Excluir(index) {
  listaDeJogadores.splice(index, 1);
  exibirNaTela();
}

function apagarJogadores() {
  listaDeJogadores = [];
  exibirNaTela();
}