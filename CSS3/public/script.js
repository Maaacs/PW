// Lógica do sistema
// Escolher qual opção deseja rodar
(function (){
    const buttons = document.getElementsByTagName("BUTTON");
    const cssLogo = document.getElementById("css-logo");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function(e) {
            cssLogo.style.position = e.target.innerHTML;
        };
    }
})();
