document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Project details coming soon!');
        });
    });
});