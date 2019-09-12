const db = require('../data/dbConfig')

const recipes = require('./recepiesModels')

module.exports = {
    getRecipes() {
        return db('recipes')
    },

    getShoppingList(recipe_id) {
        return db('recipes').where({ recipe_id })
    }
}