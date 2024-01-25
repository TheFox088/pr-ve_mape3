document.addEventListener('DOMContentLoaded', function () {
    const gridListButton = document.querySelector('.grid-list-button');

    gridListButton.addEventListener('click', function () {
        gridListToggle(gridListButton);
    });
});

function gridListToggle(button) {
    button.classList.add('animation');
    button.classList.toggle('list');

    // Update the icon based on the current view
    const icon = button.querySelector('.icon');
    if (button.classList.contains('list')) {
        // Update for list view
        icon.innerHTML = '<span class="lines"><i></i><i></i><i></i><i></i></span>';
    } else {
        // Update for grid view
        icon.innerHTML = '<span class="dots"><i></i><i></i><i></i><i></i></span>';
    }

    // Remove animation class after animation completes
    setTimeout(() => {
        button.classList.remove('animation');
    }, 400);
}
