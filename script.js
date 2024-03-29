const btn = document.getElementById("btn");

let Random = () =>{
    let num = (Math.floor(Math.random() * 256));
    return num;
}

let Change = () =>{
    let back = `rgb(${Random()},${Random()},${Random()})`;

    document.body.style.backgroundColor = back;
}

btn.addEventListener("click",Change);
window.addEventListener("load",Change);