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

getQuote()


console.log(`Вёрстка +10

При загрузке страницы приложения отображается рандомная цитата +10

При перезагрузке страницы цитата обновляется (заменяется на другую) +10

Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10

Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10

Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** 0

Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10, добавлены api Wikipedia, для показа фото автора`);