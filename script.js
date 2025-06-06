document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    title.style.opacity = '0';
    setTimeout(() => {
        title.style.transition = 'opacity 1.5s';
        title.style.opacity = '1';
    }, 500);
});
