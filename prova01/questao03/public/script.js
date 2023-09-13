document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-button");
    const resultDiv = document.getElementById("result");

    startButton.addEventListener("click", function() {
        const num1 = prompt("Digite um número:");
        const num2 = prompt("Digite outro número:");

        if (num1 !== null && num2 !== null) {
            const parsedNum1 = parseFloat(num1);
            const parsedNum2 = parseFloat(num2);

            if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
                const sum = parsedNum1 + parsedNum2;
                resultDiv.innerHTML = `A soma entre <span style="background-color: yellow; color: black;">${parsedNum1}</span> e <span style="background-color: yellow; color: black;">${parsedNum2}</span> é igual a <strong>${sum}</strong>!`;
            } else {
                alert("Por favor, digite números válidos.");
            }
        } else {
            alert("Você cancelou a operação.");
        }
    });
});
