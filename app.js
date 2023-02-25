const btn = document.querySelector("#btn");
const txt_input = document.querySelector("#txt-input");
console.log(txt_input)
function clicked() {
    console.log("clicked");
    console.log("input", txt_input.value);
}
btn.addEventListener("click", clicked);


