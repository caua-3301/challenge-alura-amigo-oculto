import Database from "./database.js";

//criando um item de uma lista
const itemCreator = (name) => {
    const li = document.createElement('li');
    const content = document.createTextNode(name);

    li.appendChild(content);

    return li;
}

//atualiza a tela do usuário com os amigos que ele adicionou
const realoadListInSite = () => {
    const list = document.querySelector('#listaAmigos');

    //limpando a lista
    list.innerText = '';

    Database.getData().forEach(friend => {
        //adicionando a lista
        list.appendChild(itemCreator(friend));
    });
} 

//evento de clique no botão de adicionar
document.querySelector('#add').addEventListener('click', () => {
    //local onde o usuário digitará o nome do amigo a ser adicionado
    const data = document.querySelector('#amigo');

    //validando entrada
    if (data.value.length == 0) {
        alert('Informe um nome antes de adicionar!');
    }

    Database.addData(data.value);
    realoadListInSite();
})

const showWinner = (winnerName) => {
    const resultList = document.querySelector('#resultado');
    //limpando dados
    Database.resetData();
    realoadListInSite();

    //mostrando vencedor
    resultList.innerText = '';

    resultList.appendChild(itemCreator(winnerName));
}

//realizando sorteio
const holdADraw = () => {
    //valor aleatório de 0 ao tamanho do array de amigos
    return Math.floor(Math.random() * Database.getData().length);
}

//evento de sortear um amigo
document.querySelector('#sortear').addEventListener('click', () => {
    const data = Database.getData();

    if (data.length <= 0) {
        alert('Adicione amigos na lista antes de sortear!');
    }
    else {
        showWinner(data[holdADraw()]);
    }
})