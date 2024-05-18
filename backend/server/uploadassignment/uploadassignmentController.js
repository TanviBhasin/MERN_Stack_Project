const UploadAssignment = require('./uploadassignmentModel')

upload = (req, res) => {

    var validationerrors = []

    if (!req.body.answer)
        validationerrors.push("answer file is required")
    
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
        UploadAssignment.findOne({ assignmentId: req.body.assignmentId })
            .then(content => {
                if (!content) {
                    //insert
                    let assignmentObj = new UploadAssignment()
                    assignmentObj.studentId = req.decoded.userId
                    assignmentObj.assignmentId = req.body.assignmentId
                    assignmentObj.answer = "uploads/"+req.body.answer

                    assignmentObj.save()

                        .then(assignmentData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Assignment Uploaded Successfully",
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

    var totalcount = await UploadAssignment.find(req.body).countDocuments().exec()

    UploadAssignment.find(req.body)
    .populate("studentId")
    .populate("assignmentId")

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
        UploadAssignment.findOne({_id:req.body._id})
        .populate("studentId")
        .populate("assignmentId")
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


module.exports = {
    upload,
    getall,
    getsingle
}