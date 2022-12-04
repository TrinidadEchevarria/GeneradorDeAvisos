const express = require('express');

const path = require('path');

const app = express();

const port = process.env.PORT || 3360;

const start = () => console.log('Servidor corriendo');

app.listen(port, start());

const public = path.join(__dirname, './');

const statics = express.static(public);

app.use(statics); 

app.get('/', (req,res) => {
    let file = path.join(__dirname, 'index.html')
    res.sendFile(file);
})






