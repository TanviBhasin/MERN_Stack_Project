const Subject = require('./subjectModel')

add = (req, res) => {

    var validationerrors = []

    if (!req.body.subjectName)
        validationerrors.push("subject name is required")
    if (!req.body.departmentId)
        validationerrors.push("department is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.branchId)
        validationerrors.push("branch is required")
    if (!req.body.semester)
        validationerrors.push("semester is required")
    if (!req.body.subjectCode)
        validationerrors.push("subject code is required")

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
        Subject.findOne({ subjectName: req.body.subjectName })
            .then(content => {
                if (!content) {
                    //insert
                    let subjectObj = new Subject()
                    subjectObj.subjectName = req.body.subjectName
                    subjectObj.departmentId = req.body.departmentId
                    subjectObj.courseId = req.body.courseId
                    subjectObj.branchId = req.body.branchId
                    subjectObj.semester = req.body.semester
                    subjectObj.subjectCode = req.body.subjectCode
                    subjectObj.save()
                        .then(subjectData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: subjectData
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

    var totalcount = await Subject.find(req.body).countDocuments().exec()

    Subject.find(req.body)
    .populate("departmentId")
    .populate("courseId")
    .populate("branchId")
    .then(subjectData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : subjectData
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

    Subject.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(subjectData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : subjectData
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
        Subject.findOne({_id:req.body._id})
        .then(subjectData=>{
            if(!subjectData)
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
                    data : subjectData
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
        Subject.findOne({_id:req.body._id})
        .then(subjectData=>{
            if(!subjectData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.subjectName)
                    subjectData.subjectName = req.body.subjectName
                if(req.body.departmentId)
                    subjectData.departmentId = req.body.departmentId
                if(req.body.courseId)
                    subjectData.courseId = req.body.courseId
                if(req.body.branchId)
                    subjectData.branchId = req.body.branchId
                if(req.body.semester)
                    subjectData.semester = req.body.semester
                if(req.body.subjectCode)
                    subjectData.subjectCode = req.body.subjectCode
                subjectData.save()
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
        Subject.findOne({_id:req.body._id})
        .then(subjectData=>{
            if(!subjectData)
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
                    subjectData.status = req.body.status
                subjectData.save()
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