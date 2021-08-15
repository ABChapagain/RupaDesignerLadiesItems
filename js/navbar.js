const menuBtn = document.querySelector('.menu-icon');
const cancelBtn = document.querySelector('.cancel-icon');
const items = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
});

cancelBtn.addEventListener('click', () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
});

window.addEventListener('scroll', function () {
    let header = document.querySelector(".navbar");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition);
})