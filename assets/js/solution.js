"use strict";

// new URL("https://www.facebook.com/JasonStatham/");
// new Map()
//   .set("www.facebook.com", "src_to_icon")
//   .set("www.facebook.com", "src_to_icon")
//   .set("www.facebook.com", "src_to_icon");




  let map = new Map()
  map.set("www.facebook.com", "../icons/iconfinder_facebook_circle_gray_107140.svg")
  map.set("www.instagram.com", "../icons/iconfinder_instagram_circle_gray_107138.svg")
  map.set("twitter.com","./assets/icons/twitter.svg")



function createElement(type, { classNames, onClick }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}

const cardContainer = document.getElementById("root");
const cards = responseData.map((place) => createPlaceCards(place));
cardContainer.append(...cards);

function createPlaceCards(place) {
  const h2 = createElement(
    "h2",
    { classNames: ["cardName"] },
    document.createTextNode(place.firstName + " " + place.lastName)
  );

  const p = createElement(
    "p",
    { classNames: ["cardContentInfo"] },
    document.createTextNode("На этом месте могла бы быть ваша реклама!")
  );
  const article = createElement(
    "article",
    { classNames: ["cardContainer"] },
    createImageWrapper(place),
    h2,
    p,
    
  );
 

  return createElement("li", { classNames: ["cardWrapper"] }, article);
}

//-------------------------------------------------------------------

function createImageWrapper(place) {
  const { firstName, id } = place;

  const imageWrapper = document.createElement("div");
  imageWrapper.setAttribute("id", `wrapper${id}`);
  imageWrapper.classList.add("cardImageWrapper");
  imageWrapper.style.backgroundColor = stringToColour(firstName);

  const initials = document.createElement("div");
  initials.classList.add("initials");
  initials.append(document.createTextNode(firstName.trim().charAt(0) || ""));

  createImage(place, { className: "cardImage" });

  imageWrapper.append(initials);
  return imageWrapper;
}

function createImage({ firstName, profilePicture, id }, { className }) {
  const img = document.createElement("img");
  img.classList.add(className);
  img.dataset.id = id;
  img.setAttribute("alt", firstName);
  img.setAttribute("src", profilePicture);
  img.addEventListener("error", handleImageError);
  img.addEventListener("load", handleImageLoad);
  return img;
}

/* 
    EVENT HANDLERS
  */

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}

/* 
    UTILS
  */

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
