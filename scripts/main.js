function calculateFactorial() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const output = document.getElementById('output');

    if (isNaN(inputNumber) || inputNumber < 0) {
        output.textContent = 'Introduce un número válido.';
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= inputNumber; i++) {
        factorial *= i;
    }

    output.textContent = `El factorial de ${inputNumber} es: ${factorial}`;
}