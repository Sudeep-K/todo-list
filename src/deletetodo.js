function deletetodo(event) {
    console.log("delete button pressed!!!");
    let todo_objs;

    if (localStorage.getItem("todo_objs") === null) {
        todo_objs = [];
    } else {
        todo_objs = JSON.parse(localStorage.getItem("todo_objs"));
    }

    let title_todlt = event.target.parentElement.previousElementSibling.textContent;
    let index_todlt;
    todo_objs.forEach(function (element, index){
        if (element.title == title_todlt) {
            index_todlt = index;
        }
    });

    todo_objs.splice(parseInt(index_todlt), 1);
    event.target.parentElement.parentElement.remove();
    localStorage.setItem("todo_objs", JSON.stringify(todo_objs));
}

export {deletetodo};