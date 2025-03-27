const toggleButton = document.getElementById('theme-toggle');
const colorPicker = document.getElementById('primary-color');
const saveColorButton = document.getElementById('save-color');
    
const savedTheme = localStorage.getItem('theme') || 'light';
const savedColor = localStorage.getItem('primaryColor');
if (savedColor) {
    document.documentElement.style.setProperty('--primary-color', savedColor);
}
document.body.classList.add(savedTheme);

toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('light')) {
        document.body.className = 'dark';
        localStorage.setItem('theme', 'dark');
    } else if (document.body.classList.contains('dark')) {
        document.body.className = 'colorful';
        localStorage.setItem('theme', 'colorful');
    } else {
        document.body.className = 'light';
        localStorage.setItem('theme', 'light');
    }
});

saveColorButton.addEventListener('click', () => {
    const color = colorPicker.value;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
});