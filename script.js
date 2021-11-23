let closePlayer = document.querySelector('#close-player');
let musicPlayer = document.querySelector('.music__player');
let cardContainer = document.querySelector('.container .card__container');

closePlayer.onclick = () => {
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    cardContainer.classList.toggle('active');   
}

let cards = document.querySelectorAll('.container .card__container .card');

cards.forEach(card => {

    card.onclick = () => {
        let src = card.getAttribute('data-src');
        let text = card.querySelector('.card__content h3').innerText;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        cardContainer.classList.add('active');
        musicPlayer.querySelector('h3').innerText = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }
})