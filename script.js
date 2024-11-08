// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Cursor Effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('customCursor');
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => document.getElementById('customCursor').classList.add('expand'));
    link.addEventListener('mouseleave', () => document.getElementById('customCursor').classList.remove('expand'));
});

// Additional Animations...
