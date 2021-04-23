const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => AnimateElements());
// document
//     .querySelector('main')
//     .addEventListener('click', () => AnimateElements());

function AnimateElements() {
    document.querySelector('nav ul').classList.toggle('active');

    document.querySelectorAll('nav li').forEach((element, index) => {
        if (element.style.animation) element.style.animation = '';
        else
            element.style.animation = `linkAnimate 0.5s ease forwards ${
                index / 5 + 0.2
            }s`;
    });
    // document.querySelector('.home-btn').classList.toggle('a-actives');
    hamburger.classList.toggle('animate');
    // document.body.classList.toggle('body-active');

    // document.querySelector('.overlay').style.backgroundColor='rgba(0,0,0,0.3)'
}
