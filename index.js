const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoute = require('./routes/auth');

let port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



  
  


app.use('/api/user', authRoute);



// Запуск сервера
app.listen(port, () => {
    console.log(`listening on *:${port}`);
});