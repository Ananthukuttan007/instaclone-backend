const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;


// mongoose.connect('mongodb+srv://Anantha:Anantha@cluster0.nuxbelc.mongodb.net/?retryWrites=true&w=majority');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

// mongoose.connection.once('open', () => {
//     console.log('connection established')
// }).on('connectionError', (err) => {
//     console.log(err);
// })


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})

