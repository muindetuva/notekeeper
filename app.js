const noteForm = document.querySelector("#note-form");
const note = document.querySelector("#note");
const notesSection = document.querySelector("#notes-section");

const notes = [];

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  notes.push(note.value);

  localStorage.setItem("notes", JSON.stringify(notes));

  let paragraph = document.createElement("p");

  paragraph.classList.add("note");

  paragraph.textContent = note.value;

  notesSection.appendChild(paragraph);

  note.value = "";
});

const renderNotes = () => {
  const localStorageNotes = localStorage.getItem("notes");

  const parsedNotes = JSON.parse(localStorageNotes);

  notes.push(...parsedNotes);

  console.log(localStorageNotes);
  console.log(parsedNotes);

  parsedNotes.map((note) => {
    const paragraph = document.createElement("p");

    paragraph.classList.add("note");

    paragraph.textContent = note;

    notesSection.append(paragraph);
  });
};

renderNotes();
