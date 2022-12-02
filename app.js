const express = require('express');
const path = require('path');
const app = express();

app.listen(3360, () => {
    console.log('Servidor corriendo');
})

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
})

