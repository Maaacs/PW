// Lógica do sistema
// Escolher qual opção deseja rodar
(function (){
    const video = document.getElementById("video");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const time = document.getElementById("time");
    play.onclick = function(){
        video.play()
        video.pause()
        window.setInterval(() =>{
            time.innerHTML = video.currentTime
        }, 10);
    }
})();

// opção 1
// const botao = document.getElementById("botao");
// botao.onclick = function (){
//     console.log("Oi!");
// }

// opção 2 sem variável global
// (function (){
//     const botao = document.getElementById("botao");
//     let teste = 3;
//     botao.onclick = function (){
//     console.log("Oi!");
//     }
// })()


// incrementando opção 2
// (function (){
//     const botao = document.getElementById("botao");
//     let teste = 3;
//     botao.onclick = function (){
//         document.body.style.backgroundColor = "#0000FF";
//     }
//     function getRandomColor(){
//         const letra = "0123456789ABCDEF";
//         let cor = "#";
//         for (let i = 0; i < 6; i++){
//             cor += letra[Math.floor(Math.random()*16)]
//         }
//         return cor; 
//     }

// })()