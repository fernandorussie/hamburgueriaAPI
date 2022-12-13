//Consumindo a API para requisição

fetch("http://localhost:3000/sanduiches")
.then((resp) => resp.json())
.then((data) => {exibirProdutos(data),console.log(data)})


//Função para exibir os produtos

// function exibirProdutos(bDados){
//     const produtos = bDados.map((item) => 
//         `
//         <div class="card-product">
//             <p>${item.nome}</p>
//             <p>${item.descricao}</p>
//             <p>${item.preco}</p>
//         </div>
//         `
//     )
//     document.getElementById("listaProdutos").innerHTML = produtos.join("")
// }