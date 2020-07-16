



// // 6.1 Variável-> é algo temporário e que pode variar, ter qualquer valor, vai armazenar algum 
// // valor durante um tempo, enuqanto aquela aplicação estiver em execução. 

// // Constantes-> não permite alerar o valor depois de criada


// Exemplo de váriável e constante:

// var a = parseInt(prompt('digite a primeira nota'));
// var b = parseInt(prompt('digite a segunda nota'));
// var c = parseInt(prompt('digite a terceira nota'));
// const pularLinha = '<br>';

// 6.2 If e Else

// ex.

// var num = 10;

//         if(num < 18){
//             document.write('numero menor')
//         }else{
//             document.write('numero maior')
//         }



// 6.3 - for: ele vai passar pelo codigo várias vezes e while passa pelo codigo enquanto aquela condição for verdade.



// for(var i = 0; i < 10; i++){
//     //     document.write( Sou a posição - ' + i)

//     while(cont < 10){
//         //     document.write('Sou a posição: ');
        



// 6.4 - função é um conjunto de ação que executa uma ação, calcular valor.

// function mostrarAlerta(){  
//     alert('mensagem !!!')
// }


// 6.5 - Escopos se referem ao local em que podemos acessar uma variavel

// ex: uma variável que está fora de uma função, está no escopo global e uma que está dentro de uma função
// está em um escopo local, e só pode ser acessadas dentro delas.


// 6.6 - input:

// prompt -

// ex: var a = prompt('digite seu nome'). vai exibir uma caixa de dialogo solicitando a entrada de algum texto.
 
// output:

// alert('bem vindo') - dispara um alerta na tela do navegadoor com uma mensagem.

// console.log()
// document.write()



// ex: 




// 6.7 - Array é uma variavel, só que é um tipo de variavel que armazena mais de um tipo de dado.C

// ex: var lista = ['a', 'b', 'c', 'd']

// 6.8 - são uma forma de representação de coisas reais em forma de código.






// 6.9 - camelCase - padrão adotado pelo javascript. a partir da segunda palavra, as palavras devem ter sua letra inicial maiuscula.
//       PascalCase - padrão tutilizado no C# - todas as palavras terão sua letra inicial maiuscula.
//       kibab-case - padrão que escrevemos tudo em caixa baixa, porém separando as palavras por traços. utilizado pelo HTMLAllCollection, CSS e no javascript.
//       snake_case - padrão que escrevemos tudo em caixa baixa, prém separando cada palavra por com underline. Utilizada pelo Python. 


     


//       6.10 - Caminho absoluto é aqule vemos na barra de endereços do explorer C:\Users\Tony\Desktop\Prova curso\projeto-final-nivelamento
//       e relativo é o caminho de que usamos para importar dentro do vscode ex: ./js/exemplo.html.


// 6.11 - && - ambas as condiçoes devem ser verdades.
//        || - uma ou outra condição devem ser verdades
//        == - usado para comparação de igualdade
//        != - compara diferenças.

// 6.12 - EPER - Entender, planejar, executar e revisar: objetivo de entender as coisas de maneira mais clara, planejar da maneira correta,
// executar o que foi entendido e planejado, para errarmos menos.


// 6.13 - Conceito de fila é o primeiro que entra será o primeiro a sair.
//  conceito de pilha é o primeiro a entrar será o ultimo a sair.

//  6.14 o html é uma linguagem de contrução, javascript é a linguagem de programação e css é a linguagem para dar estilos.





 
// Questão 8


var num1 = parseInt(prompt('digite um numero'));
var num2 = parseInt(prompt('digite um numero'));
var num3 = parseInt(prompt('digite um numero'));
var num4 = parseInt(prompt('digite um numero'));
var num5 = parseInt(prompt('digite um numero'));
const pularLinha = '<br>'

document.write('Primeiro numero: ' + num1 + pularLinha);
document.write('Segundo numero: ' + num2 + pularLinha);
document.write('Terceiro numero: ' + num3 + pularLinha);
document.write('Quarto numero: ' + num4 + pularLinha);
document.write('Quinto numero: ' + num5 + pularLinha);


var resto1 = num1 % 2;
var resto2 = num2 % 2
var resto3 = num3 % 2
var resto4 = num4 % 2
var resto5 = num5 % 2


if(resto1 % 2 == 0){
    alert('voce digitou um numero par')
}else{
    alert('Voce digitou um numeroimpar')
}

if(resto2 % 2 == 0){
    alert('voce digitou um numero par')
}else{
    alert('Voce digitou um numeroimpar')
}


if(resto3 % 2 == 0){
    alert('voce digitou um numero par')
}else{
    alert('Voce digitou um numeroimpar')
}

if(resto4 % 2 == 0){
    alert('voce digitou um numero par')
}else{
    alert('Voce digitou um numeroimpar')
}

if(resto5 % 2 == 0){
    alert('voce digitou um numero par')
}else{
    alert('Voce digitou um numeroimpar')
}







































