let button = document.getElementsByTagName("button");
let disc = document.getElementsByClassName("disc");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {
        if (disc[i].style.height == 0) {
            button[i].classList.add("active")
            disc[i].style.height = disc[i].scrollHeight + "px";
            disc[i].style.margin = "10px"
        } else {
            disc[i].style.height = null
            button[i].classList.remove("active")
            disc[i].style.margin = null
        }
    })
}