require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database/index');

const app = express();

app.use(express.json());
app.use(cors({origin:true}));
app.use(routes);
app.listen(process.env.PORT, () => console.log("Servidor iniciado."));