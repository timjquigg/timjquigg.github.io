// DOM element selectors
let about = document.querySelector(".navigation-item");
let experience = about.nextElementSibling;
let contact = document.querySelector(".navigation-items").lastElementChild;
//let toddlerClub = document.getElementById("toddler");
//let whisky = document.getElementById("whisky-assigner");
let timeline = document.getElementById("timeline");

// DOM manipulation funcitons
const highlight = (item) => {
  item.style.fontWeight = "bold";
};

const revert = (item) => {
  item.style.fontWeight = "normal";
};

/*
const enlarge = (item) => {
  item.style.maxWidth = "150%";
  item.style.justifySelf = "right";
  item.style.asignSelf = "top";
  item.style.border = "4px solid";
};

const resize = (item) => {
  item.style.maxWidth = "100%";
  item.style.justifySelf = "center";
  item.style.alignSelf = "center";
  item.style.border = "1px solid";
};
*/

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

/*
toddler.addEventListener("mouseover", function () {
  enlarge(toddler);
});
toddler.addEventListener("mouseout", function () {
  resize(toddler);
});

whisky.addEventListener("mouseover", function () {
  enlarge(whisky);
});
whisky.addEventListener("mouseout", function () {
  resize(whisky);
});
*/

// Counter

//const start = "01-03-2021";
const startDate = new Date(2021, 0, 03);
//const intlNumberFormatter = new Intl.NumberFormat("en-US");

const findDifference = () => {
    const now = new Date();
    difference = Math.floor((now.getTime() - startDate.getTime()) / 86400000);
    timeline.innerText = difference;
}

setInterval(findDifference, 1000);