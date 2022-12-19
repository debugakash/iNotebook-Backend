const connectTomongo = require('./db');
const express = require('express')
var cors = require('cors')

connectTomongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
// Available Routes
// app.get('/', (req, res) => {
//     res.send('Hello Akash!')
// })
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes.js'));

app.listen(port, () => {
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})