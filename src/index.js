const dotenv     = require('dotenv');
const express    = require('express');
const fileServer = require('./helpers/fileServer');
const path       = require('path');

const app = express();

dotenv.load({ path: '.env.local' })

// app.get('/', (req,res) => res.send('this is violet'));

app.use(fileServer(path.join(__dirname, './client'), 'index.html'));


app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));