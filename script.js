let myLibrary = [{
  title: "The Ruins of Gorlan",
  author: "John Flanagan",
  pages: "420",
  read: "Not yet"
}, {
  title: "The Burning Bridge",
  author: "John Flanagan",
  pages: "60",
  read: "Not yet"
}, {
  title: "The Icebound Land",
  author: "John Flanagan",
  pages: "420",
  read: "Not yet"
}];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

let form = document.getElementById("book__submission")
let bookCards = document.querySelectorAll('book__card')
console.log(bookCards)

// Add newly created book to grid and array

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
}


// Open and close form
document.getElementById("open__form__btn").onclick = function() {
  document.getElementById("container__form").style.display = "block";
}

document.getElementById("close__form__btn").onclick = function() {
  document.getElementById("container__form").style.display = "none";
}

// Insert already saved books

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
        <div style="margin-left: auto;">
          <i class="fa-solid fa-xmark" id="delete__book" style="color: #1e1e20; font-size: 20px; position: absolute; top: 10px; right:10px;"></i>
        </div>
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
        <div style="margin-left: auto;">
        <i class="fa-solid fa-check" id="read__book" style="color: #1e1e20; font-size: 20px; position: absolute; bottom: 10px; right:10px;"></i>
      </div>
      </div>
    </div>
      `;
  cards.innerHTML += content;
})

// Delete card

document.querySelectorAll("#delete__book").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.target.parentNode.parentNode.parentNode.remove();
  });
});

// Mark as read

document.querySelectorAll("#read__book").forEach((card) => {
  card.addEventListener("click", (event) => {
    console.log(event.currentTarget.classList);
    event.target.parentNode.parentNode.querySelector('.card__read').innerHTML = '          <i class="fa-solid fa-square-check" style="color: #962715;"></i> Yes ';
  });
});
