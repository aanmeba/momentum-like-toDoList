const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

fetch(`https://type.fit/api/quotes`)
  .then((res) => res.json())
  .then((data) => {
    const todaysQuote = data[Math.floor(Math.random() * data.length)];
    quote.innerText = `"${todaysQuote.text}"`;
    author.innerText = `- ${todaysQuote.author}`;
  });
