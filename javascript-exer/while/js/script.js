

function todo() {
    const todoList = ["Get Groceries", "Walk the dog", "Groom the cats",
                "Complete one coding exercise", "finish one chapter of book",
            "Write a journal entry", "workout", "meditate"];

    let i = 0;
    while ( i < todoList.length){
        const list = document.createElement("li");
        const errand = document.createTextNode(todoList[i]);
        list.appendChild(errand);

        const viewList = document.querySelector(".listItem");
        viewList.appendChild(list);
        i++;
    }
}