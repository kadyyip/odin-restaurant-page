import bentoBoxImg from './img/bento-box.png';
import chocolateCakeImg from './img/chocolate-cake.png';
import eggsAndBaconImg from './img/eggs-and-bacon.png';
import eggsOnToastImg from './img/eggs-on-toast.png';
import fishAndCarrotsImg from './img/fish-and-carrots.png';
import ramenImg from './img/ramen.png';
import siberiaCakeImg from './img/siberia-cake.png';

function loadMenuPage() {
    const content = document.querySelector("#content");
    const mainHeaderDiv = document.createElement("div");
    mainHeaderDiv.classList.add("section-header");
    mainHeaderDiv.textContent = "main";
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    const dessertHeaderDiv = document.createElement("div");
    dessertHeaderDiv.classList.add("section-header");
    dessertHeaderDiv.textContent = "dessert";
    const dessertDiv = document.createElement("div");
    content.appendChild(mainHeaderDiv);
    content.appendChild(mainDiv);
    content.appendChild(dessertHeaderDiv);
    content.appendChild(dessertDiv);
    dessertDiv.classList.add("dessert");

    for (let food of myMenu.getMenu()) {
        if (food.type === "Main") {
            mainDiv.append(createFoodContainerDiv(food));
        } else if (food.type === "Dessert") {
            dessertDiv.append(createFoodContainerDiv(food));
        }
    }
}

function createFoodContainerDiv (food) {
    let foodContainerDiv = document.createElement("div");
    foodContainerDiv.classList.add("food-container");

    let foodImgDiv = document.createElement("div");
    foodImgDiv.classList.add("food-img");
    foodImgDiv.style = `background-image: url('${food.img}');`;

    let foodInfoDiv = createFoodInfoDiv(food);

    foodContainerDiv.appendChild(foodImgDiv);
    foodContainerDiv.appendChild(foodInfoDiv);

    return foodContainerDiv;
}

function createFoodInfoDiv (food) {
    let foodInfoDiv = document.createElement("div");
    foodInfoDiv.classList.add("food-info");

    let foodNameDiv = document.createElement("div");
    foodNameDiv.classList.add("food-name");
    foodNameDiv.textContent = food.name;

    let foodDescDiv = document.createElement("div");
    foodDescDiv.classList.add("food-desc");
    foodDescDiv.textContent = food.desc;

    let foodPriceDiv = document.createElement("div");
    foodPriceDiv.classList.add("food-price")
    foodPriceDiv.textContent = "$" + food.price;

    foodInfoDiv.appendChild(foodNameDiv);
    foodInfoDiv.appendChild(foodDescDiv);
    foodInfoDiv.appendChild(foodPriceDiv);

    return foodInfoDiv;
}

function createFood (name, price, type, desc, img) {
    return { name, price, type, desc, img };
}

function menu () {
    const menu = []
    const addToMenu = function (food) {
        menu.push(food);
    }

    const getMenu = () => menu;

    return { addToMenu, getMenu };
}

const bento = createFood("Bento Box", 12, "Main", "Classic bento box filled with rice, sausage, egg, and veggies.", bentoBoxImg);
const cake = createFood("Chocolate Cake", 25, "Dessert", "Chocolate cake perfect for young witches.", chocolateCakeImg);
const eggsAndBacon = createFood("Eggs and Bacon", 10, "Main", "Sunny-side up eggs with crispy bacon.", eggsAndBaconImg);
const eggsOnToast = createFood("Eggs On Toast", 8, "Main", "Sunny-side up eggs over fluffy bread.", eggsOnToastImg);
const fishAndCarrots = createFood("Fish and Carrots", 16, "Main", "Fish served with creamy sauce and carrots.", fishAndCarrotsImg);
const ramen = createFood("Ramen", 15, "Main", "Ramen served with cha shu pork and hard-boiled egg.", ramenImg);
const siberiaCake = createFood("Siberia Cake", 10, "Dessert", "Sponge cake with read bean filling.", siberiaCakeImg);

const myMenu = menu();
myMenu.addToMenu(bento);
myMenu.addToMenu(cake);
myMenu.addToMenu(eggsAndBacon);
myMenu.addToMenu(eggsOnToast);
myMenu.addToMenu(fishAndCarrots);
myMenu.addToMenu(ramen);
myMenu.addToMenu(siberiaCake);

export { loadMenuPage }