// Sample data for Tarot cards (replace with your own data)
const tarotCards = [
  { name: "Card 1", description: "Description of Card 1", image: "0_The_Fool.jpg" },
  { name: "Card 2", description: "Description of Card 2", image: "1_The_Magician.jpg" },
  { name: "Card 3", description: "Description of Card 3", image: "2_The_High_Priestess.jpg" },
  { name: "Card 4", description: "Description of Card 4", image: "3_The_Empress.jpg" },
  { name: "Card 5", description: "Description of Card 5", image: "4_The_Emperor.jpg" },
  { name: "Card 6", description: "Description of Card 6", image: "5_The_Hierophant.jpg" },
  { name: "Card 7", description: "Description of Card 1", image: "0_The_Fool.jpg" },
  { name: "Card 8", description: "Description of Card 2", image: "1_The_Magician.jpg" },
  { name: "Card 9", description: "Description of Card 3", image: "2_The_High_Priestess.jpg" },
  { name: "Card 10", description: "Description of Card 4", image: "3_The_Empress.jpg" },
  { name: "Card 11", description: "Description of Card 5", image: "4_The_Emperor.jpg" },
  { name: "Card 12", description: "Description of Card 6", image: "5_The_Hierophant.jpg" },
  { name: "Card 13", description: "Description of Card 1", image: "0_The_Fool.jpg" },
  { name: "Card 14", description: "Description of Card 2", image: "1_The_Magician.jpg" },
  { name: "Card 15", description: "Description of Card 3", image: "2_The_High_Priestess.jpg" },
  { name: "Card 16", description: "Description of Card 4", image: "3_The_Empress.jpg" },
  { name: "Card 17", description: "Description of Card 5", image: "4_The_Emperor.jpg" },
  { name: "Card 18", description: "Description of Card 6", image: "5_The_Hierophant.jpg" },
  // Add more cards as needed
];

// Function to clear the reading result
function clearReadingResult() {
  document.getElementById("cardReading").innerHTML = ''; // Clear the card reading
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to draw one card randomly
function drawOneCard() {
  clearReadingResult(); // Clear previous readings
  shuffleArray(tarotCards); // Shuffle the deck before drawing
  const card = tarotCards[0]; // Draw the first card after shuffling
  displayCard(card); // Display the card
}

// Function to draw three card spread
function drawThreeCardSpread() {
  clearReadingResult(); // Clear previous readings
  shuffleArray(tarotCards); // Shuffle the deck before drawing
  const spread = tarotCards.slice(0, 3); // Draw the first 3 cards after shuffling
  displaySpread(spread); // Display the spread
}

// Function to draw five card spread
function drawFiveCardSpread() {
  clearReadingResult(); // Clear previous readings
  shuffleArray(tarotCards); // Shuffle the deck before drawing
  const spread = tarotCards.slice(0, 5); // Draw the first 5 cards after shuffling
  displaySpread(spread); // Display the spread
}

// Function to display a card
function displayCard(card) {
  const cardReading = document.getElementById("cardReading");
  const cardElement = document.createElement("div");
  cardElement.classList.add("card-info");
  cardElement.innerHTML = `
    <h3 class="card-title">${card.name}</h3>
    <img src="${card.image}" alt="${card.name}" class="card-image">
    <p class="card-description">${card.description}</p>
  `;
  cardReading.appendChild(cardElement);
}

// Function to display a spread of cards
function displaySpread(spread) {
  const cardReading = document.getElementById("cardReading");
  spread.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card-info");
    cardElement.innerHTML = `
      <h3 class="card-title">${card.name}</h3>
      <img src="${card.image}" alt="${card.name}" class="card-image">
      <p class="card-description">${card.description}</p>
    `;
    cardReading.appendChild(cardElement);
  });
}

// Function to display the pop-up after a delay
function displayPopup() {
  setTimeout(function() {
    document.getElementById("popupContainer").style.display = "block";
  }, 5000); // 5000 milliseconds = 5 seconds
}

// Function to close the pop-up
function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

// Call the displayPopup function to start the timer
displayPopup();


  // Initialize MIDI.js
  MIDI.loadPlugin({
    soundfontUrl: "https://raw.githubusercontent.com/mudcube/MIDI.js/master/examples/soundfont/",
    instrument: "acoustic_grand_piano", // Instrument to use (e.g., piano)
    onsuccess: function() {
      // Load and play MIDI file
      MIDI.Player.loadFile("aquarius09.mid", function() {
        MIDI.Player.start();
      });
    }
  });


