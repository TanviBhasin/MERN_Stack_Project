const Marks = require('./marksModel');
const UploadAssignment = require('../uploadassignment/uploadassignmentModel');

add = (req, res) => {
    var validationerrors = [];

    if (!req.body.assignmentId)
        validationerrors.push("Assignment id is required");
    if (!req.body.obtainedMarks)
        validationerrors.push("Marks are required");
    if (!req.body.isChecked)
        validationerrors.push("Check/Uncheck status is required");

    if (validationerrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation error",
            errors: validationerrors
        });
    } else {
        // Update the UploadAssignment table
        UploadAssignment.findOneAndUpdate({ _id: req.body.assignmentId, obtainedMarks: null },
        { obtainedMarks: req.body.obtainedMarks }, // Update obtainedMarks with the new value
        { new: true })
            .then(uploadAssignment => {
                if (!uploadAssignment) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "Record not found in UploadAssignment table"
                    });
                } else {
                    // Insert data into the Marks table
                    let newMarks = new Marks()
                    newMarks.assignmentId = req.body.assignmentId
                    newMarks.obtainedMarks = req.body.obtainedMarks
                    newMarks.isChecked = req.body.isChecked

                    newMarks.save()
                        .then(marksSaveRes => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Marks added successfully",
                                data: marksSaveRes
                            });
                        })
                        .catch(err => {
                            res.json({
                                status: 500,
                                success: false,
                                message: "Internal server error while creating marks",
                                errors: err.message
                            });
                        });
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal Server Error",
                    errors: err.message
                });
            });
    }
}

getall = async (req,res)=>{

    var totalcount = await Marks.find(req.body).countDocuments().exec()

    Marks.find(req.body)
    .populate("assignmentId")
    .then(marksData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : marksData
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

    Marks.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(marksData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : marksData
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
        Marks.findOne({_id:req.body._id})
        .then(marksData=>{
            if(!marksData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.assignmentId)
                    marksData.assignmentId = req.body.assignmentId
                if(req.body.obtainedMarks)
                    marksData.obtainedMarks = req.body.obtainedMarks
                if(req.body.isChecked)
                    marksData.isChecked = req.body.isChecked
                marksData.save()
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
        Marks.findOne({_id:req.body._id})
        .then(marksData=>{
            if(!marksData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.isChecked)
                    marksData.isChecked = req.body.isChecked
                marksData.save()
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
    updatedata,
    softdelete
}