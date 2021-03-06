document.addEventListener('DOMContentLoaded', () => {
	// Array of cards
	const cardArray = [
		{
			name: 'fries',
			image: 'images/fries.png'
		},
		{
			name: 'fries',
			image: 'images/fries.png'
		},
		{
			name: 'burger',
			image: 'images/cheeseburger.png'
		},
		{
			name: 'burger',
			image: 'images/cheeseburger.png'
		},
		{
			name: 'hotdog',
			image: 'images/hotdog.png'
		},
		{
			name: 'hotdog',
			image: 'images/hotdog.png'
		},
		{
			name: 'ice-cream',
			image: 'images/ice-cream.png'
		},
		{
			name: 'ice-cream',
			image: 'images/ice-cream.png'
		},
		{
			name: 'milkshake',
			image: 'images/milkshake.png'
		},
		{
			name: 'milkshake',
			image: 'images/milkshake.png'
		},
		{
			name: 'pizza',
			image: 'images/pizza.png'
		},
		{
			name: 'pizza',
			image: 'images/pizza.png'
		}
	];

	cardArray.sort(() => 0.5 - Math.random());
	console.log(cardArray);

	const grid = document.querySelector('.grid');
	const resultDisplay = document.querySelector('#result');
	let cardsChosen = [];
	let cardsChosenId = [];
	let cardsWon = [];

	function createBoard() {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement('img');
			card.setAttribute('src', 'images/blank.png');
			card.setAttribute('data-id', i);
			card.addEventListener('click', flipCard);
			grid.appendChild(card);
		}
	}

	//   Check for matches
	function checkForMatch() {
		let cards = document.querySelectorAll('img');
		const optionOneId = cardsChosenId[0];
		const optionTwoId = cardsChosenId[1];
		if (cardsChosen[0] === cardsChosen[1]) {
			alert('You found a match');
			cards[optionOneId].setAttribute('src', 'images/white.png');
			cards[optionTwoId].setAttribute('src', 'images/white.png');
			cardsWon.push(cardsChosen);
		} else {
			cards[optionOneId].setAttribute('src', 'images/blank.png');
			cards[optionTwoId].setAttribute('src', 'images/blank.png');
			alert('Try again');
		}
		cardsChosen = [];
		cardsChosenId = [];
		resultDisplay.textContent = cardsWon.length;
		if (cardsWon.length === cardArray.length / 2) {
			resultDisplay.textContent = "Congraatulations, you found'em all! Score:  " + cardsWon.length;
		}
	}

	//   flipcards
	function flipCard() {
		let cardId = this.getAttribute('data-id');
		cardsChosen.push(cardArray[cardId].name);
		cardsChosenId.push(cardId);
		this.setAttribute('src', cardArray[cardId].image);
		if (cardsChosen.length === 2) {
			setTimeout(checkForMatch, 500);
		}
	}

	createBoard();
});
