const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active');
    document.querySelectorAll('nav a').forEach((element, index) => {
        if (element.style.animation) {
            element.style.animation = '';
        } else {
            element.style.animation = `linkAnimate ${0.7}s ease forwards ${
                index / 7 + 0.3
            }s`;
        }
    });
    hamburger.classList.toggle('animate');
});
