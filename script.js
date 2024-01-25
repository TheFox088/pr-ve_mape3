const gridListButtons = document.querySelectorAll('.grid-list-button');

gridListButtons.forEach(button => {
    button.addEventListener('click', gridListToggle);
});

function gridListToggle() {
    let originalButton = this;

    originalButton.classList.add('animation');
    originalButton.classList.toggle('list');

    // Update the icon based on the current view
    const icon = originalButton.querySelector('.icon');
    if (originalButton.classList.contains('list')) {
        // Update for list view
        icon.innerHTML = '<div class="lines"><i></i><i></i><i></i><i></i></div>';
    } else {
        // Update for grid view
        icon.innerHTML = '<div class="dots"><i></i><i></i><i></i><i></i></div>';
    }

    // Remove animation class after animation completes
    setTimeout(() => {
        originalButton.classList.remove('animation');
    }, 400);
}
