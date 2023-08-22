//section2 tabs
const tabsElement = document.querySelectorAll(
  ".section-list-item .section2-items"
);

tabsElement.forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".section-list-item .section2-items.active")
      .classList.remove("active");
    element.classList.toggle("active");
  });
});
tabsElement.forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".section-hide.section-active")
      .classList.remove("section-active");
    element.classList.toggle("section-active");
    const content = element.dataset.id;
    document
      .querySelector(`.section-hide[data-id="${content}"`)
      .classList.add("section-active");
    document
      .querySelector(".section2-text-hide.section2-text-active")
      .classList.remove("section2-text-active");
    element.classList.toggle("section2-text-active");
    const contentText = element.dataset.id;
    document
      .querySelector(`.section2-text-hide[data-id="${contentText}"`)
      .classList.add("section2-text-active");
  });
});

// section 4 tabs
const tabs = document.querySelector(".section4-list-item");
tabs.addEventListener("click", (e) => {
  document.querySelector(".section4-items.active").classList.remove("active");
  e.target.classList.add("active");

  const dataName = e.target.getAttribute("data-id");
  console.log(dataName);
  const tabsItems = document.querySelectorAll(".section4-list-items");
  tabsItems.forEach((item) => {
    if (item.getAttribute("data-id") === dataName || dataName === "all") {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});

const loadMoreBtn = document.querySelector(".load-more-btn");
const parent = document.querySelector(".section4-imgs-block");
const cards = [
  {
    src: "./img/graphic-design/graphic-design1.jpg",
    data: "Graphic Design",
  },
  {
    src: "./img/web-design/web-design1.jpg",
    data: "Web Design",
  },
  {
    src: "./img/landing-page/landing-page1.jpg",
    data: "Landing Pages",
  },
  {
    src: "./img/wordpress/wordpress1.jpg",
    data: "Wordpress",
  },

  {
    src: "./img/graphic-design/graphic-design2.jpg",
    data: "Graphic Design",
  },
  {
    src: "./img/web-design/web-design2.jpg",
    data: "Web Design",
  },
  {
    src: "./img/landing-page/landing-page2.jpg",
    data: "Landing Pages",
  },
  {
    src: "./img/wordpress/wordpress2.jpg",
    data: "Wordpress",
  },

  {
    src: "./img/graphic-design/graphic-design3.jpg",
    data: "Graphic Design",
  },
  {
    src: "./img/web-design/web-design3.jpg",
    data: "Web Design",
  },
  {
    src: "./img/landing-page/landing-page3.jpg",
    data: "Landing Pages",
  },
  {
    src: "./img/wordpress/wordpress3.jpg",
    data: "Wordpress",
  },
// load more 1
  {
    src: "./img/graphic-design/graphic-design4.jpg",
    data: "Graphic Design",
  },
  {
    src: "./img/web-design/web-design4.jpg",
    data: "Web Design",
  },
  {
    src: "./img/landing-page/landing-page4.jpg",
    data: "Landing Pages",
  },
  {
    src: "./img/wordpress/wordpress4.jpg",
    data: "Wordpress",
  },

  {
    src: "./img/graphic-design/graphic-design5.jpg",
    data: "Graphic Design",
  },
  {
    src: "./img/web-design/web-design5.jpg",
    data: "Web Design",
  },
  {
    src: "./img/landing-page/landing-page5.jpg",
    data: "Landing Pages",
  },
  {
    src: "./img/wordpress/wordpress5.jpg",
    data: "Wordpress",
  },

  {
    src: "./img/graphic-design/graphic-design6.jpg",
    data: "Graphic Design",
  },
  {
    src: "./img/web-design/web-design6.jpg",
    data: "Web Design",
  },
  {
    src: "./img/landing-page/landing-page6.jpg",
    data: "Landing Pages",
  },
  {
    src: "./img/wordpress/wordpress6.jpg",
    data: "Wordpress",
  },
];
window.addEventListener("DOMContentLoaded", () => {
  let result = "";
  cards.forEach((card, i) => {
    if (i < 12) {
      result += `
  <li class="section4-list-items" data-id="${card.data}">
  <img src="${card.src}" alt="" class="section4-img img-default">
  <div class="section4-list-items-hover">
    <div class="section4-list-items-hover-icons">
      <img src="./img/icons/section4-icon1.png" alt="link" class="section4-list-items-hover-icon1">
      <img src="./img/icons/section4-icon2.png" alt="square" class="section4-list-items-hover-icon2">
    </div>
    <p class="section4-list-items-hover-title">creative design</p>
    <p class="section4-list-items-hover-desc">${card.data}</p>
  </div>
</li>
  `;
    }
  });
  console.log(parent);
  parent.innerHTML = result;
});

loadMoreBtn.addEventListener("click", () => {
  let result = "";
  cards.forEach((card, i) => {
    if (i >= 12) {
      result += `
  <li class="section4-list-items" data-id="${card.data}">
  <img src="${card.src}" alt="" class="section4-img img-default">
  <div class="section4-list-items-hover">
    <div class="section4-list-items-hover-icons">
      <img src="./img/icons/section4-icon1.png" alt="link" class="section4-list-items-hover-icon1">
      <img src="./img/icons/section4-icon2.png" alt="square" class="section4-list-items-hover-icon2">
    </div>
    <p class="section4-list-items-hover-title">creative design</p>
    <p class="section4-list-items-hover-desc">${card.data}</p>
  </div>
</li>
  `;
    }
    loadMoreBtn.classList.replace("load-more-btn-active", "load-more-btn-hide");
  });
  console.log(parent);
  parent.innerHTML += result;
});
