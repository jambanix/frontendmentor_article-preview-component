"use strict";

const shareIconsMobile = document.querySelectorAll(".share-icon-mobile");
const shareBoxMobile = document.querySelector(".share-box-mobile");
const shareIconDesktop = document.querySelector(".share-icon-desktop");
const shareBoxDesktop = document.querySelector(".share-box-desktop");

shareIconsMobile.forEach(icon => {
    icon.addEventListener("click", () => {
        shareBoxMobile.classList.toggle("show");
    });
});

shareIconDesktop.addEventListener("click", () => {
    shareBoxDesktop.classList.toggle("show");
});

