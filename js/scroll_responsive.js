const allTabs = document.querySelectorAll(".tabs");

function updateScrollButtons(tabs) {
  const tabsWrapper = tabs.querySelector(".tabs-wrapper");
  const leftBtn = tabs.querySelector(".scroll-btn.left");
  const rightBtn = tabs.querySelector(".scroll-btn.right");

  const maxScrollLeft = tabsWrapper.scrollWidth - tabsWrapper.clientWidth;

  leftBtn.style.display = tabsWrapper.scrollLeft > 0 ? "block" : "none";
  rightBtn.style.display = tabsWrapper.scrollLeft < maxScrollLeft ? "block" : "none";
}

allTabs.forEach((tabs) => {
  const tabsWrapper = tabs.querySelector(".tabs-wrapper");
  const leftBtn = tabs.querySelector(".scroll-btn.left");
  const rightBtn = tabs.querySelector(".scroll-btn.right");

  const scrollAmount = 150;

  leftBtn.addEventListener("click", () => {
    tabsWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  rightBtn.addEventListener("click", () => {
    tabsWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Cập nhật trạng thái các nút khi cuộn
  tabsWrapper.addEventListener("scroll", () => updateScrollButtons(tabs));

  // Cập nhật trạng thái các nút khi thay đổi kích thước cửa sổ
  window.addEventListener("resize", () => updateScrollButtons(tabs));

  // Cập nhật trạng thái các nút ngay khi trang được tải
  document.addEventListener("DOMContentLoaded", () => updateScrollButtons(tabs));

  // Đảm bảo nút được hiển thị đúng từ đầu
  updateScrollButtons(tabs);
});


// Đặt lại kích thước cho line đầu tiên
const tabContainers = document.querySelectorAll(".tabs");

function updateTabLineOnResize() {
  tabContainers.forEach((container) => {
    const tabs = container.querySelectorAll(".tab-item");
    const line = container.querySelector(".tab-line");
    const firstTab = tabs[0];

    if (firstTab && line) {
      line.style.left = `${firstTab.offsetLeft}px`;
      line.style.width = `${firstTab.offsetWidth}px`;
    }
  });
}

// Gọi hàm khi trang tải và khi thay đổi kích thước
window.addEventListener("resize", updateTabLineOnResize);
document.addEventListener("DOMContentLoaded", updateTabLineOnResize);

// Đặt line đúng với kích thước của từng tab khi click
document.querySelectorAll(".tabs").forEach((tabsContainer) => {
  const tabsWrapper = tabsContainer.querySelector(".tabs-wrapper");
  const tabLine = tabsContainer.querySelector(".tab-line");
  
  // Sự kiện click cho từng tab-item trong container
  tabsContainer.addEventListener("click", (event) => {
    const element = event.target;

    if (element.classList.contains("tab-item")) {
      updateTabLinePosition(tabsContainer, element);

      tabsContainer.querySelector(".tab-item.active")?.classList.remove("active");
      element.classList.add("active");
    }
  });

  // Sự kiện scroll cho tabs-wrapper
  tabsWrapper.addEventListener("scroll", () => {
    const activeTab = tabsContainer.querySelector(".tab-item.active");
    if (activeTab) {
      updateTabLinePosition(tabsContainer, activeTab);
    }
  });
});

// Hàm cập nhật vị trí và kích thước của tab-line
function updateTabLinePosition(tabsContainer, activeTab) {
  const tabLine = tabsContainer.querySelector(".tab-line");
  const tabRect = activeTab.getBoundingClientRect();
  const containerRect = tabsContainer.getBoundingClientRect();
  const left = tabRect.left - containerRect.left;
  const width = tabRect.width;

  tabLine.style.left = `${left}px`;
  tabLine.style.width = `${width}px`;
}


