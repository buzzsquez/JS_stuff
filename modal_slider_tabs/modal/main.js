const btnOpen = document.getElementById("btn-open");
const modal = document.getElementById("wrapper-modal");

const overlay = document.getElementById("overlay");
const btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", function () {
  modal.classList.add("active");
});

function closeModal() {
  modal.classList.remove("active");
}

overlay.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);
