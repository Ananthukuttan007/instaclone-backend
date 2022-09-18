const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("upload attempted")
        cb(null, './images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + "." + "png")
    }
})

const upload = multer({ storage: storage })


app.use(bodyParser.json());
app.use(cors());
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})

const users = [
    {
        "name": "Siva",
        "location": "Bengaluru",
        "likes": 64,
        "description": "Kick start your career",
        "PostImage": "images/shiva.jpeg",
        "date": "12/02/2022"
    },
    {
        "name": "Neeraj",
        "location": "Pune",
        "likes": 30,
        "description": "Sample Description",
        "PostImage": "images/neeraj.jpeg",
        "date": "15/05/2022"
    },
    {
        "name": "Rahul",
        "location": "Hyderabad",
        "likes": 30,
        "description": "Sample Description for Post",
        "PostImage": "images/rahul.jpeg",
        "date": "10/06/2022"
    }
]

app.get('/', (req, res) => {
    console.log("Browser requested");
    res.send(users);
})
app.post('/post', upload.single('PostImage'), async (req, res) => {
    let data = {
        "name": req.body.name,
        "location": req.body.location,
        "likes": 30,
        "description": req.body.description,
        "PostImage": req.file,
        "date": new Date().toLocaleDateString()
    }
    users.push(data);
    console.log(data)
    // console.log(users)
    res.send(data)
})
