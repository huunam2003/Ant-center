// Xử lý click
const $$ = document.querySelectorAll.bind(document);

document.querySelectorAll(".content").forEach((wrap) => {
  const tabs = wrap.querySelectorAll(".tab-item");
  const content = wrap.querySelectorAll(".tab-content");
  const line = wrap.querySelector(".tabs .tab-line");

  const tabActive = wrap.querySelector(".tab-item.active");
  if (tabActive) {
    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";
  }

  tabs.forEach((tab, index) => {
    const pane = content[index];
    tab.onclick = function () {
      wrap.querySelector(".tab-item.active")?.classList.remove("active");
      wrap.querySelector(".tab-content.active")?.classList.remove("active");

      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";

      this.classList.add("active");
      pane.classList.add("active");
    };
  });
});
