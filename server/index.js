const express = require('express')
const cors = require('cors');

const app = express();
const port = process.env.PORT
const apiRouter = require('./routers/apiRouter')
require('./db/redis');

app.use(cors());
app.use(express.json())
app.use(apiRouter)
app.listen(port, () => {
    console.log('server runs, port:', port)
})
