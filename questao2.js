function verificarLetraA(texto) {
    // Converte a string para minúsculas para facilitar a verificação
    const textoMinusculo = texto.toLowerCase();
    
    // Conta a quantidade de ocorrências da letra 'a'
    const quantidade = (textoMinusculo.match(/a/g) || []).length;

    // Verifica se a letra 'a' existe e retorna os resultados
    if (quantidade > 0) {
        return `A letra 'a' aparece ${quantidade} vez(es) na string.`;
    } else {
        return "A letra 'a' não aparece na string.";
    }
}

// Exemplo de uso com string definida
const stringParaVerificar = "Aprender JavaScript é muito divertido!";
console.log(verificarLetraA(stringParaVerificar));

// Você também pode usar prompt para entrada do usuário
// const entradaUsuario = prompt("Digite uma frase:");
// console.log(verificarLetraA(entradaUsuario));
