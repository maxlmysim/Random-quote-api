async function getQuote() {
  const url = "https://favqs.com/api/qotd";
  const res = await fetch(url);
  const data = await res.json();

  quote.innerHTML = data.quote.body;
  quoteAuthor.innerHTML = "- " + data.quote.author;
  getImage(data.quote.author);
}

async function getImage(name) {
  let nameAuthor = name.split(" ").join("_");
  let url = `https://en.wikipedia.org/w/api.php?action=query&titles=${nameAuthor}&prop=pageimages&format=json&pithumbsize=250&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  const numPages = Object.keys(data.query.pages);
  const linkPage = data.query.pages[numPages[0]].thumbnail?.source;

  if (linkPage) {
    document.querySelector(".page-author").src = linkPage;
  } else {
    document.querySelector(".page-author").src = "./assets/img/img.jpeg";
  }
}

const buttonNewQuote = document.querySelector(".container__button");
const quote = document.querySelector(".container__quote");
const quoteAuthor = document.querySelector(".container__quote-author");

buttonNewQuote.addEventListener("click", getQuote);

