const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");

console.log("Webpage loaded and script connected successfully.");

function handleGreeting() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        messageArea.textContent = "Please enter your name.";
    } else {
        mainHeading.textContent = "Hello, " + userName + "!";
        messageArea.textContent = "Greeting displayed successfully!";
    }
}

function handleChangeBackground() {
    document.body.style.backgroundColor = "lightblue";
    messageArea.textContent = "Background color changed.";
    console.log("Background color was changed.");
}

function handleReset() {
    mainHeading.textContent = "Welcome to the Event Page";
    nameInput.value = "";
    document.body.style.backgroundColor = "#f3f4f6";
    messageArea.textContent = "Enter your name and select an action.";
    console.log("Page was reset to original state.");
}

function handleTyping(event) {
    const currentText = event.target.value;
    if (currentText !== "") {
        messageArea.textContent = "You are typing: " + currentText;
    } else {
        messageArea.textContent = "Enter your name and select an action.";
    }
}

function handleMouseOver() {
    console.log("The mouse is over the greeting button.");
}

greetingButton.addEventListener("click", handleGreeting);
backgroundButton.addEventListener("click", handleChangeBackground);
resetButton.addEventListener("click", handleReset);
nameInput.addEventListener("input", handleTyping);
greetingButton.addEventListener("mouseover", handleMouseOver);