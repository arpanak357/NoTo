// Simulating maximum limit of 15 notes
const MAX_NOTES = 15;
let noteCount = 0;

document.getElementById('add-note').addEventListener('click', () => {
    if (noteCount < MAX_NOTES) {
        const notesList = document.getElementById('notes-list');
        const newNote = document.createElement('li');
        newNote.textContent = `Note ${noteCount + 1}`;
        notesList.appendChild(newNote);
        noteCount++;
    } else {
        alert('You have reached the maximum limit of notes.');
    }
});

const addNoteButton = document.getElementById('add-note');
const notesContainer = document.getElementById('notes-container');

addNoteButton.addEventListener('click', () => {
    const newNote = document.createElement('textarea');
    newNote.classList.add('note');
    notesContainer.appendChild(newNote);
});
