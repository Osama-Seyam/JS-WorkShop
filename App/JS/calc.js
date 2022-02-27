let counter = document.getElementsByClassName("counter")

for (let i = 0; i < counter.length; i++) {
    let updateCount = () => {
        let target = +counter[i].getAttribute("data-target")
        let intext = +counter[i].innerText

        let speed = target / 100;

        if (intext < target) {
            counter[i].innerText = intext + speed;
            setTimeout(updateCount, 5);
        } else {
            intext.innerText = speed
        }
    }
    updateCount();
}