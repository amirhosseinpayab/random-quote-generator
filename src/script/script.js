const array = [
    "Fall seven times and stand up eight",
    "Change your thoughts and you change your world.",
    "Successful people don’t always know the right answer, but they keep moving anyway",
    "It is never too late to be what you might have been",
    "Don’t be afraid to be yourself",
    "Every day is a new opportunity to make a difference"
]

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", function () {
    const paragraph = document.querySelector(".paragraph")
    paragraph.textContent = array[getRandomNumber(0, array.length)]
})
