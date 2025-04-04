document.addEventListener('DOMContentLoaded', function() {
    const noteInput = document.getElementById('noteInput');
    const attachFileBtn = document.getElementById('attachFileBtn');
    const saveBtn = document.getElementById('saveBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const searchBar = document.getElementById('searchBar');
    const notesList = document.getElementById('notesList');
    const imagePreview = document.getElementById('imagePreview');
    const exportBtn = document.getElementById('exportBtn');
    const importBtn = document.getElementById('importBtn');
    const importFile = document.getElementById('importFile');
    const fileInput = document.getElementById('fileInput');
    const clock = document.getElementById('clock');
    const body = document.body;

    let notes = [];
    let draggedNote = null;

    // Array of background images
    const backgroundImages = [
        'https://imgs.search.brave.com/FIlvMPJ7QWXVvL6p5-wTOgLwelH0To2HC_t6IFvRmHc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM5ODA4/MDUuanBn',
        'https://imgs.search.brave.com/9SgCkJR0zCj-nz-dKlZWcklCRlsCthzqtoEAb5yIh44/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstb2FheDE4/a2FhcGtva2Fyby5q/cGc',
        'https://imgs.search.brave.com/4eP-sN87E3jL-tCDRHZ0L1xpglTKfySnjAjXKBIYeeI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYmVhY2gt/bzg1MHpqMmEwZDd0/YjV5OC5qcGc',
        'https://imgs.search.brave.com/xN25xZ4BrsyfI-ItvzWaTRnRSO83eG8yEHFtf26C2JI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvNGstYW5kcm9p/ZC1pNndrazRkdGR5/bWN0NjNiLmpwZw',
        'https://imgs.search.brave.com/7jhy_OnqvK32biZlJ2BuJjZU2DR7t669R6bjZIaaxbs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDQ2NzY1/NzQuanBn'
    ];

    // Function to set a random background image
    function setRandomBackground() {
        const randomIndex = Math.floor(Math.random() * backgroundImages.length);
        const randomImage = backgroundImages[randomIndex];
        body.style.backgroundImage = `url('${randomImage}')`;
    }

    // Function to update the clock
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        const microseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0'); // Simulated microseconds
        const picoseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0'); // Simulated picoseconds
        const femtoseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0'); // Simulated femtoseconds
        const attoseconds = String(Math.floor(Math.random() * 1000)).padStart(3, '0'); // Simulated attoseconds

        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'

        clock.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}.${microseconds}.${picoseconds}.${femtoseconds}.${attoseconds} ${ampm}`;
    }

    // Update the clock every millisecond
    setInterval(updateClock, 1);

    // Load notes from local storage
    function loadNotes() {
        const storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            try {
                notes = JSON.parse(storedNotes);
            } catch (e) {
                console.error("Failed to load notes from local storage", e);
                notes = []; // Initialize notes to prevent further errors
            }
            renderNotes();
        }
    }

    // Save notes to local storage
    function saveNotes() {
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    // Render notes to the list
    function renderNotes() {
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteItem = document.createElement('div');
            noteItem.classList.add('noteItem');
            noteItem.draggable = true;
            noteItem.dataset.index = index;

            let noteContent = `<span>${note.text}</span>`;
            if (note.image) {
                noteContent += `<img src="${note.image}" alt="">`;
            }

            noteItem.innerHTML = noteContent;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteNoteBtn');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation();
                deleteNote(index);
            });
            noteItem.appendChild(deleteButton);

            notesList.appendChild(noteItem);
        });
    }

    // Add a new note
    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText !== '') {
            const newNote = {
                text: noteText,
                image: imagePreview.src !== '#' ? imagePreview.src : null
            };
            notes.push(newNote);
            saveNotes();
            renderNotes();
            noteInput.value = '';
            imagePreview.src = '#';
            imagePreview.style.display = 'none';
        }
    }

    // Delete a note
    function deleteNote(index) {
        notes.splice(index, 1);
        saveNotes();
        renderNotes();
    }

    // Clear all notes
    function clearAllNotes() {
        notes = [];
        saveNotes();
        renderNotes();
    }

    // Search notes
    function searchNotes() {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredNotes = notes.filter(note => note.text.toLowerCase().includes(searchTerm));
        notesList.innerHTML = '';
        filteredNotes.forEach((note, index) => {
            const noteItem = document.createElement('div');
            noteItem.classList.add('noteItem');

            let noteContent = `<span>${note.text}</span>`;
            if (note.image) {
                noteContent += `<img src="${note.image}" alt="">`;
            }

            noteItem.innerHTML = noteContent;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteNoteBtn');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', function(event) {
                event.stopPropagation();
                deleteNote(index);
            });
            noteItem.appendChild(deleteButton);

            notesList.appendChild(noteItem);
        });
    }

    // Handle image attachment
    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });

    attachFileBtn.addEventListener('click', function() {
        fileInput.click();
    });

    // Export notes
    exportBtn.addEventListener('click', function() {
        const json = JSON.stringify(notes);
        const blob = new Blob([json], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notes.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Import notes
    importBtn.addEventListener('click', function() {
        importFile.click();
    });

    importFile.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const importedNotes = JSON.parse(e.target.result);
                    if (Array.isArray(importedNotes)) {
                        notes = importedNotes;
                        saveNotes();
                        renderNotes();
                    } else {
                        alert('Error importing notes: File does not contain an array of notes.');
                    }
                } catch (error) {
                    alert('Error importing notes: Invalid file format.');
                    console.error('Import error:', error); // Log the error for debugging
                }
            };
            reader.readAsText(file);
        }
    });

    // DRAG AND DROP FUNCTIONALITY
    notesList.addEventListener('dragstart', function(event) {
        draggedNote = event.target;
        event.dataTransfer.setData('text', event.target.dataset.index);
    });

    notesList.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    notesList.addEventListener('drop', function(event) {
        event.preventDefault();
        if (event.target.classList.contains('noteItem')) {
            const dropTarget = event.target;
            const draggedIndex = parseInt(draggedNote.dataset.index);
            const dropIndex = parseInt(dropTarget.dataset.index);

            const temp = notes[draggedIndex];
            notes.splice(draggedIndex, 1);
            notes.splice(dropIndex, 0, temp);

            saveNotes();
            renderNotes();
        }
    });

    // Event listeners
    saveBtn.addEventListener('click', addNote);
    clearAllBtn.addEventListener('click', clearAllNotes);
    searchBar.addEventListener('input', searchNotes);

    // Set random background on popup load
    setRandomBackground();

    // Load notes on popup load
    loadNotes();

    // Initial clock update
    updateClock();
});
