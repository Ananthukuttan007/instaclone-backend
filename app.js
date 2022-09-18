const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const multer = require('multer');
const Post = require('./Models/Post');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: './images',
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.use(bodyParser.json());
app.use(cors());


app.get('/', async (req, res) => {
    console.log("Browser requested");
    try {
        const results = await Post.find();
        res.json(results);
    } catch (e) {
        res.status(400).json({ error: e })
    }
})
app.post('/post', upload.single('PostImage'), async (req, res) => {
    try {
        let data = new Post({
            "name": await req.body.name,
            "location": await req.body.location,
            "likes": 30,
            "description": await req.body.description,
            "PostImage": {
                data: fs.readFileSync('images/' + req.file.filename),
                contentType: 'image/png'
            },
            "date": new Date().toLocaleDateString()
        })
        await data.save();
        res.status(201).json(data);
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})



module.exports = app;