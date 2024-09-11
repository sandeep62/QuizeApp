
export const renderNotes=(notes)=>{
    let newNote=notes.map(({id,note,title,ispinned,Archieved})=>{
        return (
                `<div class="single-note">
                    <div  data-type="del" data-id="${id}" class=" d-flex align-center title-container"  >
                        <span>${title}</span>
                        <button  data-id="${id}" class=" button del-btn v-hidden ">
                            <span class=" material-icons-outlined " data-type="del" data-id=" ${id}">
                                delete
                            </span>
                        </button> 
                    </div>
                    <p>${note}</p>
                    <div class=" d-flex align-center title-container" >
                        <button class=" button del-btn v-hidden"  data-type=" pinned" data-id=" ${id}">
                            <span class=" material-icons-outlined " data-id="${id}" data-type=" pinned">
                                push_pin
                            </span>
                        </button>
                        <button class=" button del-btn v-hidden" data-type="archieve" data-id=" ${id}">
                            <span class="material-icons-outlined " data-id="${id}" data-type="archieve">
                               archive
                            </span>
                        </button>
                    </div>

                </div>`
        )
    });
    newNote=newNote.join("");
    return newNote;
}