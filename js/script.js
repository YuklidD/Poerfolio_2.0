
// JavaScript to update project name when radio button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('.carousel input[name="slides"]');
    const projectName = document.getElementById('project-name');

    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('click', function() {
            const projectNameText = this.previousElementSibling.textContent;
            projectName.textContent = projectNameText;
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Set the current year in the span element
    var currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan !== null) {
        currentYearSpan.innerText = currentYear;
    } else {
        console.error("Element with ID 'currentYear' not found.");
    }
});
