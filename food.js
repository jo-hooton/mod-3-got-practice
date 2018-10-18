// let foods = []

class Food {
    constructor(food) {
        this.name = food.name
        this.sustanance = food.sustanance
        this.id = food.id

        foods.push(this) 
        this.addFoodToList()
    }
static addFoods(foodData) {
    foodData.forEach(food => new Food(food))
}

addFoodToList() {
    optionEl = document.createElement('option')
    optionEl.value = this.id
    optionEl.innerText = this.name
    foodSelect.appendChild(optionEl)
}

}