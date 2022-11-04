/************************************/


var NUM_PARTICLES = ( ( ROWS = 100 ) * ( COLS = 300 ) ),
    THICKNESS = Math.pow( 80, 2 ),
    SPACING = 3,
    MARGIN = 100,
    COLOR = 220,
    DRAG = 0.95,
    EASE = 0.25,
    

    container,
    particle,
    canvas,
    mouse,
    stats,
    list,
    ctx,
    tog,
    man,
    dx, dy,
    mx, my,
    d, t, f,
    a, b,
    i, n,
    w, h,
    p, s,
    r, c
    ;

particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
};

function init() {

  container = document.getElementById( 'container-particle' );
  canvas = document.createElement( 'canvas' );
  
  ctx = canvas.getContext( '2d' );
  man = false;
  tog = true;
  
  list = [];
  
  w = canvas.width = COLS * SPACING + MARGIN * 2;
  h = canvas.height = ROWS * SPACING + MARGIN * 2;
  
  container.style.marginLeft = Math.round( w * -0.5 ) + 'px';
  container.style.marginTop = Math.round( h * -0.5 ) + 'px';
  
  for ( i = 0; i < NUM_PARTICLES; i++ ) {
    
    p = Object.create( particle );
    p.x = p.ox = MARGIN + SPACING * ( i % COLS );
    p.y = p.oy = MARGIN + SPACING * Math.floor( i / COLS );
    
    list[i] = p;
  }

  container.addEventListener( 'mousemove', function(e) {

    bounds = container.getBoundingClientRect();
    mx = e.clientX - bounds.left;
    my = e.clientY - bounds.top;
    man = true;
    
  });
  
  if ( typeof Stats === 'function' ) {
    document.body.appendChild( ( stats = new Stats() ).domElement );
  }
  
  container.appendChild( canvas );
}

function step() {

  if ( stats ) stats.begin();

  if ( tog = !tog ) {

    if ( 42) {

      t = +new Date() * 0.001;
      mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
      my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
    }
      
    for ( i = 0; i < NUM_PARTICLES; i++ ) {
      
      p = list[i];
      
      d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
      f = -THICKNESS / d;

      if ( d < THICKNESS ) {
        t = Math.atan2( dy, dx );
        p.vx += f * Math.cos(t);
        p.vy += f * Math.sin(t);
      }

      p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
      p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

    }

  } else {

    b = ( a = ctx.createImageData( w, h ) ).data;

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

      p = list[i];
      b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
    }

    ctx.putImageData( a, 0, 0 );
  }

  if ( stats ) stats.end();

  requestAnimationFrame( step );
}

init();
step();

/*************/
let slidingNewsLetter = [];
let nb = 19;
var screenWidth = screen.width;
let multiplicator;

for (let nb_slide = 1 ; nb_slide < nb + 1; nb_slide++) {
  slidingNewsLetter.push(document.querySelector('.slide'+nb_slide.toString()));
}
console.log(slidingNewsLetter);
if (screenWidth < 1000){ multiplicator = 1.5;}
else {multiplicator = 0.7;}
console.log(multiplicator);

window.addEventListener('scroll',()=>{
  const {scrollTop,clientHeight} = document.documentElement;
  let topElementToTopViewport = [];

  for (let nb_slide = 0 ; nb_slide < nb ; nb_slide++) {
    topElementToTopViewport.push(slidingNewsLetter[nb_slide].getBoundingClientRect().top);
  }

  for (let nb_slide = 0 ; nb_slide < nb ; nb_slide++) {
    if(scrollTop > (scrollTop+topElementToTopViewport[nb_slide]).toFixed()-clientHeight*multiplicator){
      slidingNewsLetter[nb_slide].classList.add('active'+(nb_slide+1).toString());
    } 
  }

})