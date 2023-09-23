const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/**** VARIABLES ****/ 

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
let index = 0

/**** VARIABLES ****/ 

/**** CREATION DOTS ****/

slides.forEach(() => {
	let newDot = document.createElement("div")
	newDot.classList.add("dot")
	let dotsContainer = document.querySelector(".dots")
	dotsContainer.appendChild(newDot)
});

/**** CREATION DOTS ****/

/**** FONCTIONS ****/

function slideUpdate() {
	const img = document.querySelector('.banner-img');
	img.src = "./assets/images/slideshow/"+ slides[index].image;
	const tagLine = slides[index].tagLine;
	document.querySelector('p').innerHTML = tagLine;
}


function selectedDot() {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

selectedDot(index);

/**** FONCTIONS ****/

/**** CLIQUE FLECHES ****/ 

arrowLeft.addEventListener('click', () => {
	console.log("J'ai cliqué sur la fleche gauche")
	if (index === 0){
		index = slides.length - 1
	} else {
		index = index - 1
	}
	slideUpdate()
	selectedDot()
	console.log(index)
})

arrowRight.addEventListener('click', () => {
	console.log("J'ai cliqué sur la fleche droite")
	if (index === slides.length - 1){
		index = 0
	} else {
		index = index + 1
	}
	slideUpdate()
	selectedDot()
	console.log(index)
})

/**** CLIQUE FLECHES ****/ 
