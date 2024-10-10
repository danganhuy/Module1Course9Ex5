let result = document.getElementById("result");

function Calculate() {
    console.log("???");
    let s = result.value;
    try {
        result.value = eval(s);
    }
    catch (ex) {
        result.value = "error"
    }
}
function InputHandler(event) {
    result.value = result.value + event.target.value;
    console.log(event.target.value)
}

document.getElementById("calculate").addEventListener("click", Calculate);

let elements = document.getElementsByClassName("calInput")
for (const element of elements) {
    element.addEventListener("click", InputHandler);
}