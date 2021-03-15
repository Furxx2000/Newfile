const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');
        //Dynamic change text and image
        const originalSrc = preview.getAttribute('data-original');
        console.log(originalSrc);
        original.src = `./Images/JPG/${originalSrc}`
        const altText = preview.alt;
        caption.textContent = preview.alt
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
        original.classList.remove('open');
    }
})