const Announcement = require('./announcementModel')

add = (req, res) => {

    var validationerrors = []

    if (!req.body.description)
        validationerrors.push("description is required")

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
        Announcement.findOne({ description: req.body.description })
            .then(content => {
                if (!content) {
                    //insert
                    let announcementObj = new Announcement()
                    announcementObj.description = req.body.description
                    announcementObj.save()
                        .then(announcementData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: announcementData
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

    var totalcount = await Announcement.find(req.body).countDocuments().exec()

    Announcement.find(req.body)
    .then(announcementData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : announcementData
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

    Announcement.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(announcementData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : announcementData
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
        Announcement.findOne({_id:req.body._id})
        .then(announcementData=>{
            if(!announcementData)
            {
                res.json({
                    status : 404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //Update
                if(req.body.description)
                    announcementData.description = req.body.description
                announcementData.save()
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

deletedata = (req,res)=>{
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
        Announcement.findOne({_id:req.body._id})
        .then(announcementData=>{
            if(!announcementData)
            {
                res.json({
                    status:404,
                    success:false,
                    message : "Record not found"
                })
            }
            else{
                //delete 
                Announcement.deleteOne({_id:req.body._id})
                .then(()=>{

                    res.json({
                        status : 200,
                        success:true,
                        message : "Record Deleted"
                    })
                })
                .catch(err=>{
                    res.json({
                        status : 500,
                        success:false,
                        message : "Unable to delete record",
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
    deletedata
}