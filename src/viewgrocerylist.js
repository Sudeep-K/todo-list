import {displaytodo} from "./todotoday.js"

function viewgrocerylist() {
    /* query selector */
    const greetings_span = document.querySelector("#greetings span");
    let todo_list = document.querySelector("#todo-list");

    /* clear the todo-list div for appending new elements */
    todo_list.textContent = "";

    /* greetings to be today */
    greetings_span.textContent = "Grocery List";

    let todo_objs;

    if (localStorage.getItem("todo_objs") === null) {
        todo_objs = [];
    } else {
        todo_objs = JSON.parse(localStorage.getItem("todo_objs"));
    }

    todo_objs.forEach(element => {
        if (element.project == "Grocery list") {
            displaytodo(element);
        }
    });
}

export {viewgrocerylist};
