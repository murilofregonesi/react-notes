export default class Notes {
    constructor() {
        this.notes = [];
        this.listeners = [];
    }

    addListener(fn) {
        this.listeners.push(fn);
    }

    callListeners() {
        this.listeners.forEach(fn => fn(this.categories));
    }

    addNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.notes.push(newNote);
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
