const AssignSubject = require('./assignsubjectModel')

add = (req, res) => {

    var validationerrors = []

    if (!req.body.staffId)
        validationerrors.push("staff name is required")
    if (!req.body.subjectId)
        validationerrors.push("subject is required")
    if (!req.body.departmentId)
        validationerrors.push("department is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.branchId)
        validationerrors.push("branch is required")
    if (!req.body.semester)
        validationerrors.push("semester is required")

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
        AssignSubject.findOne({ subjectId: req.body.subjectId })
            .then(content => {
                if (!content) {
                    //insert
                    let assignsubjectObj = new AssignSubject()
                    assignsubjectObj.staffId = req.body.staffId
                    assignsubjectObj.subjectId = req.body.subjectId
                    assignsubjectObj.departmentId = req.body.departmentId
                    assignsubjectObj.courseId = req.body.courseId
                    assignsubjectObj.branchId = req.body.branchId
                    assignsubjectObj.semester = req.body.semester
                    assignsubjectObj.save()
                        .then(assignsubjectData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: assignsubjectData
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

    var totalcount = await AssignSubject.find(req.body).countDocuments().exec()

    AssignSubject.find(req.body)
    .populate("staffId")
    .populate("departmentId")
    .populate("courseId")
    .populate("branchId")
    .populate("subjectId")
    .then(assignsubjectData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : assignsubjectData
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

    AssignSubject.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(assignsubjectData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : assignsubjectData
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
        AssignSubject.findOne({_id:req.body._id})
        .then(assignsubjectData=>{
            if(!assignsubjectData)
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
                    data : assignsubjectData
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
        AssignSubject.findOne({_id:req.body._id})
        .then(assignsubjectData=>{
            if(!assignsubjectData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.staffId)
                    assignsubjectData.staffId = req.body.staffId
                if(req.body.subjectId)
                    assignsubjectData.subjectId = req.body.subjectId
                if(req.body.departmentId)
                    assignsubjectData.departmentId = req.body.departmentId
                if(req.body.courseId)
                    assignsubjectData.courseId = req.body.courseId
                if(req.body.branchId)
                    assignsubjectData.branchId = req.body.branchId
                if(req.body.semester)
                    assignsubjectData.semester = req.body.semester
                assignsubjectData.save()
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
        AssignSubject.findOne({_id:req.body._id})
        .then(assignsubjectData=>{
            if(!assignsubjectData)
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
                    assignsubjectData.status = req.body.status
                assignsubjectData.save()
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