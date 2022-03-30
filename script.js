const slidingNewsLetters1 = document.querySelector('.slide1')
const slidingNewsLetters2 = document.querySelector('.slide2')
const slidingNewsLetters3 = document.querySelector('.slide3')
const slidingNewsLetters4 = document.querySelector('.slide4')
const slidingNewsLetters5 = document.querySelector('.slide5')
const slidingNewsLetters6 = document.querySelector('.slide6')
const slidingNewsLetters7 = document.querySelector('.slide7')
const slidingNewsLetters8 = document.querySelector('.slide8')
const slidingNewsLetters9 = document.querySelector('.slide9')
const slidingNewsLetters10 = document.querySelector('.slide10')
const slidingNewsLetters11= document.querySelector('.slide11')
const slidingNewsLetters12 = document.querySelector('.slide12')

window.addEventListener('scroll',()=>{
  const {scrollTop,clientHeight} = document.documentElement;
  const topElementToTopViewport1 = slidingNewsLetters1.getBoundingClientRect().top;
  const topElementToTopViewport2 = slidingNewsLetters2.getBoundingClientRect().top;
  const topElementToTopViewport3 = slidingNewsLetters3.getBoundingClientRect().top;
  const topElementToTopViewport4 = slidingNewsLetters4.getBoundingClientRect().top;
  const topElementToTopViewport5 = slidingNewsLetters5.getBoundingClientRect().top;
  const topElementToTopViewport6 = slidingNewsLetters6.getBoundingClientRect().top;
  const topElementToTopViewport7 = slidingNewsLetters7.getBoundingClientRect().top;
  const topElementToTopViewport8 = slidingNewsLetters8.getBoundingClientRect().top;
  const topElementToTopViewport9 = slidingNewsLetters9.getBoundingClientRect().top;
  const topElementToTopViewport10 = slidingNewsLetters10.getBoundingClientRect().top;
  const topElementToTopViewport11 = slidingNewsLetters11.getBoundingClientRect().top;
  const topElementToTopViewport12 = slidingNewsLetters12.getBoundingClientRect().top;

  if(scrollTop > (scrollTop+topElementToTopViewport1).toFixed()-clientHeight*0.8){
    slidingNewsLetters1.classList.add('active1')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport2).toFixed()-clientHeight*0.8){
    slidingNewsLetters2.classList.add('active2')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport3).toFixed()-clientHeight*0.8){
    slidingNewsLetters3.classList.add('active3')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport4).toFixed()-clientHeight*0.8){
    slidingNewsLetters4.classList.add('active4')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport5).toFixed()-clientHeight*0.8){
    slidingNewsLetters5.classList.add('active5')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport6).toFixed()-clientHeight*0.8){
    slidingNewsLetters6.classList.add('active6')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport7).toFixed()-clientHeight*0.8){
    slidingNewsLetters7.classList.add('active7')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport8).toFixed()-clientHeight*0.8){
    slidingNewsLetters8.classList.add('active8')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport9).toFixed()-clientHeight*0.8){
    slidingNewsLetters9.classList.add('active9')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport10).toFixed()-clientHeight*0.8){
    slidingNewsLetters10.classList.add('active10')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport11).toFixed()-clientHeight*0.9){
    slidingNewsLetters11.classList.add('active11')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport12).toFixed()-clientHeight*0.9){
    slidingNewsLetters12.classList.add('active12')
  }
})

/************************/
const titre = document.querySelector(".title");
const TL1 = new TimelineMax({pause : true});
TL1
.from(titre,1, {y: -1000, opacity : 0} )
TL1.play()
