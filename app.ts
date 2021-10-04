window.onload = main
// console.log("hola mundo");
function main () {
    let btnCalcular = document.getElementById("btn-calcular");
    btnCalcular.addEventListener('click', calcularTabla);
}

function obtenerValorDeTextBox() {
    let inputValueRaw:HTMLInputElement = <HTMLInputElement>document.getElementById("num-tabla");

    if (+inputValueRaw.value === 0) {
        return 1
    }

    return +`${inputValueRaw.value}`
}

function calcularTabla () {
    let multiply:number = obtenerValorDeTextBox();
    for (let i = 1 ; i <= 12 ; i++) {
        document.getElementById(`th${i}`).innerText = `${multiply} * ${i}`;
        document.getElementById(`td${i}`).innerText = `${multiply * i}`;
    }
}
