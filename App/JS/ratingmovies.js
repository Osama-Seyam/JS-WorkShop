// opening and closing the model

let openBtn = document.getElementById("openBtn");
let addModal = document.getElementById("add-modal");
let backdrop = document.getElementById("backdrop");
let cancelBtn = document.getElementById("cancelBtn");

let openModel = () => {
    addModal.classList.toggle('visible');
    backdrop.classList.toggle('visible');
}

openBtn.addEventListener('click', openModel);
cancelBtn.addEventListener('click', openModel);
backdrop.addEventListener('click', openModel);

// taking input values

let inputData = document.querySelectorAll('.modal__content input')

let movieData = [];
let addMovie = () => {
    let title = inputData[0].value;
    let image = inputData[1].value;
    let rating = inputData[2].value;

    // data validation

    if (title.trim() == "" || image.trim() == "" || rating.trim() == "" || +rating < 0 || +rating > 5) {
        alert("please enter valid data");
    } else {
        let movieObject = {
            title: title,
            image: image,
            rating: rating
        }

        movieData.push(movieObject);
        renderMovie(movieObject.title, movieObject.image, movieObject.rating);
        openModel();
        checkMovieMessage();
    }
}

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addMovie)

// rendering Movies
let movieList = document.getElementById("movie-list");

let renderMovie = (title, img, rate) => {
    movieList.innerHTML += `
    <li class='movie-element'>
    <div class='movie-element__image'>
    <img src='${img}'>
    </div>
    <div class='movie-element__info'>
    <h2> ${title} </h2>
    <p> ${rate}/5 star </p>
    </div> 
    <button style="float: right;
    height: 40px;
    margin: auto ;" 
    class="btn btn--passive delete">Delete</button>
    </li>
    `
}

// after adding a movie
let entryText = document.getElementById('entry-text')

let checkMovieMessage = () => {
    if (movieList.childElementCount > 0) {
        entryText.classList.add('none')
    } else {
        entryText.classList.remove('none')
    }
}

//  deleting a movie

document.addEventListener('click', (t) => {
    if (t.target.classList.contains('delete')) {
        t.target.parentElement.remove();
    }
})