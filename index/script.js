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


/**************************  CARDS *****************************/
var card12 = document.querySelector(".card--12");

card12.addEventListener('mousemove', function (e) {

  var wh = window.innerHeight / 2,
  ww = window.innerWidth / 2;
  card12.style.setProperty('--mouseX12', (e.clientX - ww) / 25);
  card12.style.setProperty('--mouseY12', (e.clientY - wh) / 25);

});

card12.addEventListener('mouseleave', function (e) {

  card12.style.setProperty('--mouseX12', 0);
  card12.style.setProperty('--mouseY12', 0);

});

/**************************  ANIMATION *****************************/

const img = document.querySelector("img");

const TL1 = new TimelineMax({pause : true});

TL1
.from(img,3, {y: -1000, opacity : 0} )


TL1.play()


