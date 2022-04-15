addEventListener('DOMContentLoaded', () => {

    const collection = document.querySelectorAll('.disappearingM');

    let visibleCollection = getVisibleCollection(collection);
    let toggleCollection = getToggleCollection(visibleCollection);

    // toggleCollection.forEach(el => toggleElement(el));
    animate(toggleCollection);
});

function getVisibleCollection(collection) {
    let visibleCollection = []
    for (let i = 0; i < collection.length; i++) {
        const rand = Math.random();
        if (rand < .55) {
            collection[i].classList.add('hiddenByColor');
        } else {
            visibleCollection.push(collection[i]);
        };
    };
    return visibleCollection;
}

function getToggleCollection(collection) {

    return collection.filter(el => {
        const rand = Math.random();
        if (rand < .15) {
            return el;
        }
    });
}

// function toggleElement(element) {
//     setInterval(() => {
//         element.classList.toggle('hiddenByColor');
//     }, 1000);
// };

function toggleElement(element, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            element.classList.toggle('hiddenByColor');
            resolve();
        }, time)
    })
};

async function animate(collection) {

    while (true) {
        for (let i = 0; i < collection.length; i++) {
            await toggleElement(collection[i], 100);
            // if (i === 0) console.log(collection[i].classList);
        }
        for (let i = collection.length - 1; i >= 0; i--) {
            console.log(i);
            console.log(collection[i])
            await toggleElement(collection[i], 100);
            // if (i === collection.length - 1) console.log(collection[i].classList);
        };
    };
};