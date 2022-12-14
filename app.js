// //Consumindo a API para requisição //SANDUICHES
// fetch("https://hamburgueriaapi.onrender.com/sanduiches")
// .then((resp) => resp.json())
// .then((data) => {qtSanduiche(data),console.log(data)})

// //Função qt produtos
// function qtSanduiche(quantidade) {
//     var qtSanduiche = quantidade.length
//     console.log("Sanduiches")
//     document.querySelector("#qtSanduiche").innerHTML = `/Sanduiches x${qtSanduiche}`
// }


// //Consumindo a API para requisição //Bebidas
// fetch("https://hamburgueriaapi.onrender.com/bebidas")
// .then((resp) => resp.json())
// .then((data) => {qtBebida(data),console.log(data)})

// //Função qt produtos
// function qtBebida(quantidade) {
//     var qtBebida = quantidade.length
//     console.log("Bebidas")
//     document.querySelector("#qtBebida").innerHTML = `/Bebidas x${qtBebida}`
// }

// //Consumindo a API para requisição //Acompanhamentos
// fetch("https://hamburgueriaapi.onrender.com/acompanhamentos")
// .then((resp) => resp.json())
// .then((data) => {qtAcomp(data),console.log(data)})

// //Função qt produtos
// function qtAcomp(quantidade) {
//     var qtAcomp = quantidade.length
//     console.log("Acompanhamentos")
//     document.querySelector("#qtAcomp").innerHTML = `/Acompanhamentos x${qtAcomp}`
// }

// //Consumindo a API para requisição //Acompanhamentos
// fetch("https://hamburgueriaapi.onrender.com/categorias")
// .then((resp) => resp.json())
// .then((data) => {qtCategoria(data),console.log(data)})

// //Função qt produtos
// function qtCategoria(quantidade) {
//     var qtCategoria = quantidade.length
//     console.log("Categoria")
//     document.querySelector("#qtCategoria").innerHTML = `/Categorias x${qtCategoria}`
// }

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