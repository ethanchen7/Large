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

    visibleCollection.forEach(async (el) => {
        const rand = Math.random();
        if (rand < .15) {
            await setTimeout(toggleElement(el), 100);
        }
    });
});

const toggleElement = element => {
    setInterval( () => {
        element.classList.toggle('hiddenByColor');
    }, 1000);
};