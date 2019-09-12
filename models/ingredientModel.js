const db = require('../data/dbConfig')

const recipes = require('./recepiesModels')

module.exports = {
    getRecipes() {
        return db('recipes')
    }
}