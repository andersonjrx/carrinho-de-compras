let valorTotal;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let valorProduto = valorUnitario * quantidade;

    if(isNaN(quantidade) || quantidade <= 0){
        alert('ERRO: Insira uma quantidade válida.');
        return;
    }

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;
    

    valorTotal += valorProduto;
    let msgTotal = document.getElementById('valor-total');
    msgTotal.innerHTML = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}