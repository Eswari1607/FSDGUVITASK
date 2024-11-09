let stars = document.querySelectorAll(".ratings span");
let products = document.querySelectorAll(".ratings");
let ratings = [];
 
for(let star of stars){
   star.addEventListener("click", function(){
      
     this.setAttribute("data-clicked","true");

         });
      }