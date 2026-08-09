/* =========================================
   TYPING EFFECT
========================================= */
const typingElement = document.getElementById("typing");
const phrases = [
    "Salesforce Developer",
    "Sales Cloud & Service Cloud",
    "Automation & Integrations",
    "Building Salesforce Solutions"
];
let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;
function typeWriter() {
    const phrase = phrases[phraseIndex];
    if (!deleting) {
        typingElement.textContent =
            phrase.substring(0, characterIndex + 1);
        characterIndex++;
        if (characterIndex === phrase.length) {
            deleting = true;
            setTimeout(typeWriter, 1600);
            return;
        }
    } else {
        typingElement.textContent =
            phrase.substring(0, characterIndex - 1);
        characterIndex--;
        if (characterIndex === 0) {
            deleting = false;
            phraseIndex++;
            if (phraseIndex >= phrases.length) {
                phraseIndex = 0;
            }
        }
    }
    setTimeout(
        typeWriter,
        deleting ? 45 : 80
    );
}
typeWriter();
/* =========================================
   TRAILHEAD COUNTER
========================================= */
const pointsElement =
    document.getElementById("points");
let counterStarted = false;
function animatePoints() {
    if (counterStarted) {
        return;
    }
    const card =
        document.querySelector(".trajectory");
    const position =
        card.getBoundingClientRect().top;
    if (position < window.innerHeight * 0.8) {
        counterStarted = true;
        let current = 0;
        const target = 410;
        const interval = setInterval(() => {
            current += 4;
            pointsElement.textContent = current;
            if (current >= target) {
                pointsElement.textContent = target;
                clearInterval(interval);
            }
        }, 20);
    }
}
window.addEventListener(
    "scroll",
    animatePoints
);
/* =========================================
   CAROUSEL
========================================= */
const carouselElement =
    document.getElementById("journeyCarousel");
const carousel =
    new bootstrap.Carousel(
        carouselElement,
        {
            interval: false,
            touch: true
        }
    );