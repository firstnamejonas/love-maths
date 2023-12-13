// Event-Listeners einfügen (Funktionen die ausgeführt werden, wenn ein Event eintritt)
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    // wenn die Seite geladen ist, spielt man zuerst das Addition Game
    runGame("addition")

});

// Die Funktion runGame sorgt dafür, dass das Game läuft sobald ein User auf die Seite kommt!
function runGame(gameType) {
    
    // kreiert 2 random Zahlen zwischen 1 & 25
    let num1 = Math.floor (Math.random () *25) +1;
    let num2 = Math.floor (Math.random () *25) +1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

// Die Funktion checkAnswer sorgt dafür, dass das Ergebnis überprüft wird
function checkAnswer() {

}

// Die Funktion calculateCorrectAnswer sorgt dafür, dass das richtige Ergebnis angezeigt wird
function calculateCorrectAnswer() {

}

// Die Funktion calculateCorrectAnswer sorgt dafür, dass  die richigen Antworten Score hochgesetzt wird
function calculateCorrectAnswer() {

}

// Die Funktion calculateCorrectAnswer sorgt dafür, dass der falschen Antworten Score hochgeht
function calculateCorrectAnswer() {

}

// Die Funktion displayAdditionQuestion sorgt dafür, dass Plus Fragen angezeigt werden
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

// Die Funktion calculateCorrectAnswer sorgt dafür, dass dass Minus Fragen angezeigt werden
function calculateCorrectAnswer() {

}

// Die Funktion calculateCorrectAnswer sorgt dafür, dass dass Mal Fragen angezeigt werden
function calculateCorrectAnswer() {

}