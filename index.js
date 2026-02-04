

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");


revealBtn.addEventListener("click", () => {
    hiddenContent.classList.toggle("reveal-content");

    if (hiddenContent.classList.contains("reveal-content")) {
        revealBtn.innerText = "Hide Content";
    } else {
        revealBtn.innerText = "Reveal More";
    }
});


