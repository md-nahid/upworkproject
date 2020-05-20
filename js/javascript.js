
console.log('success');



// for navbar menu items active and page active;

let menuItems = document.getElementsByClassName('menu');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("menuActive");
  current[0].className = current[0].className.replace(" menuActive", "");
  this.className += " menuActive";
  let PageName = document.querySelector('#pageName');
  PageName.innerHTML = this.textContent;
  if(this.id === "home") {
    let currentpage = document.getElementsByClassName("displayPage");
    currentpage[0].className = currentpage[0].className.replace("displayPage", "");
    document.getElementById('homePage').classList.add("displayPage");
  }
  if(this.id === "about") {
    let currentpage = document.getElementsByClassName("displayPage");
    currentpage[0].className = currentpage[0].className.replace("displayPage", "");
    document.getElementById('aboutPage').classList.add("displayPage");
  }
  if(this.id === "services") {
    let currentpage = document.getElementsByClassName("displayPage");
    currentpage[0].className = currentpage[0].className.replace("displayPage", "");
    document.getElementById('servicesPage').classList.add("displayPage");
  }
  if(this.id === "portfolio") {
    let currentpage = document.getElementsByClassName("displayPage");
    currentpage[0].className = currentpage[0].className.replace("displayPage", "");
    document.getElementById('portfolioPage').classList.add("displayPage");
  }
  if(this.id === "testimonials") {
    let currentpage = document.getElementsByClassName("displayPage");
    currentpage[0].className = currentpage[0].className.replace("displayPage", "");
    document.getElementById('testimonialsPage').classList.add("displayPage");
  }
  if(this.id === "contact") {
    let currentpage = document.getElementsByClassName("displayPage");
    currentpage[0].className = currentpage[0].className.replace("displayPage", "");
    document.getElementById('contactPage').classList.add("displayPage");
  }
  });
}



// mobile menu section display script start
// sidebar menu display with humberger menu button
let mobileMenu = document.getElementById('mobileMenuicon');
mobileMenu.addEventListener('click', mobileMenuFunc);
function mobileMenuFunc() {    
  let sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('mobileSidebar');
}

// sidebar menu close with sidebar onclick event
let sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('click', () => {
  if(sidebar.classList.contains('mobileSidebar')) {
    sidebar.className = sidebar.className.replace('mobileSidebar', '');
  }
})
// mobile menu section display script end



// testimonials button slider section script start
function testimonialSmallScreenFunction () {
  const alltestimonials = document.querySelector('.alltestimonials');
    alltestimonials.style.left = "0%";
  let increment = 0;
  const allRight = -300;
  const allLeft = 0;
  const btnincrement = document.getElementById('left');
  const btndecrement = document.getElementById('right');
  
  const updateOutput = function() {
        alltestimonials.style.left = increment + "%";
  }
  // onclick increment left
  btnincrement.addEventListener("click", function(){
      if(increment < allLeft) {
        increment += 100;
        updateOutput();
      }
  });
  // onclick decrement left
  btndecrement.addEventListener("click", function(){
    if(increment > allRight) {
      increment -= 100;
        updateOutput();
    }
  });
}

// testimonials button slider section script end
function testimonialBigScreenFunction () {
    const alltestimonials = document.querySelector('.alltestimonials');
      alltestimonials.style.left = "0%";
    let increment = 0;
    const right = -100;
    const left = 0;
    const btnincrement = document.getElementById('left');
    const btndecrement = document.getElementById('right');
    
    const updateOutput = function() {
          alltestimonials.style.left = increment + "%";
    }
    // onclick increment left
    btnincrement.addEventListener("click", function(){
        if(increment < left) {
          increment += 50;
          updateOutput();
        }
    });
    // onclick decrement left
    btndecrement.addEventListener("click", function(){
      if(increment > right) {
        increment -= 50;
          updateOutput();
      }
    });
}


function testimonialSlideFunction () {
  if(window.innerWidth < 769) {
    testimonialSmallScreenFunction();
  }
  if(window.innerWidth >= 769) {
    testimonialBigScreenFunction();
  }
}
testimonialSlideFunction();

