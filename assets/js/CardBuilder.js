function createElement(type, { classNames, onClick }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}





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


