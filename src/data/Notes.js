export default class Notes {
    constructor() {
        this.notes = [];
    }

    addNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        console.log(this.notes);
    }

    removeNote(index) {
        this.notes.splice(index, 1);
        console.log(this.notes);
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}
