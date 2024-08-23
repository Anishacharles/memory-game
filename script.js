const gameboardDisplay = document.querySelector('#gameboard');
const resultDispay = document.querySelector('#score');
const cardArray = [
    {
       name:'bear', 
       img:"images/bear.jpg"
    },
    {
        name:'deer', 
        img:"images/deer.jpg"
     },
     {
        name:'elephant', 
        img:"images/elephant.jpg"
     },
     {
        name:'hippo', 
        img:"images/hippo.jpg"
     },
     {
        name:'horse', 
        img:"images/horse.jpg"
     },
     {
        name:'tiger', 
        img:"images/tiger.jpg"
     },
     {
        name:'lion', 
        img:"images/lion.jpg"
     },
     {
        name:'monkey', 
        img:"images/monkey.jpg"
     },
     {
        name:'bear', 
        img:"images/bear.jpg"
     },
     {
         name:'deer', 
         img:"images/deer.jpg"
      },
      {
         name:'elephant', 
         img:"images/elephant.jpg"
      },
      {
         name:'hippo', 
         img:"images/hippo.jpg"
      },
      {
         name:'horse', 
         img:"images/horse.jpg"
      },
      {
         name:'tiger', 
         img:"images/tiger.jpg"
      },
      {
         name:'lion', 
         img:"images/lion.jpg"
      },
      {
         name:'monkey', 
         img:"images/monkey.jpg"
      },
];

//shuffle function using Fisher-Yates

function shuffleArray(array){
   for(let i=array.length -1;i>0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}


//shuffle the card array
shuffleArray(cardArray);


//Create the game board after shuffling
createBoard();
function createBoard(){
   cardArray.forEach((cardE, index) => { //loop through the array to create each card
  
      const card =document.createElement('img');
      card.setAttribute('src','images/backimage.jpg'); //setting image source
      card.setAttribute('data-id',index); //storing index value
      card.addEventListener('click',flipcard); //adding eventlistener to flip cards
      gameboardDisplay.appendChild(card);  //append the card to gameboard
      
    });
   
}



card_chosen = [];//
card_chosen_id= [];

function flipcard(){
   
     const card_id = this.getAttribute("data-id");

     if (card_chosen_id.includes(card_id)) {
        return; // If the same card is clicked twice, ignore it
    }
    
    this.setAttribute('src', cardArray[card_id].img); // Display the card image
    card_chosen.push(cardArray[card_id].name); // Store the card's name
    card_chosen_id.push(card_id);

    if (card_chosen.length === 2) {
        setTimeout(checkMatch, 500); // Wait for a short time before checking for a match
    }
}   

cardsWon =[];

function checkMatch(){
    const cards = document.querySelectorAll('img');

    if(card_chosen[0] == card_chosen[1])
    {
        alert("You have found a match");

        // match cards
        cards[card_chosen_id[0]].classList.add('matched');
        cards[card_chosen_id[1]].classList.add('matched');

        cards[card_chosen_id[0]].setAttribute('src', 'images/cover.webp');
        cards[card_chosen_id[1]].setAttribute('src', 'images/cover.webp');
        cards[card_chosen_id[0]].removeEventListener('click', flipcard);
        cards[card_chosen_id[1]].removeEventListener('click', flipcard);

        
        cardsWon.push(card_chosen);
        resultDispay.innerHTML = cardsWon.length;

      //checking if the cards are matched display win message
         if(cardsWon.length==cardArray.length / 2){
                  displayWinmessage();
      
        }
       
    }
    else{  // Not a match, flip the cards back
        cards[card_chosen_id[0]].setAttribute('src','images/backimage.jpg');
        cards[card_chosen_id[1]].setAttribute('src','images/backimage.jpg');
    }
    // reset the chosen card
    card_chosen = [];
    card_chosen_id= [];

   
}

function displayWinmessage(){
   gameboardDisplay.innerHTML = '';
   const congratsMessage=document.createElement('div');
   congratsMessage.classList.add("congragulation-message");
   congratsMessage.innerHTML ="Congratulation! You have matched all cards!";
   gameboardDisplay.appendChild(congratsMessage);
   

}