const Assignment = require('./assignmentModel')
const fs = require("fs")
const path = require("path")
const { title } = require('process')

add = (req, res) => {

    var validationerrors = []

    if (!req.body.title)
        validationerrors.push("title is required")
    if (!req.body.description)
        validationerrors.push("description is required")
    if (!req.body.subjectId)
        validationerrors.push("subject is required")
    if (!req.body.departmentId)
        validationerrors.push("department is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.branchId)
        validationerrors.push("branch is required")
    if (!req.body.assignment)
        validationerrors.push("assignment is required")
    if (!req.body.marks)
        validationerrors.push("marks is required")
    if (!req.body.duedate)
        validationerrors.push("due date is required")

    if (validationerrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation error",
            errors: validationerrors
        })
    }
    else {
        //duplicate
        Assignment.findOne({title:req.body.title})
            .then(content => {
                if (!content) {
                    //insert
                    let assignmentObj = new Assignment()
                    assignmentObj.title = req.body.title
                    assignmentObj.description = req.body.description
                    assignmentObj.subjectId = req.body.subjectId
                    assignmentObj.departmentId = req.body.departmentId
                    assignmentObj.courseId = req.body.courseId
                    assignmentObj.branchId = req.body.branchId
                    assignmentObj.assignment = "assignments/"+req.body.assignment
                    assignmentObj.marks = req.body.marks
                    assignmentObj.duedate = req.body.duedate
                    assignmentObj.save()

                        .then(assignmentData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: assignmentData
                            })
                        })
                        .catch(err => {
                            res.json({
                                status: 500,
                                success: false,
                                message: "Internal Server Error",
                                errors: err.message
                            })
                        })
                }
                else {
                    res.json({
                        status: 422,
                        success: false,
                        message: "Record already exists",
                        data: content
                    })
                }

            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                    errors: err.message
                })
            })

    }


}

getall = async (req,res)=>{

    var totalcount = await Assignment.find(req.body).countDocuments().exec()

    Assignment.find(req.body)
    .populate("departmentId")
    .populate("courseId")
    .populate("branchId")
    .populate("subjectId")
    .then(assignmentData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : assignmentData
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

getpagination = (req,res)=>{
    var lim = 2
    var skipcount = 0

    if(req.body.pageno > 1)
    {
        skipcount = (req.body.pageno-1)*lim
    }

    Assignment.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(assignmentData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : assignmentData
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
        Assignment.findOne({_id:req.body._id})
        .populate("departmentId")
        .populate("courseId")
        .populate("branchId")
        .populate("subjectId")
        .then(assignmentData=>{
            if(!assignmentData)
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
                    data : assignmentData
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
        Assignment.findOne({_id:req.body._id})
        .then(assignmentData=>{
            if(!assignmentData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.title)
                    assignmentData.title = req.body.title
                if(req.body.description)
                    assignmentData.description = req.body.description
                if(req.body.subjectId)
                    assignmentData.subjectId = req.body.subjectId
                if(req.body.departmentId)
                    assignmentData.departmentId = req.body.departmentId
                if(req.body.courseId)
                    assignmentData.courseId = req.body.courseId
                if(req.body.branchId)
                    assignmentData.branchId = req.body.branchId
                
                if (req.file) {
                    //oldpath
                    oldpath = "public/" + assignmentData.assignment

                    console.log(oldpath)

                    if (fs.existsSync(oldpath)) {
                        console.log(oldpath)
                        fs.unlink(oldpath, (err) => {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                assignmentData.assignment = "assignments/" + req.file.filename
                                saveAndRespond();
                            }
                        })

                    }
                    else{
                        console.log("path not exists")
                    }

                }else {
                    saveAndRespond();
                }

                if(req.body.marks)
                    assignmentData.marks = req.body.marks
                if(req.body.duedate)
                    assignmentData.duedate = req.body.duedate

            function saveAndRespond() { 
                assignmentData.save()
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
        Assignment.findOne({_id:req.body._id})
        .then(assignmentData=>{
            if(!assignmentData)
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
                    assignmentData.status = req.body.status
                assignmentData.save()
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
    add,
    getall,
    getpagination,
    getsingle,
    updatedata,
    softdelete
}