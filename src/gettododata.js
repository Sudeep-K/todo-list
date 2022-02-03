import { savedatatolocal } from "./savedatatolocal";
import {viewalltodos} from "./viewalltodos";

function createtodo (title, notes, date, project) {
    this.title = title;
    this.notes = notes;
    this.date = date;
    this.project = project;
}

function gettododata(e) {
    /* Prevent form from submitting */
    e.preventDefault();

    /* query selectors */
    const title_input = document.querySelector('#title');
    const notes_input = document.querySelector('#notes');
    const date_input = document.querySelector('#dateset');
    const project_selection = document.querySelector('#projectset');

    const new_todo = new createtodo(title_input.value, notes_input.value, date_input.value, project_selection.value);

    savedatatolocal(new_todo);
    viewalltodos();
}

export {gettododata};