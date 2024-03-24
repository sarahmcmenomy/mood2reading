// Sample data for Tarot cards (replace with your own data)
const tarotCards = [
  { name: "The Dumbass", description: "IIIIIIii don't got no strings to hold me down - badoomdoomdoh OH awww Ohh shit ouch.", image: "TheFool.JPG" },
  { name: "The Magic Boi", description: "Ppl think Jeebus was so magic, but do y'all realize how much blow that man did?", image: "TheMagician.JPG" },
  { name: "The High AF Priestess", description: "The High AF Priestess card is always read reversed in Mood2. She just can't help her paranoid. azz.", image: "TheHighPriestess.JPG" },
  { name: "Mawm", description: "Gawd dayum that pesky Magician and his magic toy table!!", image: "TheEmpress.JPG" },
  { name: "Daddy", description: "Emp Mama didn't follow my rules and look what happened to her...", image: "TheEmperor.JPG" },
  { name: "The Man", description: "It's my United States of Whatevahhhh!", image: "TheHierophant.JPG" },
  { name: "Ewww", description: "Being in love is like shizzing your pants. Everyone can see it, but only you can feel the gooey warmth. ", image: "TheLovers.JPG" },
  { name: "Brad the Manager", description: "If you're not first, you're last!", image: "TheChariot.JPG" },
  { name: "Not Killing Shiz", description: "Insert dumb joke about lion eating shiz he's not spozedta here.", image: "Strength.JPG" },
  { name: "Re-Treat Yo'Self", description: "It's just the Hermit, his Opossum, and his knitted beanie.", image: "TheHermit.JPG" },
  { name: "Fortune Cookie", description: "The wheel in the sky keeps on turnin'. Oh I don't know when I'll get anymoreee blowwww.", image: "WheelofFortune.JPG" },
  { name: "Karma's a Betch", description: "Not for Taylor. No Justice for Taylor.", image: "Justice.JPG" },
  { name: "Reverse", description: "You don't just decide you're gay. I do. You're gay now.", image: "TheHangedMan.JPG" },
  { name: "Death", description: "You can die, and then you can die die, but if you die die, are you really alive again? FUXX!", image: "Death.JPG" },
  { name: "Yai Angelz R Here", description: "You got a DUI, didn't you? Turd.", image: "Temperance.JPG" },
  { name: "Free Weed & Chocolate", description: "I'm The Devil, I love Metal! Check this card, it's FUXXING TASTY!", image: "TheDevil.JPG" },
  { name: "The Tower", description: "This is why I don't read for myself. I'm clearly reading this as, 'Throw rich people out of their castle and claim residence.'", image: "TheTower.JPG" },
  { name: "Yassss!", description: "She's just gathering water for thirsty strippers.", image: "TheStar.JPG" },
  { name: "Crazy Town", description: "Mood witches generally avoid the flakey croissant energy of The Moon, just sayin.", image: "TheMoon.JPG" },
  { name: "Happiness & Shiz", description: "Fuuuuuuxx dem kids!", image: "TheSun.JPG" },
  { name: "They're Watching", description: "That's just FINE, because I'm judging you for judging me...for judging you for judging me...for judging you for ...", image: "Judgement.JPG" },
  { name: "Uno", description: "Have you ever been surrounded by biblical animals watching your journey, and you have two candles lit on both ends in your hands, and your tiddies are out, and also, you drunnk.", image: "TheWorld.JPG" },
  { name: "Ace of Dick Sticks", description: "Up YOURS!", image: "AoW.JPG" },    
  { name: "Two of Dick Sticks", description: "OMG , remember Sarah P?!", image: "2oW.JPG" },   
  { name: "Three of Dick Sticks", description: "Okayyyy, I'm fuxxing going!", image: "3oW.JPG" },    
  { name: "Four of Dick Sticks", description: "They gonna fuxx under those flowers, I know et.", image: "4oW.JPG" }, 
  { name: "Five of Dick Sticks", description: "'MY stick's bigger!' 'No, MY stick's bigger!' 'No, my stick is the BIGGEST' 'OMFG do you guys have ANY idea what you sound like??'", image: "5oW.JPG" },    
  { name: "Six of Dick Sticks", description: "It's Sex Panther, by Odeon.", image: "6oW.JPG" },   
  { name: "Seven of Dick Sticks", description: "I'd let him cry on my bewbz...", image: "7oW.JPG" },    
  { name: "Eight of Dick Sticks", description: "YEEEEEEEEEEEEET", image: "8oW.JPG" }, 
  { name: "Nine of Dick Sticks", description: "Maybe I can use these sticks to build a shelter since I'm mufuxxin HOMELESS, UNIVERSE!!", image: "9oW.JPG" },    
  { name: "Ten of Dick Sticks", description: "Thought I'd use these for shelter, but just ended up carrying a bunch of sticks around.", image: "10oW.JPG" },   
  { name: "Noob of Dick Sticks", description: "This bish is RIDICKULOUS! ", image: "PoW.JPG" },    
  { name: "Chad of Dick Sticks", description: "Get 'em and split 'em, that's what he always says. What? He's talking about chopping wood, right?", image: "KnoW.JPG" }, 
  { name: "Queen Bish of Dick Sticks", description: "She's the manager, she's allowed to bring her cat.", image: "QoW.JPG" },    
  { name: "Top Boi of Dick Sticks", description: "Hurhurhur look at me, I'm a symbol of the patriarchy, with my big phallic king stick", image: "KioW.JPG" },     
  { name: "Ace of Cry Babies", description: "Behold! Tis font of all this bullshit", image: "AoC.JPG" },    
  { name: "Two of Cry Babies", description: "'I have poisoned your cup.' 'I've poisoned yours, as well!' 'AHHHHHHHH!'", image: "2oC.JPG" },   
  { name: "Three of Cry Babies", description: "Did you know that you can play 'Suck and Blow' with the Devil's Uno? Yup. Only makes it sexier.", image: "3oC.JPG" },    
  { name: "Four of Cry Babies", description: "4 of Cups is not impressed.", image: "4oC.JPG" }, 
  { name: "Five of Cry Babies", description: "Don't go cryin over spilled cups of difficult to express breast milk.", image: "5oC.JPG" },    
  { name: "Six of Cry Babies", description: "I find the imagery in this card suspicious and disturbing.", image: "6oC.JPG" },   
  { name: "Seven of Cry Babies", description: "'The Mood2 7 of Cups straight up has period products on it. WTF?' - DEXXIBLEDOOD", image: "7oC.JPG" },    
  { name: "Eight of Cry Babies", description: "Better to fuxxoff than keep getting fuxxd", image: "8oC.JPG" }, 
  { name: "Nine of Cry Babies", description: "I got some pretty nice cups, boy. Bet you never seen a set of cups as good as this one.", image: "9oC.JPG" },    
  { name: "Ten of Cry Babies", description: "This is the happiest you've ever been, and probably the happiest you'll ever be. It's all downhill from here.", image: "10oC.JPG" },   
  { name: "Noob of Cry Babies", description: "This place has the freshest sushi!", image: "PoC.JPG" },    
  { name: "Chad of Cry Babies", description: "See my Mercury hat? And shoes? Yup, yup. I'm pretty speedy. Pretty swift.", image: "KnoC.JPG" }, 
  { name: "Queen Bish of Cry Babies", description: "Watch your back bishh, you're about to get Carrie'd by some two-faced cherub mermaids.", image: "QoC.JPG" },    
  { name: "Top Boi of Cry Babies", description: "SHOTS! SHOTS! SHOTS! SHOTS!", image: "KioC.JPG" },   
  { name: "Ace of Mind Bullets", description: "With this Sword, I dub thee... Mood2's bishh.", image: "AoS.JPG" },    
  { name: "Two of Mind Bullets", description: "This bish gonna die", image: "2oS.JPG" },   
  { name: "Three of Mind Bullets", description: "The 3 of Swords doesn't want to hurt you. He's just scared he'll never come out of the box if you don't back Mood2 on Kickstarter", image: "3oS.JPG" },    
  { name: "Four of Mind Bullets", description: "Bish, I'M SLEEP!", image: "4oS.JPG" }, 
  { name: "Five of Mind Bullets", description: "How I look back at my enemies knowin' they I ws on cocainezzz.", image: "5oS.JPG" },    
  { name: "Six of Mind Bullets", description: "'Does anyone else suspect that it might be a problem that there are a bunch of swords haphazardly thrust through the hull of the boat, effectively creating several major structural issues? No? Just me?'", image: "6oS.JPG" },   
  { name: "Seven of Mind Bullets", description: "Just reminds me of that time I was so drunk that i rolled up the industrial rug at the bar I worked at and then had to bring it back the next day. ", image: "7oS.JPG" },    
  { name: "Eight of Mind Bullets", description: "So many jokes that I'm not allowed to make....", image: "8oS.JPG" }, 
  { name: "Nine of Mind Bullets", description: "Spent all his money on swords, now stuck with this hideous blanket.", image: "9oS.JPG" },    
  { name: "Ten of Mind Bullets", description: "This was all a trick to get you to pull his fingers. ", image: "10oS.JPG" },   
  { name: "Noob of Mind Bullets", description: "Me and Sweeney Todd: just two guys that love a good blade.", image: "PoS.JPG" },    
  { name: "Chad of Mind Bullets", description: "'Don't run with scissors. Don't ride a horse with scissors.' Well, LOOK AT ME NOW, MOM!!!", image: "KnoS.JPG" }, 
  { name: "Queen Bish of Mind Bullets", description: "I call this sword 'Seraphina.' Means fiery burning angel.", image: "QoS.JPG" },    
  { name: "Top Boi of Mind Bullets", description: "That was, let's see... my second year of Mathletes, but my first year of AV club... yeah. Junior year.", image: "KioS.JPG" },    
  { name: "Ace of Devil Cats", description: "If I had a pentacle for every time a hand appeared from a beautiful garden and handed me a coin....", image: "AoP.JPG" },    
  { name: "Two of Devil Cats", description: "Which way do we go, boss? Which way do we go?", image: "2oP.JPG" },   
  { name: "Three of Devil Cats", description: "I don't like ANY of these doods.", image: "3oP.JPG" },    
  { name: "Four of Devil Cats", description: "Wiping with their TP. Trump (toilet) Paper.", image: "4oP.JPG" }, 
  { name: "Five of Devil Cats", description: "Me and Sarah, not allowed at NWTS this year because of Mood2.", image: "5oP.JPG" },    
  { name: "Six of Devil Cats", description: "Oh nothin, just donatin' to your mama's GoFundMe", image: "6oP.JPG" },   
  { name: "Seven of Devil Cats", description: "Does a watched plant ever grow? How do we even know we grow if we can't see it happening? Or can we only measure growth by distance from the past? Fuxx, I'm high", image: "7oP.JPG" },    
  { name: "Eight of Devil Cats", description: "Every 8 Devil Cat's gets him a new set of Devil Cats to make", image: "8oP.JPG" }, 
  { name: "Nine of Devil Cats", description: "Just try n take her treats!", image: "9oP.JPG" },    
  { name: "Ten of Devil Cats", description: "'Money. Tiddiez. Sunshine. I'm Kid Rock in this bish.''", image: "10oP.JPG" },   
  { name: "Noob of Devil Cats", description: "@cryptobro tweets: Bitcoin is just venture capital for Xennials.", image: "PoP.JPG" },    
  { name: "Chad of Devil Cats", description: "Honestly I don't that color suits you, but I don't really GAF, so you do you", image: "KnoP.JPG" }, 
  { name: "Queen Bish of Devil Cats", description: "Can I have a box? I don't think I can finish the whole thing.", image: "QoP.JPG" },    
  { name: "Top Boi of Devil Cats", description: "stax on fuxxin stax baby! Patron, Beamers, let's blow this town", image: "KioP.JPG" },     
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
  }, 5); // 5 milliseconds
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

