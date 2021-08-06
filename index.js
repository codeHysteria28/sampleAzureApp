const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.get('/',(req,res) => {
    res.send('Hello Tobias and Anne');
});

app.listen(port, () => {
    console.log(`Our app is running on port: ${port}`);
});