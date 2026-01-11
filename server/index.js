let express =require('express');
let mongoose = require('mongoose');
let cors=require('cors');
const { recordsRouter } = require('./routes/recordsRouter');

let app = express();
app.use(express.json());
require('dotenv').config();
app.use(cors());

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to Database");
    app.listen(process.env.PORT || 4001,()=>{
        console.log("Server is running");    
    })
    
}).catch((err)=>{
    console.log("Error Connecting to Database",err);
    
});

app.use('/api/employee/records',recordsRouter)
//http:localhost:4000/api/employee/records