const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3360;
const start = () => console.log('Servidor corriendo');

app.listen(port, start());

const files = path.join(__dirname, './files');
const statics = express.static(files);
app.use(statics); 

app.get('/', (req,res) => {
    let file = path.join(__dirname, './files/index.html')
    res.sendFile(file);
})






