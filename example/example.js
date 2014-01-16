var mold = require('../../sequelize-mold')

/*
 * This example requires that you set your database information in
 * environmental variables.
 *
 * export DATABASE_NAME=""
 * export DATABASE_USER=""
 * export DATABASE_PASS=""
 *
 * node example.js
 * 
 */

var database = mold(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  // Set the path to our examples models.
  __dirname + '/models',
  // Set any Sequelize options.
  {}
);

database
  .sequelize
  // Sync all our models without destroying existing data.
  .sync({force: false})
  // Call the ready function when they sync is complete.
  .complete(ready)

function ready(err) {
  if(err) return console.log(err);
  /* You can start using the database object now. This would be
   * a good place to start listening for your http connections. :)
   */
  console.log('Ready!')
  console.log(database)
}


