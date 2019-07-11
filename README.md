# Sequelized Burger
This full-stack web app is a simple CRUD app where the user can add burgers to a list and then update those burgers.

[Github](https://github.com/bradotron/sequelized-burger)
[Heroku](https://frozen-ravine-15662.herokuapp.com/)

# Using the App
The app is a single-page interface. The user has one input box with an Add Burger button. The user types a creative burger name into the box and hits the button.

The burger is added to the list on the left hand side; indicating the burger is available. The user can then click the devour button, which updates the burger in the database and the burger will be moved to the sold out list.

# App Organization
This application was created using express-generator to create an express application that uses Handlebars for presenting the front end. The app uses a MySQL database, with the sequelize node package.

## Folder Structure
```
|-- projectRoot
    |-- .gitignore
    |-- app.js
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- bin
    |   |-- www
    |-- config
    |   |-- config.json
    |   |-- connection.js
    |-- db
    |   |-- schema.sql
    |   |-- seeds.sql
    |-- models
    |   |-- burger.js
    |   |-- index.js
    |-- public
    |   |-- javascript
    |   |   |-- script.js
    |   |-- stylesheets
    |       |-- style.css
    |-- routes
    |   |-- apiRoutes.js
    |   |-- htmlRoutes.js
    |-- views
        |-- error.hbs
        |-- index.hbs
        |-- layout.hbs
```