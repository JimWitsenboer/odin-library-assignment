let myLibrary = [{
  title: "The Ruins of Gorlan",
  author: "John Flanagan",
  pages: "420",
  read: "Yes"
}, {
  title: "The Burning Bridge",
  author: "John Flanagan",
  pages: "60",
  read: "Yes"
}, {
  title: "The Icebound Land",
  author: "John Flanagan",
  pages: "420",
  read: "Yes"
}];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

let form = document.getElementById("book__submission")

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  let formattedFormData = Object.fromEntries(formData)
  addBookToLibrary(formattedFormData);
  let allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');

  const content = `
  <div class="book__card">
    <div class="card__image">
      <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="">
    </div>
    <div class="card__content">
      <div class="card__title">
        <strong>${formattedFormData.title}</strong>
      </div>
      <div class="card__author">
      ${formattedFormData.author}
      </div>
      <div class="card__pages">
        <i class="fa-solid fa-book" style="color: #962715;"></i> ${formattedFormData.pages}
      </div>
      <div class="card__read">
        <i class="fa-solid fa-square-check" style="color: #962715;"></i> ${formattedFormData.read === 'on' ? 'Yes' : 'Not yet'}
      </div>
    </div>
  </div>
    `;
  cards.innerHTML += content;
})


function addBookToLibrary(formEntries) {
  myLibrary.push(formEntries);
  console.log(myLibrary);
}

console.log(document.getElementById("open__form__btn"));
console.log(document.getElementById("container__form").style);
console.log(document.getElementById("close__form__btn"));



document.getElementById("open__form__btn").onclick = function() {
  document.getElementById("container__form").style.display = "block";
}

document.getElementById("close__form__btn").onclick = function() {
  document.getElementById("container__form").style.display = "none";
}


const cards = document.getElementById('book__cards');

myLibrary.forEach((book) => {
  // Create card element
  const card = document.createElement('div');
  card.classList = 'book__card';

  // Construct card content
  const content = `
    <div class="book__card">
      <div class="card__image">
        <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">
          <strong>${book.title}</strong>
        </div>
        <div class="card__author">
        ${book.author}
        </div>
        <div class="card__pages">
          <i class="fa-solid fa-book" style="color: #962715;"></i> ${book.pages}
        </div>
        <div class="card__read">
          <i class="fa-solid fa-square-check" style="color: #962715;"></i> ${book.read}
        </div>
      </div>
    </div>
      `;
  cards.innerHTML += content;
})
