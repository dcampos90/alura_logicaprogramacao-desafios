//Desafio 5: Removendo duplicatas


// Função para remover duplicatas de um array

let array = [1,2,3,3,4,5,6,7,7,8]
function removerDuplicatas(array) {
    return [...new Set(array)];
  }
  
  // Testando a função com novaLista
  let novaListaSemDuplicatas = removerDuplicatas(array);
  console.log("Remover duplicatas:", novaListaSemDuplicatas);


