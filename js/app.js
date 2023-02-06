const navOptions = document.querySelectorAll(".nav-options")
const sidebar = document.querySelector(".sidebar")
const sidebarShadow = document.querySelector(".sidebar-shadow")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
// menu btns event
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active-sidebar")
  sidebarShadow.classList.add("active-sidebar-shadow")
})
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active-sidebar")
  sidebarShadow.classList.remove("active-sidebar-shadow")
})
// nav options event
navOptions.forEach((option) => {
  option.addEventListener("click", () => {
    let arrowImg = option.querySelector("img").src
    option.nextElementSibling.classList.toggle("hidden")
    if (!option.nextElementSibling.classList.contains("hidden")) {
      arrowImg = "./images/icon-arrow-up.svg"
    } else {
      arrowImg = "./images/icon-arrow-down.svg"
    }
    option.querySelector("img").src = arrowImg
  })
})
