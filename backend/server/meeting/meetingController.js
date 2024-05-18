const Meeting = require('./meetingModel');

add = (req, res) => {

    var validationerrors = []

    if (!req.body.departmentId)
        validationerrors.push("department is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.branchId)
        validationerrors.push("branch is required")
    if (!req.body.classDate)
        validationerrors.push("date is required")
    if (!req.body.classTime)
        validationerrors.push("time is required")
    if (!req.body.meetingLink)
        validationerrors.push("meeting link is required")

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
        Meeting.findOne({ classDate: req.body.classDate })
            .then(content => {
                if (!content) {
                    //insert    
                    let meetingObj = new Meeting()
                    meetingObj.staffId = req.decoded.userId
                    meetingObj.departmentId = req.body.departmentId
                    meetingObj.courseId = req.body.courseId
                    meetingObj.branchId = req.body.branchId
                    meetingObj.classDate = req.body.classDate
                    meetingObj.classTime = req.body.classTime
                    meetingObj.meetingLink = req.body.meetingLink
                    meetingObj.save()
                        .then(meetingData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: meetingData
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
    var totalcount = await Meeting.find(req.body).countDocuments().exec()

    Meeting.find(req.body)
    .populate("staffId")
    .populate("departmentId")
    .populate("courseId")
    .populate("branchId")
    .then(meetingData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : meetingData
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
        Meeting.findOne({_id:req.body._id})
        .then(meetingData=>{
            if(!meetingData)
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
                    meetingData.staffId = req.body.staffId
                if(req.body.departmentId)
                    meetingData.departmentId = req.body.departmentId
                if(req.body.courseId)
                    meetingData.courseId = req.body.courseId
                if(req.body.branchId)
                    meetingData.branchId = req.body.branchId
                if(req.body.classDate)
                    meetingData.classDate = req.body.classDate
                if(req.body.classTime)
                    meetingData.classTime = req.body.classTime
                if(req.body.meetingLink)
                    meetingData.meetingLink = req.body.meetingLink
                meetingData.save()
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
        Meeting.findOne({_id:req.body._id})
        .then(meetingData=>{
            if(!meetingData)
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
                    meetingData.status = req.body.status
                meetingData.save()
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
    updatedata,
    softdelete
}