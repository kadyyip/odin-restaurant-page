import mainImage from './img/main.jpeg';
import ramenImg from './img/ramen.png';

function loadHomePage() {
    const contentDiv = document.querySelector("#content");
    const mainImg = createDomElement("img", "main-img");
    mainImg.src = mainImage;
    contentDiv.appendChild(mainImg);

    const headlineDiv = createDomElement("div", "section-header", "food made with love ♡");
    contentDiv.appendChild(headlineDiv);

    const aboutDiv = createDomElement("div", "about", 
        "welcome! we strive to make quality meals that remind you of home. \
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id \
        est laborum.");
    contentDiv.appendChild(aboutDiv);

    const foodImg = document.createElement("img");
    foodImg.src = ramenImg;
    contentDiv.appendChild(foodImg);

    const testimonialsDiv = createDomElement("div", "testimonials");
    contentDiv.appendChild(testimonialsDiv);
    const testimonialsHeaderDiv = createDomElement("div", "section-header", "testimonials");
    testimonialsDiv.appendChild(testimonialsHeaderDiv);

    const reviewsDiv1 = createDomElement("div", "review");
    testimonialsDiv.appendChild(reviewsDiv1);
    const quoteDiv1 = createDomElement("div", "quote", 
        "Ghibli's Gourmet is so \cozy and the food is delicious!");
    const authorDiv1 = createDomElement("div", "author", "- Kiki");
    reviewsDiv1.appendChild(quoteDiv1);
    reviewsDiv1.appendChild(authorDiv1);

    const reviewsDiv2 = createDomElement("div", "review");
    testimonialsDiv.appendChild(reviewsDiv2);
    const quoteDiv2 = createDomElement("div", "quote", 
        "Ghibli's Gourmet has become my favorite restaurant. Pleasant atmosphere and amazing food.");
    const authorDiv2 = createDomElement("div", "author", "- Sophie");
    reviewsDiv2.appendChild(quoteDiv2);
    reviewsDiv2.appendChild(authorDiv2);
}

function createDomElement(tag, className = null, textContent = "") {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    element.textContent = textContent;
    return element;
}


export { loadHomePage }