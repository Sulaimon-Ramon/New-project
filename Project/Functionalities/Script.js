
//--------- Header ------------//

const wrapper = document.getElementById('mainWrapper');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        wrapper.classList.add('scrolled');
    } else {
        wrapper.classList.remove('scrolled');
    }
});


//--------------Hamburger Menu-----------//

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const buttonholder = document.querySelector(".buttonholder");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
    buttonholder.classList.toggle("active");
})

document.querySelectorAll(".nav").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}))

document.querySelectorAll(".buttonholder").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    buttonholder.classList.remove("active");
}))

