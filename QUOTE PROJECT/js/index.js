const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only way to do great work is to love what you do.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Your time is limited, so don't waste it living someone else's life.",
  "Don't watch the clock; do what it does. Keep going.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "The best revenge is massive success.",
  "Your life does not get better by chance, it gets better by change.",
  "Believe you can and you're halfway there.",
  "It does not matter how slowly you go as long as you do not stop.",
  "The harder the conflict, the more glorious the triumph.",
  "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "Do not wait to strike till the iron is hot; but make it hot by striking.",
  "Your only limit is your mind."
];


// Select the button and quote elements
const quoteBtn = document.getElementById("quote-btn");
const quoteText = document.getElementById("quote");

// Define a function to change the quote
const changeQuote = () => {
  // Generate a random index based on the length of the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Set the text content of the quote element to a random quote
  quoteText.textContent = quotes[randomIndex];
};

// Add an event listener to the button that calls the changeQuote function when clicked
quoteBtn.addEventListener("click", changeQuote);
