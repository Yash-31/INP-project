const nav = document.querySelector(".navbar");
const back = document.querySelector(".bckdrp");

nav.addEventListener("mouseover",()=>{
    back.classList.add("open");
});

nav.addEventListener("mouseout",()=>{
    back.classList.remove("open");

});
