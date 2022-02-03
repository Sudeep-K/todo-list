function detailviewview(event) {
    /* query selectors */
    const viewform = document.querySelector('#view-todo');
    const overlay_div = document.querySelector('#overlaydisplay');
    const title_div = document.querySelector('#viewtodo-title');
    const project_name = document.querySelector('#viewtodo-projectname');
    const notes_div = document.querySelector('#viewtodo-notes');
    const dates_div = document.querySelector('#viewtodo-date');

    /* set the display and overlay as active */
    viewform.classList.add('active');
    overlay_div.classList.add('active');

    /* search and store objects from local storage */
    let todo_objs;

    if (localStorage.getItem("todo_objs") === null) {
        todo_objs = [];
    } else {
        todo_objs = JSON.parse(localStorage.getItem("todo_objs"));
    }

    /* fill up the details */
    let title_oftarget = event.target.textContent;
    todo_objs.forEach(element => {
        if (element.title == title_oftarget) {
            title_div.textContent = element.title;
            project_name.textContent = element.project;
            notes_div.textContent = element.notes;
            dates_div.textContent = element.date;
        }
    });
}

function detailviewhide() {
    /* query selectors */
    const viewform = document.querySelector('#view-todo');
    const overlay_div = document.querySelector('#overlaydisplay');

    viewform.classList.remove('active');
    overlay_div.classList.remove('active');
}

export {detailviewhide, detailviewview};