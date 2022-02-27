let smolPics = document.querySelectorAll(".smol-imgs img")
let preview = document.querySelector(".preview img")

for (let i = 0; i < smolPics.length; i++) {
    smolPics[i].addEventListener('click', () => {
        preview.src = smolPics[i].src
    })
}