const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('connected', () => {
    console.log('mongo connected');
});
db.on('error', (err) => {
    console.log('mongo connection err : ',err);
});

app.use(express.json());
const userAuthRoute = require('./routes/userauth')
const postRoute = require('./routes/post')
const userRoute = require('./routes/user')

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use('/auth', userAuthRoute);
app.use('/post', postRoute);
app.use('/user', userRoute);



app.listen(PORT, ()=> {
    console.log('server is running on port ', PORT);
})

module.exports = app;