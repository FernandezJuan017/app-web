//Creo DOM elements//
const imgs = document.querySelector(".imgs")
const imgsCollection = document.querySelectorAll(".img")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

prevBtn.addEventListener("click",prevSlide)
nextBtn.addEventListener("click",nextSlide)

//Utility vars//
let index = 0

//Set Interval//
let interval = setInterval(startInterval, 5000)

function startInterval() {
    index++
    moveCarrusel()
}

function resetInterval() {
    clearInterval(interval)
    //interval = setInterval(startInterval, 500)
}

function moveCarrusel() {
    // Last image
    if (index > imgsCollection.length -1) {
        index = 0
    } else if (index < 0) {
        index = imgsCollection.length -1
    }

    imgs.style.transform = `translateX(-${index * 800}px)`
}

//elementos del nav
function prevSlide() {
    index--
    //resetInterval
    clearInterval(interval)
    moveCarrusel()
}

function nextSlide() {
    index++
    //resetInterval
    clearInterval(interval)
    moveCarrusel()
}