function generateRandomCard() {
    const suits = ["hearts", "spades", "clubs", "diamonds"];
    const cardValues = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king",
      "ace",
    ];
    const suitIndex = Math.floor(Math.random() * 4);
    const cardIndex = Math.floor(Math.random() * 13);
    const suit = suits[suitIndex];
    const value = cardValues[cardIndex];
    return { suit, value };
  }
  
  function generateCardHTML(card) {
    const { suit, value } = card;
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", suit);
    cardElement.innerHTML = `
      <span class="card-value">${value.toUpperCase()}</span>
      <span class="card-suit">${getSuitSymbol(suit)}</span>
    `;
    return cardElement;
  }
  
  function getSuitSymbol(suit) {
    switch (suit) {
      case "hearts":
        return "♥";
      case "spades":
        return "♠";
      case "clubs":
        return "♣";
      case "diamonds":
        return "♦";
      default:
        return "";
    }
  }
  
  function countdown(seconds) {
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = seconds;
  
    const intervalId = setInterval(() => {
      seconds--;
      countdownElement.innerHTML = seconds;
      if (seconds === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  const cardContainer = document.getElementById("card-container");
  
  function displayRandomCard() {
    const card = generateRandomCard();
    const cardElement = generateCardHTML(card);
    cardContainer.innerHTML = "";
    cardContainer.appendChild(cardElement);
  }
  
  window.addEventListener("load", displayRandomCard);
  
  const button = document.getElementById("new-card-button");
  
  button.addEventListener("click", displayRandomCard);
  
  const intervalId = setInterval(displayRandomCard, 10000);
  
  function stopCardGenerator() {
    clearInterval(intervalId);
  }
  
  const stopButton = document.getElementById("stop-button");
  
  stopButton.addEventListener("click", stopCardGenerator);
  
  const widthInput = document.getElementById("width-input");
  const heightInput = document.getElementById("height-input");
  const cardContainer = document.getElementById("card-container");
  
  function updateCardContainerSize() {
    const width = widthInput.value;
    const height = heightInput.value;
    cardContainer.style.width = `${width}px`;
    cardContainer.style.height = `${height}px`;
  }
  
  widthInput.addEventListener("input", updateCardContainerSize);
  heightInput.addEventListener("input", updateCardContainerSize);
  