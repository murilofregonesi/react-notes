export default class Categories {
    constructor() {
        this.categories = [];
    }

    addCategory(category) {
        this.categories.push(category);
        console.log(this.categories);
    }
}
