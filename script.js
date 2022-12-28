const showContainer = document.querySelectorAll(".show-replies");

showContainer.forEach((btn) => 
btn.addEventListener("click", (e) =>{
    let parentContainer = e.target.closest(".comment-container");
    let _id = parentContainer.id;
   if (_id) {
    let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
        );
    childrenContainer.forEach((child) => child.classList.toggle("opened"));
   }
    })
);




var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


menuIcon.onclick =  function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}

