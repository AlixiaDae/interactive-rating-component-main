const rateBtns = document.querySelectorAll("li")

rateBtns.forEach(el => {
    el.addEventListener("click", (e) => {
        rateBtns.forEach(button => {
            button.classList.remove("clicked")
        })
        e.target.classList.add("clicked")
    })
    
})