/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await res.json();

  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingbadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Breaking Bad App";
  element.innerHTML = "Cargando...";
  //   await fetchQuote();
  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuoteButton = document.createElement("button");
  nextQuoteButton.innerText = "Next Quote";

  const renderQuote = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
  };

  nextQuoteButton.addEventListener("click", async () => {
    element.innerHTML = "Cargando...";
    const quote = await fetchQuote();
    renderQuote(quote);
  });

  fetchQuote().then(renderQuote);
};
