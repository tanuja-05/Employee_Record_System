let { recordsModel } = require('../models/records.model');

let recordsInsert =(req,res)=>{
     let {eId,eName,eDepartment,eDesignation,eSalary,eDoj} = req.body;
    let insertObj = new recordsModel({eId,eName,eDepartment,eDesignation,eSalary,eDoj});
    insertObj.save().then(()=>{
        res.send({
            status:1,
            msg:"Record inserted Successfully",
        })
    }).catch((err)=>{
        res.send({
            status:0,
            msg:"Data Not inserted",err
        })
    })
}

let recordsView = async(req,res)=>{
    let viewObj= await recordsModel.find();
    res.send({
        status:1,
        msg:"Data can be Viewed",
        viewObj
    })
}

let recordsDelete = async(req,res)=>{
     let recordsId = req.params.id
     let delRes = await recordsModel.deleteOne({_id:recordsId});
     res.send({
        status:1,
        msg:"Data Deleted Successfully",
        delRes
     })
}

let recordsUpdate = async(req,res)=>{
    let recordsId = req.params.id
    let { eId,eName,eDepartment,eDesignation,eSalary,eDoj} = req.body;
    let newObj = { eId,eName,eDepartment,eDesignation,eSalary,eDoj};
    let updateObj = await recordsModel.updateOne({_id:recordsId},newObj);
    res.send({
        status:1,
        msg:"Records Updated successfully",
        updateObj
    })

}

let getSingleEmp = async(req,res)=>{
    let recordsId=req.params.id;
    let viewObj= await recordsModel.findOne({_id:recordsId});
    res.send({
        status:1,
        msg:"Single Employee Data",
        viewObj
    })
}


module.exports={recordsInsert,recordsView,recordsDelete,recordsUpdate,getSingleEmp}