const Student = require('./studentModel')
const fs = require("fs")
const path = require("path")

getpagination = (req,res)=>{
    var lim = 2
    var skipcount = 0

    if(req.body.pageno > 1)
    {
        skipcount = (req.body.pageno-1)*lim
    }

    Student.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(studentData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : studentData
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
        Student.findOne({_id:req.body._id})
        .then(studentData=>{
            if(!studentData)
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
                    data : studentData
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
        Student.findOne({_id:req.body._id})
        .then(studentData=>{
            if(!studentData)
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
                    studentData.name = req.body.name
                if(req.body.departmentId)
                    studentData.departmentId = req.body.departmentId
                if(req.body.courseId)
                    studentData.courseId = req.body.courseId
                if(req.body.branchId)
                    studentData.branchId = req.body.branchId
                
                if (req.file) {
                        //oldpath
                        oldpath = "public/" + studentData.image

                        console.log(oldpath)

                        if (fs.existsSync(oldpath)) {
                            console.log(oldpath)
                            fs.unlink(oldpath, (err) => {
                                if (err) {
                                    console.log(err)
                                }
                                else {
                                    studentData.image = "users/" + req.file.filename
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
  

                if(req.body.rno)
                    studentData.rno = req.body.rno
                if(req.body.address)
                    studentData.address = req.body.address
                if(req.body.contact)
                    studentData.contact = req.body.contact
                if(req.body.email)
                    studentData.email = req.body.email
                if(req.body.password)
                    studentData.password = req.body.password
                if(req.body.semester)
                    studentData.semester = req.body.semester

            function saveAndRespond() { 
                studentData.save()
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
        Student.findOne({_id:req.body._id})
        .then(studentData=>{
            if(!studentData)
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
                    studentData.status = req.body.status
                studentData.save()
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