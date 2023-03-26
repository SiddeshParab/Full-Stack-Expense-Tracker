const path = require('path');

const express = require('express');

const sequelize = require('./util/database');

const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');

var cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.use(userRoutes);

sequelize.sync({alter: true}).then(result => {
   console.log("All models were synchronized successfully.");
   console.log(result);
   app.listen(3000);
})
.catch((err) => {
   console.log(err)
});
