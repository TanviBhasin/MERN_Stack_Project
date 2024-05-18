const Branch = require('./branchModel')

add = (req, res) => {

    var validationerrors = []

    if (!req.body.branchName)
        validationerrors.push("branch name is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.departmentId)
        validationerrors.push("department is required")

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
        Branch.findOne({ branchName: req.body.branchName })
            .then(content => {
                if (!content) {
                    //insert
                    let branchObj = new Branch()
                    branchObj.branchName = req.body.branchName
                    branchObj.courseId = req.body.courseId
                    branchObj.departmentId = req.body.departmentId
                    branchObj.save()
                        .then(branchData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: branchData
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

    var totalcount = await Branch.find(req.body).countDocuments().exec()

    Branch.find(req.body)
    .populate("courseId")
    .populate("departmentId")
    .then(branchData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : branchData
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

    Branch.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(branchData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : branchData
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
        Branch.findOne({_id:req.body._id})
        .then(branchData=>{
            if(!branchData)
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
                    data : branchData
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
        Branch.findOne({_id:req.body._id})
        .then(branchData=>{
            if(!branchData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.branchName)
                    branchData.branchName = req.body.branchName
                if(req.body.courseId)
                    branchData.courseId = req.body.courseId
                if(req.body.departmentId)
                    branchData.departmentId = req.body.departmentId
                branchData.save()
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
        Branch.findOne({_id:req.body._id})
        .then(branchData=>{
            if(!branchData)
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
                    branchData.status = req.body.status
                branchData.save()
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