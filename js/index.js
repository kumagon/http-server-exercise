function clickHandlerJS() {
    const box = document.getElementById("box");
    const p = document.createElement("p");
    p.innerText = "Added by JS";
    box.appendChild(p);
    console.log('add JS');
}
function clickHandlerPHP() {
    const box = document.getElementById("box");
    const p = document.createElement("p");
    p.innerText = "Added by PHP";
    box.appendChild(p);
    console.log('add PHP');
}
function clickHandlerClear() {
    const box = document.getElementById("box");
    box.innerHTML = null;
}
