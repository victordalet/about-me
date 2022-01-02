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


/**************************  ANIMATION *****************************/

const img = document.querySelector("img");

const TL1 = new TimelineMax({pause : true});

TL1
.from(img,3, {y: -1000, opacity : 0} )


TL1.play()