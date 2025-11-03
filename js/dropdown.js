const profilePic = document.getElementById('icon');
const dropdownMenu = document.getElementById('dropdownMenu')

icon.addEventListener('click', () => {
    dropdownMenu.style.display =
        dropdownMenu.style.dislay === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
    if (!icon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});