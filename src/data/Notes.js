export default class Notes {
    constructor() {
        this.notes = [];
        this.listeners = [];
    }

    addListener(fn) {
        this.listeners.push(fn);
    }

    removeListener(fn) {
        this.listeners = this.listeners.filter(f => f !== fn);
    }

    callListeners() {
        this.listeners.forEach(fn => fn(this.notes));
    }

    addNote(title, text, category) {
        const newNote = new Note(title, text, category);
        this.notes.push(newNote);
        this.callListeners();
    }

    removeNote(index) {
        this.notes.splice(index, 1);
        this.callListeners();
    }
}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}
