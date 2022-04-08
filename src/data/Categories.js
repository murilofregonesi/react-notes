export default class Categories {
    constructor() {
        this.categories = [];
        this.listeners = [];
    }

    addListener(fn) {
        this.listeners.push(fn);
    }

    removeListener(fn) {
        this.listeners = this.listeners.filter(f => f !== fn);
    }

    callListeners() {
        this.listeners.forEach(fn => fn(this.categories));
    }

    addCategory(category) {
        this.categories.push(category);
        this.callListeners();
    }
}
