const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Get the width of one carousel item (for scrolling by one item at a time)
const itemWidth = document.querySelector('.carousel-item').clientWidth;

nextBtn.addEventListener('click', () => {
    carousel.scrollLeft += itemWidth; // Scroll to the right
});

prevBtn.addEventListener('click', () => {
    carousel.scrollLeft -= itemWidth; // Scroll to the left
});

let colorArray = [
    'chartreuse',
    'DarkBlue',
    'DarkCyan',
    'green',
    'DarkSlateBlue',
    'DarkSeaGreen',
    'DarkSlateGray',
    'DeepPink'
  ]
  
  gsap.fromTo('.speedLines line', {
    attr: {
      x1: 0,
      x2: 'random(20, 200)'
    },
    y: 'random(0, 600)',
    x: 1200,
    stroke: gsap.utils.wrap(colorArray)
  }, {
    duration: 'random(0.2, 0.6)',
    x: -800,
    ease: 'none',
    stagger: {
      each: 0.2,
      repeat: -1,
      repeatRefresh: true
    }
  }).seek(100)