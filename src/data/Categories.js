export default class Categories {
    constructor() {
        this.categories = [];
        this.listeners = [];
    }

    addListener(fn) {
        this.listeners.push(fn);
        this.callListeners();
    }

    callListeners() {
        this.listeners.forEach(fn => fn(this.categories));
    }

    addCategory(category) {
        this.categories.push(category);
        console.log(this.categories);
    }
}
