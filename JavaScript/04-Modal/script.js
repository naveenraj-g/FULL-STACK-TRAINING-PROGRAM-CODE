'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const openBtns = document.querySelectorAll(".show-modal");

const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener("click", openModal)
}

closeBtn.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})
