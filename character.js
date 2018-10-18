// let characters = []

class Character {
    constructor(character) {
        this.name = character.name
        this.img = character.img
        this.appetite = character.appetite
        this.id = character.id
        this.status = 'Hungry'
        this.foods = [] 

        characters.push(this) 
    }

    addFood(food) {
        this.foods.push(food)
        this.checkStatus()
    }

    checkStatus() {
        let totalSustanance = 0
        this.foods.forEach(food => totalSustanance = totalSustanance + food.sustanance)
        if (totalSustanance > this.appetite) {
            this.status = 'Stuffed'
        }

    }
}