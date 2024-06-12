document.querySelectorAll('.zoom').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.style.display = 'flex'; // Ajustar para que sea un flex container
        modal.style.justifyContent = 'center'; // Centrar horizontalmente
        modal.style.alignItems = 'center'; // Centrar verticalmente
        modal.innerHTML = `<img src="${src}" class="modal-content"><span class="close">&times;</span>`;
        document.body.appendChild(modal);

        document.querySelector('.close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});
