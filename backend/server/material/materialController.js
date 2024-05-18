const Material = require('./materialModel')
const fs = require("fs")
const path = require("path")

add = (req, res) => {

    var validationerrors = []

    if (!req.body.title)
        validationerrors.push("title is required")
    if (!req.body.description)
        validationerrors.push("description is required")
    if (!req.body.departmentId)
        validationerrors.push("department is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.branchId)
        validationerrors.push("branch is required")
    if (!req.body.subjectId)
        validationerrors.push("subject is required")
    if (!req.body.material)
        validationerrors.push("material is required")

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
        Material.findOne({ title: req.body.title })
            .then(content => {
                if (!content) {
                    //insert
                    let materialObj = new Material()
                    materialObj.title = req.body.title
                    materialObj.description = req.body.description
                    materialObj.departmentId = req.body.departmentId
                    materialObj.courseId = req.body.courseId
                    materialObj.branchId = req.body.branchId
                    materialObj.subjectId = req.body.subjectId
                    materialObj.material = "material/"+req.body.material
                    materialObj.save()
                        .then(materialData => {
                            res.json({
                                status: 200,
                                success: true,
                                message: "Record Inserted",
                                data: materialData
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

    var totalcount = await Material.find(req.body).countDocuments().exec()

    Material.find(req.body)
    .populate("departmentId")
    .populate("courseId")
    .populate("branchId")
    .populate("subjectId")
    .then(materialData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
            data : materialData
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
    var lim = 3
    var skipcount = 0

    if(req.body.pageno > 1)
    {
        skipcount = (req.body.pageno-1)*lim
    }

    Material.find()
    .limit(lim)
    .skip(skipcount)
    .sort({createdAt : +1})
    .then(materialData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            data : materialData
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
        Material.findOne({_id:req.body._id})
        .then(materialData=>{
            if(!materialData)
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
                    data : materialData
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
        Material.findOne({_id:req.body._id})
        .then(materialData=>{
            if(!materialData)
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
                    materialData.title = req.body.title
                if(req.body.description)
                    materialData.description = req.body.description
                if(req.body.departmentId)
                    materialData.departmentId = req.body.departmentId
                if(req.body.courseId)
                    materialData.courseId = req.body.courseId
                if(req.body.branchId)
                    materialData.branchId = req.body.branchId
                if(req.body.subjectId)
                    materialData.subjectId = req.body.subjectId
                
                if (req.file) {
                    //oldpath
                    oldpath = "public/" + materialData.material

                    console.log(oldpath)

                    if (fs.existsSync(oldpath)) {
                        console.log(oldpath)
                        fs.unlink(oldpath, (err) => {
                            if (err) {
                                console.log(err)
                            }
                            else {
                                materialData.material = "material/" + req.file.filename
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
                

            function saveAndRespond() { 
                materialData.save()
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
        Material.findOne({_id:req.body._id})
        .then(materialData=>{
            if(!materialData)
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
                    materialData.status = req.body.status
                materialData.save()
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