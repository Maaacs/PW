/*const ufam = {
    nome: "Universidade Federal do Amazonas",
    idade: 14,
    imprime: function(){
        console.log(this.nome)
    }
}


for (prop in ufam){
    console.log(ufam[prop])
}*/

// Arrays
const arr = [10, 20, 30, 40]
arr.push(50)
console.log(arr)

const arr_modificado = arr.concat([100])
console.log(arr_modificado)

// Busca o valor 
const valor = arr_modificado.find((element) => element > 20);
console.log(valor)


console.log(soma(1,2))
function soma(a,b){
    return a+b
}

const soma2 = function(a,b){
    return a+b
}
soma2.valor = 10
console.log(soma(1,2))

let acumulador;
for(i =0; i<arr.lenght; i++){
    acumulador = acumulador + arr[i];
}

const soma2 = acumulador; 
console.log(acumulador)

// mostra caixa de input text no navegador
/*const valor_teste = prompt()
console.log(valor_teste)*/
