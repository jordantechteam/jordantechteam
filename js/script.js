

window.addEventListener("load", function(){
   /*------------ page loader ------------------*/
   document.querySelector(".page-loader").classList.add("fade-out");
   setTimeout(function(){
      document.querySelector(".page-loader").style.display="none";
   },600);
   /* ----------- animation on scroll -------------- */
   AOS.init();
});

/* ------------------ toggle navbar ------------------------ */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/* close nav when clicking on a nav item*/
document.addEventListener("click", function(e){
   if(e.target.closest(".nav-item")){
       toggleNav();
   }
}); 

/*-------------- sticky header --------------------- */
window.addEventListener("scroll", function(){
     if(this.pageYOffset > 60){
         document.querySelector(".header").classList.add("sticky");
     }
     else{
        document.querySelector(".header").classList.remove("sticky");
     }
});

/*------------------- product tabs ---------------------- */
const productTabs = document.querySelector(".product-tabs");
productTabs.addEventListener("click", function(e){
   if(e.target.classList.contains("product-tab-item") && !e.target.classList.contains("active")){
      const target = e.target.getAttribute("data-target");
      productTabs.querySelector(".active").classList.remove("active");
      e.target.classList.add("active");
      const productSection = document.querySelector(".product-section");
      productSection.querySelector(".product-tab-content.active").classList.remove("active");
      productSection.querySelector(target).classList.add("active");
      // animation on scroll
      AOS.init();
   }
});


 
