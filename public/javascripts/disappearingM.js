addEventListener('DOMContentLoaded', () => {

    const collection = document.querySelectorAll('.disappearingM');
    let visibleCollection = [];
    for (let i = 0; i < (17 * 25); i++) {
        const rand = Math.random();
        if (rand < .55) {
            collection[i].classList.add('hiddenByColor');
        } else {
            visibleCollection.push(collection[i]);
        };
    };

    visibleCollection.forEach((el) => {
        const rand = Math.random();
        if (rand < .15) {
            setTimeout(toggleElement(el), 3000);
            // toggleElement(el);
        }
    });
});

function toggleElement(element) {
    setInterval(() => {
        element.classList.toggle('hiddenByColor');
    }, 1000);
};