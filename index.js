const characterList = document.querySelector('#container')
const characterSelect = document.querySelector('#character-select')
const foodSelect = document.querySelector('#food-select')


function appendCharacter (character) {
    const characterItem = renderCharacter(character)
    characterList.appendChild(characterItem)
}

function appendCharacters (characters) {
    characters.forEach(character => appendCharacter(character))
}

function renderCharacter (character) {
    new Character(character)
    const characterItem = document.createElement('div')
    characterItem.classList.add('container')
    characterItem.innerHTML = `
        <div style="width:230px;margin:10px;background:#818387;color:#fff" class="frame">
          <h1 class="center-text">${character.name}</h1>
          <div style="width:239px;margin:auto">
            <div style="width:150px;margin:auto">
              <img data-id="${character.id}" data-action="flip" class="character-img" src="${character.img}">
              <p>Appetite: ${character.appetite}
              <div class="myStatus" data-id="${character.id}">Status: Hungry</div>
              <div class="myfoods" data-id="${character.id}">Foods Eaten:</div>
              </p>
            </div>
          </div>
        </div>
    `
    optionEl = document.createElement('option')
    optionEl.value = character.id
    optionEl.innerText = character.name
    characterSelect.appendChild(optionEl)
    return characterItem
    
}

function checkStatus(statusEl, food) {
    const character = characters.find(char => {
        char.id === parseInt(statusEl.dataset.id)
        return char
    })
    console.log(character.appetite)
    

    let totalSustanance = 0
    foods.forEach(food => {
        totalSustanance += totalSustanance + food.sustanance
    })
    if (totalSustanance > character.appetite) {
        statusEl.innerText = 'Status: Stuffed'
    }
}

let characters = []

API.getCharacters()
   .then(characterData => {
       characters = characterData
       appendCharacters(characterData)
   }) 
   
let foods = []

API.getFood()
.then(foodData => {
    food = foodData
    foodData.forEach(food => {
        addFoodToList(food)
    })
})

const addFoodToList = (food) => {
    optionEl = document.createElement('option')
    optionEl.value = food.id
    optionEl.innerText = food.name
    foodSelect.appendChild(optionEl)
}

const feedBtn = document.getElementById('feed-button')

feedBtn.addEventListener('click', event => {
    const personToFeed = document.getElementById('character-select')
    const foodToFeed = document.getElementById('food-select')
    const personFoods = document.querySelectorAll('.myfoods')
    const personStatus = document.querySelectorAll('.myStatus')
    event.preventDefault()
    personFoods.forEach((personFood, idx) => {
        // console.log(personToFeed.selectedIndex + 1 === parseInt(personFood.dataset.id))
        if((personToFeed.selectedIndex + 1) === parseInt(personFood.dataset.id)) {
            
            personFood.innerText += ` ${foodToFeed.selectedOptions[0].innerText}`
            checkStatus(personStatus[idx], foodToFeed)
        }
        
    })
    
})
