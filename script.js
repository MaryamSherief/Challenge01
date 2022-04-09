const submission = document.querySelector(".submission")
const thankyou = document.querySelector(".tohide")
const submitBtn = document.querySelector(".submit")
const ratings = document.querySelectorAll(".ratings > div")
const selected = document.querySelector(".selected")

let rate = undefined

ratings.forEach(rating => {
    rating.addEventListener("click", ()=> {
        ratings.forEach(rating => rating.classList.remove("clicked"))
        rating.classList.add("clicked")
        rate = rating.textContent
    })
})

submitBtn.addEventListener("click", ()=> {
    if (rate!==undefined) {
        submission.classList.add("hide")
        thankyou.classList.remove("hide")
        selected.textContent = `You selected ${rate} out of 5`
    }
})

