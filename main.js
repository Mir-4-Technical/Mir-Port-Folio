//========================================
// creating a Responsive navbar component 
//========================================

const mobile_nav = document.querySelector(".mobile-navber-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});


//========================================
// creating a portfolio tabbed component 
//=========================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);
  
  p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
  
  p_btn_clicked.classList.add("p-btn-active");
  
 //to find the number in data after//
  
 const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);
  
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  
  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
  
  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active")
  );
  
}); 


//========================================
// Scroll to Top Section code
//=========================================

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTo-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);


const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

 scroollElement.addEventListener("click", scrollTop);

//========================================
// Animate Number Counter 
//========================================
 
 const counterNum = document.querySelectorAll(".counter-numbers");
 
 const speed = 200;
 
  counterNum.forEach((curElem) => {
   const updateNumber = () => {
     const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);
    
     const initialNum = parseInt(curElem.innerText);
     //console.log(initialNum);
     
     const incrementNumber = Math.trunc(targetNumber / speed);
     //console.log(incrementNumber);
     
     if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
         setTimeout(updateNumber, 10);
     }
   }; 
   
   updateNumber();
 });

// ======== Lazy loading images ========//

//const imgRef = document.querySelector("img[data-src]");

//*const lazyImg = (entries) => {
//*  const [entry] = entries;
//*  console.log(entry);
//*  if (!entry.isIntersecting) return;
//*  entry.target.src = imgRef.dataset.src;
//*};

//*const imgObserver = new IntersectionObserver (lazyImg, {
//*  root: null,
//*  threshold: 0,
//*});

//*imgObserver.observe(imgRef);
 
 //========================================
 // Swiper js Code  
 //=========================================
 
 new Swiper(".mySwiper", {
   slidesPerView: 2,
   spaceBetween: 30,
   autoplay: {
     delay: 2500,
     desableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
 });
 
 const myJsmedia = (widthSize) => {
   if(widthSize.matches) {
   new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   });
   
   }else {
     new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      });
   }
 };
 
 const widthSize = window.matchMedia("(max-width: 626px)");
 //call listener function at run time
 myJsmedia(widthSize);
 //attach listener function on state changes
 widthSize.addEventListener("change", myJsmedia);
 
 
 //========================================
 // 626px
 //=========================================