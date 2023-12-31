let scroll = document.querySelector(".scroll");
let heightScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(heightScroll);
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  scroll.style.width = `${scrollTop / heightScroll * 100}%`
})
// Open bars
let bars = document.querySelector(".bars");
let links = document.querySelector(".links");
let allLinks = document.querySelectorAll(".link");

bars.onclick = function () {
  bars.children[0].classList.toggle("f1");
  bars.children[1].classList.toggle("s2");
  bars.children[2].classList.toggle("th3");
  links.classList.toggle("open");
};
allLinks.forEach((ele) => {
  ele.onclick = () => {
    ele.parentElement.classList.remove("open");
    bars.children[0].classList.remove("f1");
    bars.children[1].classList.remove("s2");
    bars.children[2].classList.remove("th3");
  };
});

// Button up
let up = document.querySelector(".up");
window.onscroll = () => {
  this.scrollY >= 2000 ? up.classList.add("show") : up.classList.remove("show");
};
up.onclick = () =>{
  window.scrollTo({
    top: 0,
    behavior:"smooth",
  })
}
