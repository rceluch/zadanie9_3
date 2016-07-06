var carouselList = $(".carousel ul");

setInterval(moveSlideRight, 4000);

var currentIndex = 0;
var prevIndex = -1;
var numberOfPictures = $("img").length;
var buttonDiv = $(".buttons");


function moveSlideRight() {
	carouselList.animate({"margin-left": -800}, 1000, moveFirstSlide);
	prevIndex = currentIndex;
	currentIndex++;
	if (currentIndex  > numberOfPictures - 1 )
		currentIndex  = 0;
	applyColor();
}

function moveFirstSlide() {
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}

function moveFirstSlide1(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.insertBefore(firstItem);
	carouselList.css({marginLeft: -800});
}

function moveSlideLeft() {
	moveFirstSlide1();
	carouselList.animate({"margin-left": 0}, 1000);
	prevIndex = currentIndex;
	currentIndex--;
	if (currentIndex < 0)
 		currentIndex = numberOfPictures -1;
	applyColor();
}

function applyColor() {
	var currentButton = document.getElementById(currentIndex + "");
	var prevButton = document.getElementById(prevIndex + "");
	currentButton.classList.add('btn-color');
	if (prevButton) prevButton.classList.remove('btn-color');
}

	$("#right").click(function() {moveSlideRight();}
);

	$("#left").click(function() {moveSlideLeft();}
);

for(i = 0; i < numberOfPictures; i++) {
	var icon = document.createElement('div');
	$(icon).addClass('my-circle');
	icon.setAttribute('id', i);
	buttonDiv.append(icon);
}

applyColor();
