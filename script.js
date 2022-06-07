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
const slidingNewsLetters13 = document.querySelector('.slide13')
const slidingNewsLetters14 = document.querySelector('.slide14')
const slidingNewsLetters15 = document.querySelector('.slide15')
const slidingNewsLetters16 = document.querySelector('.slide16')
const slidingNewsLetters17 = document.querySelector('.slide17')
const slidingNewsLetters18 = document.querySelector('.slide18')
const slidingNewsLetters19 = document.querySelector('.slide19')
const slidingNewsLetters20 = document.querySelector('.slide20')

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
  const topElementToTopViewport13 = slidingNewsLetters13.getBoundingClientRect().top;
  const topElementToTopViewport14 = slidingNewsLetters14.getBoundingClientRect().top;
  const topElementToTopViewport15 = slidingNewsLetters15.getBoundingClientRect().top;
  const topElementToTopViewport16 = slidingNewsLetters16.getBoundingClientRect().top;
  const topElementToTopViewport17 = slidingNewsLetters17.getBoundingClientRect().top;
  const topElementToTopViewport18 = slidingNewsLetters18.getBoundingClientRect().top;
  const topElementToTopViewport19 = slidingNewsLetters19.getBoundingClientRect().top;
  const topElementToTopViewport20 = slidingNewsLetters20.getBoundingClientRect().top;

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

  if(scrollTop > (scrollTop+topElementToTopViewport13).toFixed()-clientHeight*0.8){
    slidingNewsLetters13.classList.add('active13')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport14).toFixed()-clientHeight*0.8){
    slidingNewsLetters14.classList.add('active14')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport15).toFixed()-clientHeight*0.8){
    slidingNewsLetters15.classList.add('active15')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport16).toFixed()-clientHeight*0.8){
    slidingNewsLetters16.classList.add('active16')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport17).toFixed()-clientHeight*0.8){
    slidingNewsLetters17.classList.add('active17')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport18).toFixed()-clientHeight*0.8){
    slidingNewsLetters18.classList.add('active18')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport19).toFixed()-clientHeight*0.8){
    slidingNewsLetters19.classList.add('active19')
  }

  if(scrollTop > (scrollTop+topElementToTopViewport20).toFixed()-clientHeight*0.8){
    slidingNewsLetters20.classList.add('active20')
  }

})

/************************/
const titre = document.querySelector(".title");
const TL1 = new TimelineMax({pause : true});
TL1
.from(titre,1, {y: -1000, opacity : 0} )
TL1.play()
