const express = require('express');
const app = express();
// const PORT = env.process.PORT || 3000;
const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        message: 'Hello, world!'
    });
});

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`);
});

module.exports = app;
