const Staff = require('./staffModel')
const fs = require("fs")
const path = require("path")

getpagination = (req,res)=>{
    var lim = 2
    var skipcount = 0

    if(req.body.pageno > 1)
    {
        skipcount = (req.body.pageno-1)*lim
    }

    Staff.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(staffData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : staffData
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            message : "Internal Server Error",
            errors :err.message
        })
    })
}

getsingle = (req,res)=>{
    validationerrors = []

    if(!req.body._id)
        validationerrors.push("_id is required")

    if(validationerrors.length>0){
        res.json({
            status : 422,
            success:false,
            message :"Validation error",
            errors : validationerrors
        })
    }else{
        //existance of record
        Staff.findOne({_id:req.body._id})
        .then(staffData=>{
            if(!staffData)
            {
                res.json({
                    status:404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                res.json({
                    status : 200,
                    success:true,
                    message : "Data loaded",
                    data : staffData
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                message : "Internal Server Error",
                errors : err.message
            })
        })
    }
}

updatedata = (req,res)=>{

    validationerrors = []

    if(!req.body._id)
        validationerrors.push("_id is required")

    if(validationerrors.length>0)
    {
        res.json({
            status : 422,
            success:false,
            message : "Validation error",
            errors : validationerrors
        })
    }
    else{
        //existance of record w.r.t ID
        Staff.findOne({_id:req.body._id})
        .then(staffData=>{
            if(!staffData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.name)
                    staffData.name = req.body.name 
                if(req.body.email)
                    staffData.email = req.body.email
                if(req.body.password)
                    staffData.password = req.body.password
                if(req.body.contact)
                    staffData.contact = req.body.contact
                if(req.body.qualification)
                    staffData.qualification = req.body.qualification
                if(req.body.departmentId)
                    staffData.departmentId = req.body.departmentId

                if (req.file) {
                        //oldpath
                        oldpath = "public/" + staffData.image
                        console.log(oldpath)

                        if (fs.existsSync(oldpath)) {
                            console.log(oldpath)
                            fs.unlink(oldpath, (err) => {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    staffData.image = "users/" + req.file.filename
                                    saveAndRespond();
                                }
                            })

                        }
                        else{
                            console.log("path not exists")
                        }
                    }else {
                            // no new image uploaded save without affecting
                            saveAndRespond();
                        }

                        
            function saveAndRespond() {        
                staffData.save()
                .then(saveRes=>{
                    res.json({
                        status : 200,
                        success:true,
                        message : "Record Updated",
                        data : saveRes
                    })
                })
                .catch(err=>{
                    res.json({
                        status:500,
                        success:false,
                        message : "Internal Server error",
                        errors : err.message
                    })
                })
            }
        }

        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                message : "Internal Server Error",
                errors : err.message
            })
        })
    }
}


softdelete = (req,res)=>{

    validationerrors = []

    if(!req.body._id)
        validationerrors.push("_id is required")

    if(validationerrors.length>0)
    {
        res.json({
            status : 422,
            success:false,
            message : "Validation error",
            errors : validationerrors
        })
    }
    else{
        //existance of record w.r.t ID
        Staff.findOne({_id:req.body._id})
        .then(staffData=>{
            if(!staffData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.status)
                    staffData.status = req.body.status
                staffData.save()
                .then(saveRes=>{
                    res.json({
                        status : 200,
                        success:true,
                        message : "Record Updated",
                        data : saveRes
                    })
                })
                .catch(err=>{
                    res.json({
                        status:500,
                        success:false,
                        message : "Internal Server error",
                        errors : err.message
                    })
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                message : "Internal Server Error",
                errors : err.message
            })
        })
    }
}



module.exports = {
    getpagination,
    getsingle,
    updatedata,
    softdelete
}