const searchForm = document.querySelector(".search-form");
const cartItem= document.querySelector(".cart-items-container")
;

//! buttons
const searchBtn = document.querySelector("#search-btn")
const phoneBtn = document.querySelector("#phone-btn")

searchBtn.addEventListener("click", function(){
   searchForm.classList.toggle("active")
   document.addEventListener("click",function (e) {
    if(
        !e.composedPath().includes(searchBtn) && 
        !e.composedPath().includes(searchBtn) 
    ) {
        searchForm.classList.remove("active")
    }
   });
});
phoneBtn.addEventListener("click", function(){
    phoneForm.classList.toggle("active")
    document.addEventListener("click",function (e) {
     if(
         !e.composedPath().includes(phoneBtn) && 
         !e.composedPath().includes(phoneItem) 
     ) {
         phoneItem.classList.remove("active")
     }
    });
 });