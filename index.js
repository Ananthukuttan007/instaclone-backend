const app = require('./app');
const mongoose = require('mongoose');
const PORT = 8080;

mongoose.connect('mongodb+srv://Anantha:Anantha@cluster0.srehusp.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.once('open', () => {
    console.log('connection established')
}).on('connectionError', (err) => {
    console.log(err);
})


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})

