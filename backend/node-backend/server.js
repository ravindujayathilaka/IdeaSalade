const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/data', (req, res) => {
    const dataFromColab = req.body;
    console.log('Data received from Colab:', dataFromColab);
  // Process the data as needed

    res.send('Data received successfully');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
