// Sample data for Tarot cards (replace with your own data)
const tarotCards = [
  { name: "The Fool", description: "Doot de doot de doot, whatever could possibly happen to me on this unknown path to adventure? Oh who cares, I'm sure it will all be ups and no downs", image: "00fool.jpg" },
  { name: "The Magician", description: "Tools and toys can be the same thing if you only play and never work.", image: "TheMagician.jpg" },
  { name: "The High Priestess", description: "Pshhhhhhh lemme hit this a sec and then I'ma tell you the secret that is at the heart of all existence... *hits bong* *hits it again* *long exhale* Okay, okay... what were we talking about?", image: "02priestess.jpg" },
  { name: "The Empress", description: "Description of Card 4", image: "03empress.jpg" },
  { name: "The Emperor", description: "Description of Card 5", image: "04emperor.jpg" },
  { name: "The Hierophant", description: "Description of Card 6", image: "05hierophant.jpg" },
  { name: "The Lovers", description: "Description of Card 1", image: "06lovers.jpg" },
  { name: "The Chariot", description: "Description of Card 2", image: "07chariot.jpg" },
  { name: "Strength", description: "Description of Card 3", image: "08strength.jpg" },
  { name: "The Hermit", description: "Description of Card 4", image: "09hermit.jpg" },
  { name: "The Wheel of Fortune", description: "Description of Card 5", image: "10wheel.jpg" },
  { name: "Justice", description: "Description of Card 6", image: "11justice.jpg" },
  { name: "The Hanged Man", description: "Description of Card 1", image: "12hangedman.jpg" },
  { name: "Death", description: "I'm sorry, but was this left out all day? Outside? In the sun? Uncovered? Thank you, if you need me I'll be in the vomitorium.", image: "Death.jpg" },
  { name: "Temperance", description: "Description of Card 3", image: "14temperance.jpg" },
  { name: "The Devil", description: "Description of Card 4", image: "15devil.jpg" },
  { name: "The Tower", description: "Description of Card 5", image: "16tower.jpg" },
  { name: "The Star", description: "Description", image: "17star.jpg" },
  { name: "The Moon", description: "Description", image: "18moon.jpg" },
  { name: "The Sun", description: "BLAZE, BETCH! Glow like the glory of a thousand suns that are having a spa day.", image: "19sun.jpg" },
  { name: "Judgement", description: "Dun dun DUNNNNNNNNNNNNNNNNNNN. Dramatic reveal!", image: "20judgement.jpg" },
  { name: "The World", description: "Lookitchoo! Getting all high and up oer errything. Seems like you get all them jealous bitchezz eating out of the palm of your hand. Keep it up!", image: "21world.jpg" },
  { name: "Ace of Wands", description: "Description of Card 3", image: "wands01ace.jpg" },    
  { name: "Two of Wands", description: "Description of Card 3", image: "wands02.jpg" },   
  { name: "Three of Wands", description: "Description of Card 3", image: "wands03.jpg" },    
  { name: "Four of Wands", description: "Description of Card 3", image: "wands04.jpg" }, 
  { name: "Five of Wands", description: "Description of Card 3", image: "wands05.jpg" },    
  { name: "Six of Wands", description: "Description of Card 3", image: "wands06.jpg" },   
  { name: "Seven of Wands", description: "Description of Card 3", image: "wands07.jpg" },    
  { name: "Eight of Wands", description: "Description of Card 3", image: "wands08.jpg" }, 
  { name: "Nine of Wands", description: "Description of Card 3", image: "wands09.jpg" },    
  { name: "Ten of Wands", description: "Description of Card 3", image: "wands10.jpg" },   
  { name: "Page of Wands", description: "Description of Card 3", image: "wands11page.jpg" },    
  { name: "Knight of Wands", description: "Description of Card 3", image: "wands12knight.jpg" }, 
  { name: "Queen of Wands", description: "Description of Card 3", image: "wands13queen.jpg" },    
  { name: "King of Wands", description: "Description of Card 3", image: "wands14king.jpg" },     
  { name: "Ace of Cups", description: "Description of Card 3", image: "cups01ace.jpg" },    
  { name: "Two of Cups", description: "Description of Card 3", image: "cups02.jpg" },   
  { name: "Three of Cups", description: "Description of Card 3", image: "cups03.jpg" },    
  { name: "Four of Cups", description: "Description of Card 3", image: "cups04.jpg" }, 
  { name: "Five of Cups", description: "Description of Card 3", image: "cups05.jpg" },    
  { name: "Six of Cups", description: "Description of Card 3", image: "cups06.jpg" },   
  { name: "Seven of Cups", description: "Description of Card 3", image: "cups07.jpg" },    
  { name: "Eight of Cups", description: "Description of Card 3", image: "cups08.jpg" }, 
  { name: "Nine of Cups", description: "Description of Card 3", image: "cups09.jpg" },    
  { name: "Ten of Cups", description: "Description of Card 3", image: "cups10.jpg" },   
  { name: "Page of Cups", description: "Description of Card 3", image: "cups11page.jpg" },    
  { name: "Knight of Cups", description: "Description of Card 3", image: "cups12knight.jpg" }, 
  { name: "Queen of Cups", description: "Description of Card 3", image: "cups13queen.jpg" },    
  { name: "King of Cups", description: "Description of Card 3", image: "cups14king.jpg" },   
  { name: "Ace of Swords", description: "Description of Card 3", image: "swords01ace.jpg" },    
  { name: "Two of Swords", description: "Description of Card 3", image: "swords02.jpg" },   
  { name: "Three of Swords", description: "Description of Card 3", image: "swords03.jpg" },    
  { name: "Four of Swords", description: "Description of Card 3", image: "swords04.jpg" }, 
  { name: "Five of Swords", description: "Description of Card 3", image: "swords05.jpg" },    
  { name: "Six of Swords", description: "Description of Card 3", image: "swords06.jpg" },   
  { name: "Seven of Swords", description: "Description of Card 3", image: "swords07.jpg" },    
  { name: "Eight of Swords", description: "Description of Card 3", image: "swords08.jpg" }, 
  { name: "Nine of Swords", description: "Description of Card 3", image: "swords09.jpg" },    
  { name: "Ten of Swords", description: "Description of Card 3", image: "swords10.jpg" },   
  { name: "Page of Swords", description: "Description of Card 3", image: "swords11page.jpg" },    
  { name: "Knight of Swords", description: "Description of Card 3", image: "swords12knight.jpg" }, 
  { name: "Queen of Swords", description: "Description of Card 3", image: "swords13queen.jpg" },    
  { name: "King of Swords", description: "Description of Card 3", image: "swords14king.jpg" },    
  { name: "Ace of Pentacles", description: "Description of Card 3", image: "pents01ace.jpg" },    
  { name: "Two of Pentacles", description: "fake it til you break it into a thousand tiny little pieces", image: "TwoofPentacles.png" },   
  { name: "Three of Pentacles", description: "Description of Card 3", image: "pents03.jpg" },    
  { name: "Four of Pentacles", description: "Description of Card 3", image: "pents04.jpg" }, 
  { name: "Five of Pentacles", description: "Description of Card 3", image: "pents05.jpg" },    
  { name: "Six of Pentacles", description: "Description of Card 3", image: "pents06.jpg" },   
  { name: "Seven of Pentacles", description: "Description of Card 3", image: "pents07.jpg" },    
  { name: "Eight of Pentacles", description: "Description of Card 3", image: "pents08.jpg" }, 
  { name: "Nine of Pentacles", description: "Description of Card 3", image: "pents09.jpg" },    
  { name: "Ten of Pentacles", description: "Description of Card 3", image: "pents10.jpg" },   
  { name: "Page of Pentacles", description: "Description of Card 3", image: "pents11page.jpg" },    
  { name: "Knight of Pentacles", description: "Description of Card 3", image: "pents12knight.jpg" }, 
  { name: "Queen of Pentacles", description: "Description of Card 3", image: "pents13queen.jpg" },    
  { name: "King of Pentacles", description: "Description of Card 3", image: "pents14king.jpg" },     
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

function printPage() {
  window.print();
}
