const tabs = document.getElementById("tabs");
const content = document.querySelectorAll(".content");
const subTabs = document.getElementById("content3");

const changeClass = (el, htmlArr) => {
  for (let i = 0; i < htmlArr.children.length; i++) {
    htmlArr.children[i].classList.remove("active");
  }
  el.classList.add("active");
};

tabs.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target, tabs);
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content === currTab) {
      content[i].classList.add("active");
    }
  }
});

subTabs.addEventListener("click", (e) => {
  const currTab = e.target.dataset.btn;
  if (currTab) {
    const text = document.getElementById("inner-content");
    text.innerHTML = `Content 3 ${currTab}`;
    changeClass(e.target, subTabs);
  }
});
