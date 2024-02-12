const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000
const imageModel = require('./models/imageModel')
const app = express()
const multer = require('multer')
const Upload = multer({ dest: "/uploads"})

//storage
const storage = multer.diskStorage({
    destination : function (req, file, cb){
        return cb(null, "./uploads");
    },
    filename : function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
})

const upload = multer({ storage: storage});

// const mongoURI = "mongodb+srv://admin:admin@blog-website.utuektf.mongodb.net/?retryWrites=true&w=majority"
//middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}))
//the above middleware is used to parse form data

// mongoose.connect(mongoURI).then(() => {
//     console.log('connected to the database');
app.listen(PORT, () => {console.log(`The app is listening on port ${PORT}`)})

// }).catch((err) => {
//     console.log(err);
// })


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.post('/',Upload.single("image"),(req, res) => {
   console.log(req.body);
   console.log(req.file);

   return res.redirect("/");
})

// app.get('/get-image:id', async (req, res) => {
//   const imageId = req.params.id;
//   const Image = await imageModel.findById(imageId);
// //   res.writeHead(200, { 'Content-Type': 'image/jpeg' });
// //   res.end(Buffer.from(Image.image, 'base64'));
// res.send(Image);
// })


