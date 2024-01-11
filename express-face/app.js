const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/verify', (req, res) => {
    // 在这里调用 Flask 的 /verify 端点
    // ...
});


app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});