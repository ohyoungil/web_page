
// banner

const banner = document.querySelector('.banner');
const bannerBtn = document.querySelector('.banner-btn');
const bannerHeight = banner.getBoundingClientRect().height;

function close () {
  banner.classList.add('close');
}

bannerBtn.addEventListener('click', close);

function scrollHandler() {
  const scroll = window.scrollY;
  if(scroll > bannerHeight) {
    banner.classList.add('scroll');
  } else {
    banner.classList.remove('scroll');
  }
}

window.addEventListener('scroll', scrollHandler);


// nav-scroll 
const navList = document.querySelector('.nav-lists');

navList.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) {
    return;
  }
  scrollInto(link);
})

const bgBtn = document.querySelector('.bg-btn');

bgBtn.addEventListener('click', () => {
  scrollInto('#works'); 
})

function scrollInto(selector) {
  const ScrollTo = document.querySelector(selector);
  ScrollTo.scrollIntoView({behavior: "smooth"});
}


// scroll-fadein
const bgContainer = document.querySelector('.content-bg');

document.addEventListener('scroll', () => {
  const bgHeight = bgContainer.getBoundingClientRect().height;
  const windowScroll = window.scrollY;
  bgContainer.style.opacity = 1 - (windowScroll / bgHeight) / 1.5;
})

// arrow-btn

const arrowBtn = document.querySelector('.arrow-btn');

function arrowScroll() {
  window.scrollTo({top:0, behavior:"smooth"} );
}

function arrowHide() {
  const arrowScrollY = window.scrollY;
 
  if( arrowScrollY < 50) {
    arrowBtn.classList.remove("arrow-scroll");
  } else {
    arrowBtn.classList.add("arrow-scroll");
  }
}

arrowBtn.addEventListener('click', arrowScroll);

window.addEventListener('scroll', arrowHide)

// work-sort


  const workSort = document.querySelector(".works-sort");
  const worksContainer = document.querySelector(".works-container");
  const works = document.querySelectorAll('.work');
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');
  const all = document.querySelector('.all');
  const htmlCss = document.querySelector('.htmlCss');
  const js = document.querySelector('.js');
  const react = document.querySelector('.react');

  workSort.addEventListener('click', (event) => {
    const workTarget = event.target;
    const workLink = workTarget.dataset.link;
    if (workLink == null) {
      return;
    }
    
    if (workLink == ".all") {
      all.classList.add('select');
      htmlCss.classList.remove('select');
      js.classList.remove('select');
      react.classList.remove('select');
      for(i = 0; i <works.length; i++) {
      works[i].style.display = "block";
      }
      return;
    }

    if(workLink == ".htmlCss") {
      all.classList.remove('select');
      htmlCss.classList.add('select');
      js.classList.remove('select');
      react.classList.remove('select');
      for(i = 0; i <works.length; i++) {
        works[i].style.display = "none";
      }
      one.style.display = "block";
      two.style.display = "block";
      return;
    } 

    if(workLink == ".js") {
      all.classList.remove('select');
      htmlCss.classList.remove('select');
      js.classList.add('select');
      react.classList.remove('select');
      for(i = 0; i <works.length; i++) {
        works[i].style.display = "none";
      }
      three.style.display = "block";
      return;
    } 

    if(workLink == ".react") {
      all.classList.remove('select');
      htmlCss.classList.remove('select');
      js.classList.remove('select');
      react.classList.add('select');
      for(i = 0; i <works.length; i++) {
        works[i].style.display = "none";
      }
      four.style.display = "block";
      return;
    } 
    
  })
