document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;

            if (buttonText === "=") 
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            } else if (buttonText === "Clear") {
                display.value = "";
            } else {
                display.value += buttonText;
            }
        });
    });
});
