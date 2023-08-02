const rateBtns = document.querySelectorAll("li")
let rate;

rateBtns.forEach(el => {
    el.addEventListener("click", (e) => {
        rateBtns.forEach(button => {
            button.classList.remove("clicked")
        })
        e.target.classList.add("clicked")
        rate = e.target.textContent
    })
    
})

const submitRating = document.getElementById("submit-rating")
const selectedRatingEl = document.querySelector(".selected-rating")

submitRating.addEventListener("click", showThanks)

function showThanks() {
    if (!rate) {
        return
    }
    const selectedArray = selectedRatingEl.textContent.split(" ")
    selectedArray.splice(2, 0, `${rate}`)
    selectedRatingEl.textContent = selectedArray.join(" ")

    const thankCard = document.querySelector(".thank-card")
    thankCard.classList.add("visible")

    const ratingCard = document.querySelector(".rating-card")
    ratingCard.classList.add("hidden")
}