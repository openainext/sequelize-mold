var fs        = require('fs')
  , path      = require('path')
  , Sequelize = require('sequelize')
  , lodash    = require('lodash')

function fileFilter(file) {
  return (file.indexOf('.') !== 0) && (file !== 'index.js') && (/.js$/.test(file) == true);
}

function sequelizeMold(database, username, password, modelsPath, options) {
  var sequelize = new Sequelize(database, username, password, options);
  var db = {};
  
  function loadModel(file) {
    var model = sequelize.import(path.join(modelsPath, file));
    db[model.name] = model;
  }
  
  function associateModel(modelName) {
    if (db[modelName].options.hasOwnProperty('associate')) {
      db[modelName].options.associate(db)
    }
  }
  
  fs
    .readdirSync(modelsPath)
    .filter(fileFilter)
    .forEach(loadModel)
    
  Object.keys(db).forEach(associateModel)
  
  
  
  return lodash.extend({
      sequelize: sequelize,
      Sequelize: Sequelize
    }, db);
}

module.exports = sequelizeMold;
