// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is successfully connected and running!");

    // Feature 1: Dynamic Greeting based on the time of day
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingText = "Hello!";

        if (currentHour < 12) {
            greetingText = "Good morning! Ready to code?";
        } else if (currentHour < 18) {
            greetingText = "Good afternoon! Hope your project is going well.";
        } else {
            greetingText = "Good evening! Burning the midnight oil?";
        }

        greetingElement.textContent = greetingText;
    }

    // Feature 2: Interactive Click Counter
    const counterButton = document.getElementById("counter-btn");
    const counterDisplay = document.getElementById("counter-value");
    
    if (counterButton && counterDisplay) {
        let count = 0;
        counterButton.addEventListener("click", () => {
            count++;
            counterDisplay.textContent = count;
        });
    }

    // Feature 3: Dark/Light Mode Theme Toggle
    const themeButton = document.getElementById("theme-toggle-btn");
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            
            // Update button text based on current mode
            if (document.body.classList.contains("dark-mode")) {
                themeButton.textContent = "Switch to Light Mode";
            } else {
                themeButton.textContent = "Switch to Dark Mode";
            }
        });
    }
});