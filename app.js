const btn = document.querySelector("#btn");
const txt_input = document.querySelector("#txt-input");
const output = document.querySelector("#output");


function clicked() {
    output.innerText = "assassasa" + txt_input.value;
}
btn.addEventListener("click", clicked);


