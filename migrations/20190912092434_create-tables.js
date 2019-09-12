
exports.up = function (knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 128).notNullable()
        tbl.string('ingredients', 128).notNullable()
    })
        .createTable('ingredients', tbl => {
            tbl.increments()
            tbl.string('ingredient', 128)
        })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
