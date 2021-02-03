"use strict";

// new URL("https://www.facebook.com/JasonStatham/");
// new Map()
//   .set("www.facebook.com", "src_to_icon")
//   .set("www.facebook.com", "src_to_icon")
//   .set("www.facebook.com", "src_to_icon");

let mapFor = new Map();
mapFor.set(
  "www.facebook.com",
  "/assets/icons/iconfinder_facebook_circle_gray_107140.svg"
);
mapFor.set(
  "www.instagram.com",
  "/assets/icons/iconfinder_instagram_circle_gray_107138.svg"
);
mapFor.set("twitter.com", "/assets/icons/twitter.svg");








// fetch('http://192.168.1.148:3000/users')
// .then((response) => response.json())
// .then((data)=> {
//   const cardContainer = document.getElementById("root");
//   const cards = data.map((place)=> createPlaceCards(place)) 
//   cardContainer.append(...cards);
// })
// .catch((err)=> {
//   console.log('U JS-Kung-FU is weak')
// });





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

  const div = createElement(
    "div",
    { classNames: ["linksWrapper"] },
    ...createContacts(place)
  );

  const article = createElement(
    "article",
    { classNames: ["cardContainer"] },
    createImageWrapper(place),
    h2,
    p,
    div
  );
  return createElement("li", { classNames: ["cardWrapper"], onClick:SaintNibleOfMember}, article);
}

function createContacts(place) {
  const {contacts} = place;
  const contactsElem = contacts.map((link) => {
    let hostLink = new URL(link).hostname;
    const wrapper = createElement("div", { classNames: ["linkWrapper"] }) ;
    const linkImages = createElement("img", {
      classNames: ["linkImages"],
    });
    const linksTo = createElement("a", {
      classNames: ["link"],
      });
    

    
      linkImages.setAttribute('alt', mapFor.get(hostLink))
      linkImages.setAttribute('src', mapFor.get(hostLink))
      linksTo.setAttribute('href', link)
      linksTo.append(linkImages);
      wrapper.append(linksTo);
      return wrapper;
    


    // switch (hostLink) {
    //   case "www.facebook.com":
    //     linkImages.setAttribute("alt", "Facebook");
    //     linkImages.setAttribute(
    //       "src",
    //       "../assets/icons/iconfinder_facebook_circle_gray_107140.svg"
    //     );
    //     break;
    //   case "www.instagram.com":
    //     linkImages.setAttribute("alt", "Instagram");
    //     linkImages.setAttribute(
    //       "src",
    //       "../assets/icons/iconfinder_instagram_circle_gray_107138.svg"
    //     );
    //     break;
    //   case "twitter.com":
    //     linkImages.setAttribute("alt", "Twitter");
    //     linkImages.setAttribute("src", "../assets/icons/twitter.svg");
    //     break;
    // }
    // linksTo.append(linkImages);
    // wrapper.append(linksTo);
    // return wrapper;
  });
  return contactsElem;
}
//-------------------------------------------------------------------



