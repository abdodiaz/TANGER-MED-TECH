const express = require('express');
const app = express();
const connectDB = require('./config/db')
const PORT =process.env.PORT
const bodyParser = require('body-Parser');
const cors = require('cors');

app.use(cors());


app.use(bodyParser.json());
//connect db
connectDB();
// middleware
app.use(express.static('public'));
app.use(express.json())




// routes
app.get("/",(req,res)=>{
    res.send("welcom to ")
})
app.use('/user',require("./routes/authRoutes"));
app.use('/systeme',require("./routes/systemeRoutes"))

// port run
app.listen (PORT,async () => {
    console.log(`Server is Running in Port: ${PORT} http://localhost:${PORT}`);
})
