import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import { displaytodo } from "./todotoday";

function viewtodonextweek() {
    /* query selector */
    const greetings_span = document.querySelector("#greetings span");
    let todo_list = document.querySelector("#todo-list");

    /* clear the todo-list div for appending new elements */
    todo_list.textContent = "";

    /* greetings to be today */
    greetings_span.textContent = "Next 7 Days";

    const today = new Date();

    let todo_objs;

    if (localStorage.getItem("todo_objs") === null) {
        todo_objs = [];
    } else {
        todo_objs = JSON.parse(localStorage.getItem("todo_objs"));
    }

    todo_objs.forEach(element => {
        let element_date = new Date(element.date);
        let difference_days = differenceInCalendarDays(today, element_date);
        if (difference_days > 0 && difference_days < 8) {
            displaytodo(element);
        }
    });
}

export {viewtodonextweek};
