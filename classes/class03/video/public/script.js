// Lógica do sistema
// Escolher qual opção deseja rodar
(function (){
    const video = document.getElementById("video");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const time = document.getElementById("time");
    play.onclick = function(){
        video.play()
    }
    pause.onclick = function(){
        video.pause()
    }
    window.setInterval(() =>{
        time.innerHTML = video.currentTime
    }, 10);
})();
