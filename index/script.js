/*********************** SCROLL ****************************/

const flightPath = {
	cirviness : 1.25,
	autoRotate : true,
	values : [
		{x:100,y:-20},
		{x:300,y:10},
		{x:500,y:100},
		{x:750,y:-100},
		{x:350,y:-50},
		{x:600,y:100},
		{x:800,y:0},
		{x:window.innerWidth,y:-250}
	]
};


const tween = new TimelineLite();

tween.add(
	TweenLite.to('.paper-plane',1,{
		bezier : flightPath,
		ease : Power1.easeInOut
	})
	);

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
	triggerElement : '.name',
	duration:2000,
	triggerHook: 0
})

.setTween(tween)
.setPin('.name')
.addTo(controller);



/********************** TYPEWRITTER ***************************/
const title = document.querySelector('h1');
const txt = "I'm Victor Dalet, a young developer."

function typewriter(word,index){
	if (index < word.length) {
		setTimeout(()=>	{
			title.innerHTML += `<span>${word[index]}</span>`
			typewriter(txt, index+1)
		},150);
	}
}

setTimeout(()=> {
	typewriter(txt,0)
},200);


/************************** LOADER ***************************/

const images = document.querySelectorAll(".card")
let options = {
  // root: null,
  rootMargin: "-10% 0px",
  threshold: 0.4
}

function handleIntersect(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)

images.forEach(image => {
  observer.observe(image)
})


/**************************  CARDS *****************************/
var card1 = document.querySelector(".card--1");

card1.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card1.style.setProperty('--mouseX1', (e.clientX - ww) / 25);
  card1.style.setProperty('--mouseY1', (e.clientY - wh) / 25);

});

card1.addEventListener('mouseleave', function (e) {

  card1.style.setProperty('--mouseX1', 0);
  card1.style.setProperty('--mouseY1', 0);

});
/******************/
var card2 = document.querySelector(".card--2");

card2.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card2.style.setProperty('--mouseX2', (e.clientX - ww) / 25);
  card2.style.setProperty('--mouseY2', (e.clientY - wh) / 25);

});

card2.addEventListener('mouseleave', function (e) {

  card2.style.setProperty('--mouseX2', 0);
  card2.style.setProperty('--mouseY2', 0);

});
/******************/
var card3 = document.querySelector(".card--3");

card3.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card3.style.setProperty('--mouseX3', (e.clientX - ww) / 25);
  card3.style.setProperty('--mouseY3', (e.clientY - wh) / 25);

});

card3.addEventListener('mouseleave', function (e) {

  card3.style.setProperty('--mouseX3', 0);
  card3.style.setProperty('--mouseY3', 0);

});
/******************/
var card4 = document.querySelector(".card--4");

card4.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card4.style.setProperty('--mouseX4', (e.clientX - ww) / 25);
  card4.style.setProperty('--mouseY4', (e.clientY - wh) / 25);

});

card4.addEventListener('mouseleave', function (e) {

  card4.style.setProperty('--mouseX4', 0);
  card4.style.setProperty('--mouseY4', 0);

});
/******************/
var card5 = document.querySelector(".card--5");

card5.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card5.style.setProperty('--mouseX5', (e.clientX - ww) / 25);
  card5.style.setProperty('--mouseY5', (e.clientY - wh) / 25);

});

card5.addEventListener('mouseleave', function (e) {

  card5.style.setProperty('--mouseX5', 0);
  card5.style.setProperty('--mouseY5', 0);

});
/******************/
var card6 = document.querySelector(".card--6");

card6.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card6.style.setProperty('--mouseX6', (e.clientX - ww) / 25);
  card6.style.setProperty('--mouseY6', (e.clientY - wh) / 25);

});

card6.addEventListener('mouseleave', function (e) {

  card6.style.setProperty('--mouseX6', 0);
  card6.style.setProperty('--mouseY6', 0);

});
/******************/
var card7 = document.querySelector(".card--7");

card7.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card7.style.setProperty('--mouseX7', (e.clientX - ww) / 25);
  card7.style.setProperty('--mouseY7', (e.clientY - wh) / 25);

});

card7.addEventListener('mouseleave', function (e) {

  card7.style.setProperty('--mouseX7', 0);
  card7.style.setProperty('--mouseY', 0);

});






