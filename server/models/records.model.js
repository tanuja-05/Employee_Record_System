let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let recordsSchema = new Schema({
    eId:{
        type: String,
        required:true,
        unique:true
    },
    eName:{
        type:String,
        required:true
    },
    eDepartment:{
        type:String,
        required:true
    },
    eDesignation:{
        type:String,
        required:true
    },
    eSalary:{
        type:Number,
         required:true
    },
    eDoj :{
        type:Date,
        required:true
    }
})

let recordsModel = mongoose.model('employeeRecord',recordsSchema);
module.exports={recordsModel};