// Qual é o resultado da execução do código abaixo? Explique o motivo desse resultado.

function teste() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
    }
teste();


/*
var é váriável local para todo escopo da função, mas, na linha de execução do programa,
"a" dentro de console.log(a) ainda não possui nenhuma atribuição. Por esse motivo o resultado
é "undefined". 
Em seguida podemos ver a chamada da função "teste(). Como essa função retorna 2, é possivel ver no console esse valor"
*/