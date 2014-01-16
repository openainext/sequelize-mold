sequelize-mold
==============

A simple project model loader for Sequelize. This is slightly modified from the Sequelize express example.
You can create a `models` directoy in your project an add your Sequelize models.
There should be an example located in the git repository.

# Install

    npm install --save sequelize sequelize-mold

# Usage

     var mold = require('sequelize-mold');
     
     var databaseName = "development";
     var dbUserName = ""; 
     var dbPassword = "";
     var modelsPath = __dirname + "/models";
     var sequelizeOptions = {};
     
     var database = mold(databaseName, dbUserName, dbPassword, modelsPath, sequelizeOptions);
     
     database.sequelize.sync({force: false}).complete(ready);
     
     function ready(err) {
       
     }
     
     

# Class: Mold(database, username, password, modelsPath, sequelizeOptions)

The database, username and password need to match that of your SQL server.
The **modelsPath** argument is the directory name containing your Sequelize models.
The **sequelizeOptions** object should contain any options you need when initializing Sequelize.

Returns an object containing the **Sequelize** module, **sequelize** instance and any models you defined.
