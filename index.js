const express = require('express');
const app = express();
const port = process.env.PORT || 3333;

app.get('/',(req,res) => {
    res.send('Hello Tobias and Anne this is our first app in NodeJS !!! Hello World.');
});

app.listen(port, () => {
    console.log(`Our app is running on port: ${port}`);
});