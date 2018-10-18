class API {
    static init() {
        this.characterUrl = 'http://localhost:3000/characters'
        this.foodUrl = 'http://localhost:3000/foods'
    }

    static getFood() {
      return fetch(this.foodUrl)
            .then(resp => resp.json()) 
    }

    

    static getCharacters() {
        return fetch(this.characterUrl)
        .then(resp => resp.json())
    }

    static getCharacter(id) {
        return fetch(`${this.characterUrl}/${id}`)
         .then(resp => resp.json())
    }


    static editCharacter(character) {
        return fetch(`${this.characterUrl}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ character })
        }).then(resp => resp.json())
    }
}

API.init()