const dotenv  = require('dotenv');
const express = require('express');

const app = express();

dotenv.load({ path: '.env.local' })

app.get('/', (req,res) => res.send('this is violet'));


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));