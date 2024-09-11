
import {renderNotes} from "./app.js";

let note=document.querySelector(".note");
let title=document.querySelector(".title");
let addnotebutton=document.querySelector(".add-btn");
let showNotes=document.querySelector(".notes-display");
let showPinnedNotes=document.querySelector(".pinned-notes-container");
let NotesContainer=document.querySelector(".note-containers");
let ArrayofNotes= JSON.parse(localStorage.getItem("notes"))||[];

showNotes.addEventListener("click",(event)=>{
    let type=event.target.dataset.type;
    let noteid=event.target.dataset.id;
    switch(type)
    {
        case "del":
            ArrayofNotes=ArrayofNotes.filter(({id})=>{id.toString()!==noteid});
            NotesContainer.innerHTML=renderNotes(ArrayofNotes);
            localStorage.setItem("notes",JSON.stringify(ArrayofNotes));
            console.log("delete");
            break;
    }


})
addnotebutton.addEventListener("click",()=>{
    if((note.value.trim().length) >0 || (title.value.trim().length)>0)
        {
            ArrayofNotes=[...ArrayofNotes,{id:Date.now(),
                 note:note.value.trim(),
                 title:title.value.trim(),
                 ispinned:false,
                Archieved:false

            }]
        note.value=title.value="";
        NotesContainer.innerHTML=renderNotes(ArrayofNotes);
        localStorage.setItem("notes",JSON.stringify(ArrayofNotes));
        }
        

})
NotesContainer.innerHTML=renderNotes(ArrayofNotes);