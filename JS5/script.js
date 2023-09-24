function printGraph() {
    let barInputs = document.getElementsByClassName('bar-input');
    let graphs = document.getElementsByClassName('graph');
    let largura = document.getElementById('largura').value;

    for (let i = 0; i < barInputs.length; i++) {
        let altura = barInputs[i].value;
        graphs[i].style.cssText = `height: ${altura}px; width: ${largura}px`;
    }
}
