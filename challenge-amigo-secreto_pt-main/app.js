let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value;

    if (nomeAmigo == '') {
        alert('Por favor, digite o nome de um amigo.');
        return;
    }

    amigos.push(nomeAmigo);
    exibirAmigosNaTela();
    amigoInput.value = '';
}

function exibirAmigosNaTela() {
    let lista = document.getElementById('listaDeAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista. Por favor, adicione nomes.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: <b>${amigoSorteado}</b>`;
}

