import { viewform, hideform } from "./popupform";
import { gettododata } from "./gettododata";
import { viewtodotoday } from "./todotoday";
import { viewtodonextweek } from "./nextweektodo";
import { viewalltodos } from "./viewalltodos";
import { viewpersonalproject } from "./viewpersonalproject";
import { viewgrocerylist } from "./viewgrocerylist";
import { viewworkproject } from "./viewworkproject";
import { checkmarkdiv } from "./checkmarkdiv";
import { deletetodo } from "./deletetodo";
import { detailviewhide, detailviewview } from "./detailview";

/* query selectors */
const todo_btn = document.querySelector('#create-todo-btn');
const overlay_div = document.querySelector('#overlay');
const submit_btn = document.querySelector('#submit');

const today_div = document.querySelector("#today-div");
const next7days_div = document.querySelector('#next7days-div');
const alltasks_div = document.querySelector('#alltasks-div');
const personalproj_div = document.querySelector('#personal-project');
const workproj_div = document.querySelector('#work-project');
const grocerylist_div = document.querySelector('#grocery-list');

const checkmark_btn = document.querySelector('#todo-list');
const delete_btn = document.querySelector('#todo-list');

const title_btn_expand = document.querySelector('#todo-list');
const overlaydisplay = document.querySelector('#overlaydisplay');

/* event listeners */
todo_btn.addEventListener('click', viewform);
overlay_div.addEventListener('click', hideform);
submit_btn.addEventListener('click', function(e)
    {   
        gettododata(e);
        hideform();
    }
    );

today_div.addEventListener("click", viewtodotoday);
next7days_div.addEventListener("click", viewtodonextweek);
alltasks_div.addEventListener("click", viewalltodos);
personalproj_div.addEventListener("click", viewpersonalproject);
grocerylist_div.addEventListener("click", viewgrocerylist);
workproj_div.addEventListener("click", viewworkproject);

checkmark_btn.addEventListener("click", function(event) {
    checkmarkdiv(event);
});

delete_btn.addEventListener("click", function(event) {
    deletetodo(event);
});

title_btn_expand.addEventListener("click", function(event) {
    if (event.target.className == "todo-item") {
        detailviewview(event);
    }
});

overlaydisplay.addEventListener("click", detailviewhide);