// DOM element selectors
let about = document.querySelector(".navigation-item");
let experience = about.nextElementSibling;
let contact = document.querySelector(".navigation-items").lastElementChild;
let timeline = document.getElementById("timeline");

// DOM manipulation funcitons
const highlight = (item) => {
  item.style.fontWeight = "bold";
};

const revert = (item) => {
  item.style.fontWeight = "normal";
};

const revealMain = () => {
  main[0].style.position = '';
  main[0].style.top = '0';
}


// Event Listeners
about.addEventListener("mouseover", function () {
  highlight(about);
});
about.addEventListener("mouseout", function () {
  revert(about);
});

experience.addEventListener("mouseover", function () {
  highlight(experience);
});
experience.addEventListener("mouseout", function () {
  revert(experience);
});

contact.addEventListener("mouseover", function () {
  highlight(contact);
});
contact.addEventListener("mouseout", function () {
  revert(contact);
});

// Counter

const startDate = new Date(2021, 0, 03);

const findDifference = () => {
    const now = new Date();
    difference = Math.floor((now.getTime() - startDate.getTime()) / 86400000);
    timeline.innerText = difference;
}

setInterval(findDifference, 1000);