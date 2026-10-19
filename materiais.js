let inventario = {
    teclado: 1,
    mouse: 1,
    monitor: 1,
    impressora: 1,
    headsets: 1
};

let nome = document.getElementById("nome");
let quantidade = document.getElementById("quantidade");
let resultado = document.getElementById("resultado");
let lista = document.getElementById("listaInventario");


function mostrarLista() {
    lista.innerHTML = "";

    for (let item in inventario) {
        let li = document.createElement("li");
        li.textContent = item + ": " + inventario[item];
        lista.appendChild(li);
    }
}


document.getElementById("btnAdd").onclick = function () {
    let item = nome.value.toLowerCase().trim();
    let qtd = Number(quantidade.value);

    if (item == "") {
        resultado.value = "Digite o nome do item!";
        return;
    }

    if (qtd <= 0 || quantidade.value == "") {
        qtd = 1;
    }

    if (inventario[item] == undefined) {
        inventario[item] = 0;
    }

    inventario[item] += qtd;

    resultado.value = "Item adicionado com sucesso!";

    nome.value = "";
    quantidade.value = "";

    mostrarLista();
};


document.getElementById("btnContar").onclick = function () {
    let item = nome.value.toLowerCase().trim();

    if (item == "") {
        let total = 0;

        for (let produto in inventario) {
            total += inventario[produto];
        }

        resultado.value = "Total de itens: " + total;
    } else if (inventario[item] == undefined) {
        resultado.value = item + ": 0 unidade(s).";
    } else {
        resultado.value = item + ": " + inventario[item] + " unidade(s).";
    }
};


document.getElementById("btnRemover").onclick = function () {
    let item = nome.value.toLowerCase().trim();
    let qtd = Number(quantidade.value);

    if (item == "") {
        resultado.value = "Digite o nome do item!";
        return;
    }

    if (qtd <= 0 || quantidade.value == "") {
        qtd = 1;
    }

    if (inventario[item] == undefined) {
        resultado.value = "Item não encontrado!";
        return;
    }

    if (qtd >= inventario[item]) {
        delete inventario[item];
        resultado.value = "Item removido completamente!";
    } else {
        inventario[item] -= qtd;
        resultado.value = "Item removido com sucesso!";
    }

    nome.value = "";
    quantidade.value = "";

    mostrarLista();
};

mostrarLista();
