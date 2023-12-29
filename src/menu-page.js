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

    console.log(myMenu.getMenu());

    for (let food of myMenu.getMenu()) {
        console.log(food);
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
    const foodImgPath = `../src/img/${food.name.toLowerCase().replaceAll(" ", "-")}.png`;
    console.log(foodImgPath);
    foodImgDiv.style = `background-image: url('${foodImgPath}');`;

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

function createFood (name, price, type, desc) {
    return { name, price, type, desc };
}

function menu () {
    const menu = []
    const addToMenu = function (food) {
        menu.push(food);
    }

    const getMenu = () => menu;

    return { addToMenu, getMenu };
}

const bento = createFood("Bento Box", 12, "Main", "Classic bento box filled with rice, sausage, egg, and veggies.");
const cake = createFood("Chocolate Cake", 25, "Dessert", "Chocolate cake perfect for young witches.");
const eggsAndBacon = createFood("Eggs and Bacon", 10, "Main", "Sunny-side up eggs with crispy bacon.");
const eggsOnToast = createFood("Eggs On Toast", 8, "Main", "Sunny-side up eggs over fluffy bread.");
const fishAndCarrots = createFood("Fish and Carrots", 16, "Main", "Fish served with creamy sauce and carrots.");
const ramen = createFood("Ramen", 15, "Main", "Ramen served with cha shu pork and hard-boiled egg.");
const siberiaCake = createFood("Siberia Cake", 10, "Dessert", "Sponge cake with read bean filling.");

const myMenu = menu();
myMenu.addToMenu(bento);
myMenu.addToMenu(cake);
myMenu.addToMenu(eggsAndBacon);
myMenu.addToMenu(eggsOnToast);
myMenu.addToMenu(fishAndCarrots);
myMenu.addToMenu(ramen);
myMenu.addToMenu(siberiaCake);

export { loadMenuPage }