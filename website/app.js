const express = require('express');
const app = express();


app.use('/', express.static(__dirname + '/pages'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something borked ;-;');
    next();
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});