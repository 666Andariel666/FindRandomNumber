const myValue = document.querySelector('.myValue'),
    randomFinder = document.querySelector('.randomFinder')
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
const randomNumber = random(1, 100);
myValue.addEventListener('input', function () {
    let num = +myValue.value;
    if (num === randomNumber) {
        randomFinder.innerHTML = 'Yes!'
        randomFinder.style.color = 'green'
        randomFinder.style.fontSize = '50px'
    }
    else if (num <= randomNumber + 10 && num >= randomNumber - 10) {
        randomFinder.innerHTML = 'Hot!'
        randomFinder.style.color = 'red'
        randomFinder.style.fontSize = ''

    }
    else if (num < randomNumber + 20 && num > randomNumber + 10 || num < randomNumber - 10 && num > randomNumber - 20) {
        randomFinder.innerHTML = 'Warm!'
        randomFinder.style.color = 'yellow'
        randomFinder.style.fontSize = ''

    }
    else {
        randomFinder.innerHTML = 'Cold!'
        randomFinder.style.color = 'blue'
        randomFinder.style.fontSize = ''

    }
})