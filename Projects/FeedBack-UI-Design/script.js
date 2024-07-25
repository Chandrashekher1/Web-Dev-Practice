const btn = document.querySelector('#send');
const panel = document.querySelector('#panel');
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');

let selectRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectRating = e.target.nextElementSibling.innerHTML;
    }
});

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active');
    });
}

btn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
});
