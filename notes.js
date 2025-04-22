window.onload = function () {
    displayNotes();
  };
  
  function addNote() {
    const noteInput = document.getElementById("note-input");
    const noteText = noteInput.value.trim();
  
    if (noteText === "") return;
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
  }
  
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
  
  function displayNotes() {
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    notes.forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.textContent = note;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => deleteNote(index);
  
      noteDiv.appendChild(deleteBtn);
      notesList.appendChild(noteDiv);
    });
  }