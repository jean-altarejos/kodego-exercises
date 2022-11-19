//Grocery-Items JS
const btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener("click", addNew);


function showList() {
    const groceryList = ["Tomato", "Onion", "Garlic", "Salt", 
    "Pepper", "Rosemary", "Chili", "Fish", "Chicken", "Pork",
    "Beef", "Vegetables", "Fruits", "Butter", "Cheese", "Pasta",
    "Ketchup", "Soy Sauce", "Vinegar", "Fish Sauce"];

    for (let i = 0; i <= groceryList.length-1; i++){
        const newLi = document.createElement("li");
        const item = document.createTextNode(groceryList[i]);
        newLi.appendChild(item);

        const newList = document.querySelector("#grocery-list");
        newList.appendChild(newLi);
    }
}

function addNew() {
    const newItem = document.createElement("li");
    const text = document.querySelector(".input-item").value;
    const item = document.createTextNode(text);
    newItem.appendChild(item);

    const newList = document.querySelector("#grocery-list");
    newList.appendChild(newItem);
}






