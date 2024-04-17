let names = [];
let nameInput = document.getElementById("nameInput");
let participantsList = document.getElementById("participants");
let winnerResult =  document.getElementById("result");
let errorMessage = document.getElementById("errorMessage");

function addName() {
    let nameRegex = /^[a-zA-Z\s]+$/; 
    
    if (nameInput.value !== '') {
        if (!nameRegex.test(nameInput.value)) {
            errorMessage.innerHTML = "* Please enter a valid name containing only letters and spaces";
            return;
        }
        
        if (names.includes(nameInput.value.toLowerCase().trim())) {
            errorMessage.innerHTML = "* This name has already been added. Please enter another name";
            return;
        } else {
            names.push(nameInput.value.toLowerCase());
            participantsList.innerHTML += "\t "+ nameInput.value.toLowerCase() + "\t ||";
            nameInput.value = "";
            errorMessage.innerHTML = "";
        }
    } else {
        errorMessage.innerHTML = "* Please enter a valid name";
    }
}

function selectWinner() {
    if (names.length === 0) {
        winnerResult.innerHTML = "No names have been added. Please add names to select a winner.";
        return;
    }

    let winnerIndex = parseInt(Math.random() * names.length);
    winnerResult.innerHTML =   "The winner is:  <span>" + names[winnerIndex] + "</span>" 
}
