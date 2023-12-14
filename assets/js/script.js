// Event-Listeners einfügen (Funktionen die ausgeführt werden, wenn ein Event eintritt)
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    // wenn die Seite geladen ist, spielt man zuerst das Addition Game
    runGame("addition")

});

// Die Funktion runGame sorgt dafür, dass das Game läuft sobald ein User auf die Seite kommt!
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // kreiert 2 random Zahlen zwischen 1 & 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2)
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2)
    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2)
    }else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

// Die Funktion checkAnswer sorgt dafür, dass das Ergebnis überprüft wird
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right!");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

// Die Funktion calculateCorrectAnswer sorgt dafür, dass das richtige Ergebnis angezeigt wird
function calculateCorrectAnswer() {
    //Hiermit werden die Zahlen und Operatoren analysiert! Du nutzt parseInt weil eine Zahl analysiert wird, kein Text
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === ":") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

// Die Funktion incrementScore sorgt dafür, dass  die richigen Antworten Score hochgesetzt wird
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore;

}

// Die Funktion incrementWrongAnswer sorgt dafür, dass der falschen Antworten Score hochgeht
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore;

}

// Die Funktion displayAdditionQuestion sorgt dafür, dass Plus Fragen angezeigt werden
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

// Die Funktion displaySubtractQuestion sorgt dafür, dass dass Minus Fragen angezeigt werden
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

// Die Funktion displayMultiplyQuestion sorgt dafür, dass dass Mal Fragen angezeigt werden
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

// Die Funktion displayDivisionQuestion sorgt dafür, dass dass Minus Fragen angezeigt werden
function displayDivisionQuestion(operand1, operand2) {
    // Stelle sicher, dass operand1 mindestens das Dreifache von operand2 ist
    operand1 = Math.max(operand1, operand2 * 3);

    // Finde eine zufällige Anzahl von Vielfachen von operand2, die kleiner oder gleich operand1 sind
    let randomMultiples = Math.floor(Math.random() * 5) + 1; // Hier 5 ist die maximale Anzahl von Vielfachen, du kannst dies anpassen

    // Wähle eines der zufälligen Vielfachen aus
    operand1 = Math.floor(operand1 / operand2) * operand2 * randomMultiples;

    // Zeige die Zahlen und den Operator an
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = ":";
}
