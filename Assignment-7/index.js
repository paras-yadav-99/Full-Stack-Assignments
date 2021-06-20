const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./Routes/User-routes');
const adminRoutes = require('./Routes/Admin-route');
const HttpError = require('./http-error');


app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blog",{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

.then(() => {
    console.info("mongoDB is connected successfully");
})
.catch((error) => {
    console.error("mongoDB connection failed.");
});

app.use('/user',userRoutes);

app.use('/admin',adminRoutes);

const port = 8001;
const localhost = '127.0.0.1'
app.listen(port,() => {
    console.log(`this server is running on port ${port}`);
})