// Hamburger menu click shows nav
const mobileBtn = document.getElementById('mobile-cta');
nav = document.querySelector('nav');
mobileBtnExit = document.getElementById('mobile-exit');
hamburger = document.querySelector('.hamburger');


mobileBtn.addEventListener('click', () => {
    hamburger.classList.toggle('move');
    nav.classList.toggle('menu-btn');
})


// mobileBtnExit.addEventListener('click', () => {
//     nav.classList.remove('menu-btn');
// })

// Blur the background when open the menu

function on() {
    document.getElementById('overlay').style.display = 'block';
}

function off() {
    document.getElementById('overlay').style.display = 'none';
}

//hide navbar when scrolling down the page, display navbar when scrolling up the page

let lastScroll = 0;

$(window).scroll(function () {
    let scrollNow = $(this).scrollTop();

    if (scrollNow >= lastScroll) {
        $('.white-mid').toggleClass('hide_nav');

    }


    lastScroll = scrollNow;
})

// change info when click on different players card in statistic-section

const buttons = document.querySelectorAll('#one .button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerImg = document.querySelector('#one .img');
        const playerTeam = document.querySelector('#one .team');
        const playerName = document.querySelector('#one .name');
        const playerScore = document.querySelector('#one .numbers');

        const playerImgSrc = button.getAttribute('data-pic');
        const playerNameSrc = button.getAttribute('data-name');
        const playerGetPoints = button.getAttribute('data-points');
        const playerTeams = button.getAttribute('data-team');

        console.log(playerImgSrc);
        playerImg.src = `./Images/JPG/${playerImgSrc}`

        console.log(playerTeams);
        playerTeam.textContent = playerTeams;
        playerName.textContent = playerNameSrc;
        playerScore.textContent = playerGetPoints;
    });
});

const secondButtons = document.querySelectorAll('#two .button');

secondButtons.forEach(secondButton => {
    secondButton.addEventListener('click', () => {
        const playerImg = document.querySelector('#two .img');
        const playerTeam = document.querySelector('#two .team');
        const playerName = document.querySelector('#two .name');
        const playerScore = document.querySelector('#two .numbers');

        const playerImgSrc = secondButton.getAttribute('data-pic')
        const playerNameSrc = secondButton.getAttribute('data-name');
        const playerGetPoints = secondButton.getAttribute('data-rebs');
        const playerTeams = secondButton.getAttribute('data-team');

        console.log(playerImgSrc)

        playerImg.src = `./Images/JPG/${playerImgSrc}`
        playerTeam.textContent = playerTeams;
        playerName.textContent = playerNameSrc;
        playerScore.textContent = playerGetPoints;
    });
});

const thirdButtons = document.querySelectorAll('#three .button');

thirdButtons.forEach(thirdButton => {
    thirdButton.addEventListener('click', () => {
        const playerImg = document.querySelector('#three .img');
        const playerTeam = document.querySelector('#three .team');
        const playerName = document.querySelector('#three .name');
        const playerScore = document.querySelector('#three .numbers');

        const playerImgSrc = thirdButton.getAttribute('data-pic')
        const playerNameSrc = thirdButton.getAttribute('data-name');
        const playerGetPoints = thirdButton.getAttribute('data-threes');
        const playerTeams = thirdButton.getAttribute('data-team');

        console.log(playerImgSrc)

        playerImg.src = `./Images/JPG/${playerImgSrc}`
        playerTeam.textContent = playerTeams;
        playerName.textContent = playerNameSrc;
        playerScore.textContent = playerGetPoints;
    });
});

const fourthButtons = document.querySelectorAll('#four .button');

fourthButtons.forEach(fourthButton => {
    fourthButton.addEventListener('click', () => {
        const playerImg = document.querySelector('#four .img');
        const playerTeam = document.querySelector('#four .team');
        const playerName = document.querySelector('#four .name');
        const playerScore = document.querySelector('#four .numbers');

        const playerImgSrc = fourthButton.getAttribute('data-pic')
        const playerNameSrc = fourthButton.getAttribute('data-name');
        const playerGetPoints = fourthButton.getAttribute('data-stls');
        const playerTeams = fourthButton.getAttribute('data-team');

        console.log(playerImgSrc)

        playerImg.src = `./Images/JPG/${playerImgSrc}`
        playerTeam.textContent = playerTeams;
        playerName.textContent = playerNameSrc;
        playerScore.textContent = playerGetPoints;
        fourthButton.classList.toggle('yellow');
    });
});


// Fluid image popup
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


