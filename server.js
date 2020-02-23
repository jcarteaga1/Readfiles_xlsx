require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb, filename)=>{
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage:storage}).single('xlsx'));

require('./app/routes')(app);

app.listen(3000, ()=>{
	console.log('server en puerto 3000')
});
