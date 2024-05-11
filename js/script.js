
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
