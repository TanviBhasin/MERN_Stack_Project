const User = require("./userModel")
const Staff = require("../staff/staffModel")
const Student = require("../student/studentModel")
const bcrypt = require("bcryptjs")
const roundvalue = 10
const jwt = require("jsonwebtoken")
const privatekey = "MyProject@123"

register = (req,res)=>{
    validationerrors = []

    if(!req.body.name)
        validationerrors.push("name is required")
    if(!req.body.email)
        validationerrors.push("email is required")
    if(!req.body.password)
        validationerrors.push("password is required")
    if(!req.body.contact)
        validationerrors.push("contact is required")
    if(!req.body.qualification)
        validationerrors.push("qualification is required")
    if(!req.body.departmentId)
        validationerrors.push("department is required")
    if(!req.body.image)
        validationerrors.push("image is required")
    

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
        //Duplicacy
        User.findOne({email:req.body.email})
        .then(userData=>{
            if(!userData)
            {
                //insert
                let userObj = new User()
                userObj.name = req.body.name
                userObj.email = req.body.email
                userObj.password = bcrypt.hashSync(req.body.password, roundvalue)
                userObj.userType = 2
                userObj.save()
                .then(userSaveRes=>{
                    //insert into staff Model
                    let staffObj = new Staff()
                    staffObj.name = req.body.name
                    staffObj.email = req.body.email
                    staffObj.password = req.body.password
                    staffObj.contact = req.body.contact
                    staffObj.qualification = req.body.qualification
                    staffObj.departmentId = req.body.departmentId
                    staffObj.image = "users/"+req.body.image
                    staffObj.userId = userSaveRes._id
                    staffObj.save()
                    .then(staffSaveRes=>{
                        res.json({
                            status : 200,
                            success:true,
                            message : "Staff registered successfully",
                            data : staffSaveRes
                        })
                    })
                    .catch(err=>{
                        res.json({
                            status : 500,
                            success:false,
                            message : "Internal server error while creating staff",
                            errors : err.message
                        })
                    })
                })
                .catch(err=>{
                    res.json({
                        status : 500,
                        success:false,
                        message : "Internal server error while creating user",
                        errors : err.message
                    })
                })

            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message : "Email already registered"
                })
            }
        })
        .catch(err=>{
            res.json({
                status : 500,
                success:false,
                message : "Internal server error",
                errors : err.message
            })
        })
    }
}

getallstaff = async (req,res)=>{
    var totalcount = await Staff.find(req.body).countDocuments().exec()

    Staff.find(req.body)
    .populate("userId")
    .populate("departmentId")
    .then(staffData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data Loaded",
            total : totalcount,
            data : staffData
        })
    })
    .catch(err=>{
        res.json({
            status :500,
            success:false,
            message : "Internal Server Errors",
            errors : err.message
        })
    })
}

login = (req, res) => {
    validationerrors = []

        if (!req.body.email)
            validationerrors.push("Email is required")
        if (!req.body.password)
            validationerrors.push("Password is required")

        if (validationerrors.length > 0) {
            res.json({
                status: 422,
                success: false,
                message: "Validation Errors",
                errors: validationerrors
            })
        }
        else {
            //Email existance
            User.findOne({ email: req.body.email })
                .then(userData => {
                    //data empty
                    if (!userData) {
                        res.json({
                            status: 404,
                            success: false,
                            message: "Email doesn`t  exists"
                        })
                    }
                    else {
                        //password compare
                        bcrypt.compare(req.body.password, userData.password, function (err, result) {
                            // console.log(err)
                            // console.log(result)
                            if(result)
                            {
                                var payload = {
                                    name : userData.name,
                                    email : userData.email,
                                    userId : userData._id,
                                    userType : userData.userType
                                }

                                var token = jwt.sign(payload,privatekey)
                                console.log(token)
                                res.json({
                                    status:200,
                                    success:true,
                                    message : "Login Successfully",
                                    token : token,
                                    data : userData
                                })
                            }
                            else{
                                res.json({
                                    status : 422,
                                    success:false,
                                    message  : "Invalid password"
                                })
                            }
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

changepassword = (req, res) => {
    // console.log(req.params)
    validationerrors = []

    if (!req.body.oldpassword)
        validationerrors.push("Old password is required")
    if (!req.body.newpassword)
        validationerrors.push("New password is required")
    if (!req.body.confirmpassword)
        validationerrors.push("Confirm password is required")

    if (validationerrors.length > 0) {
        res.json({
            status: 422,
            success: false,
            message: "Validation errors",
            errors: validationerrors
        })
    }
    else {
        tokendata = req.decoded
        console.log(tokendata)
        //User Existsance
        User.findOne({ _id: tokendata.userId })
            .then(userdata => {
                if (!userdata) {
                    res.json({
                        status: 404,
                        success: false,
                        message: "User not found"
                    })
                }
                else {
                    //compare new password and confirm password
                    if (req.body.newpassword == req.body.confirmpassword) {
                        //compare old password with db password
                        bcrypt.compare(req.body.oldpassword, userdata.password, function (err, result) {
                            if (result) {
                                //update password

                                userdata.password = bcrypt.hashSync(req.body.newpassword, roundvalue)
                                userdata.save()
                                    .then(saveRes => {
                                        res.json({
                                            status: 200,
                                            success: true,
                                            message: "Your password has been changed"
                                        })
                                    })
                            }
                            else {
                                res.json({
                                    status: 422,
                                    success: false,
                                    message: "old password not matched"
                                })
                            }
                        })
                    }
                    else {
                        res.json({
                            status: 422,
                            success: false,
                            message: "New password and confirm password doesn`t matched"
                        })
                    }
                }
            })
            .catch(err => {
                res.json({
                    status: 500,
                    success: false,
                    message: "Internal sever error",
                    errors: err.message
                })
            })
    }
}


registerstudent = (req,res)=>{
    validationerrors = []

    if (!req.body.name)
        validationerrors.push("name is required")
    if (!req.body.departmentId)
        validationerrors.push("department is required")
    if (!req.body.courseId)
        validationerrors.push("course is required")
    if (!req.body.branchId)
        validationerrors.push("branch is required")
    if (!req.body.image)
        validationerrors.push("image is required")
    if (!req.body.rno)
        validationerrors.push("rollno is required")
    if (!req.body.address)
        validationerrors.push("address is required")
    if (!req.body.contact)
        validationerrors.push("contact is required")
    if (!req.body.email)
        validationerrors.push("email is required")
    if (!req.body.password)
        validationerrors.push("password is required")
    if (!req.body.semester)
        validationerrors.push("semester is required")
    

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
        //Duplicacy
        User.findOne({email:req.body.email})
        .then(userData=>{
            if(!userData)
            {
                //insert
                let userObj = new User()
                userObj.name = req.body.name
                userObj.email = req.body.email
                userObj.password = bcrypt.hashSync(req.body.password, roundvalue)
                userObj.userType = 3
                userObj.save()
                .then(userSaveRes=>{
                    //insert into staff Model
                    let studentObj = new Student()
                    studentObj.name = req.body.name
                    studentObj.departmentId = req.body.departmentId
                    studentObj.courseId = req.body.courseId
                    studentObj.branchId = req.body.branchId
                    studentObj.image = "users/"+req.body.image
                    studentObj.rno = req.body.rno
                    studentObj.address = req.body.address                 
                    studentObj.contact = req.body.contact
                    studentObj.email = req.body.email
                    studentObj.password = req.body.password
                    studentObj.semester = req.body.semester
                    studentObj.userId = userSaveRes._id
                    studentObj.save()
                    .then(studentSaveRes=>{
                        res.json({
                            status : 200,
                            success:true,
                            message : "Student registered successfully",
                            data : studentSaveRes
                        })
                    })
                    .catch(err=>{
                        res.json({
                            status : 500,
                            success:false,
                            message : "Internal server error while creating student",
                            errors : err.message
                        })
                    })
                })
                .catch(err=>{
                    res.json({
                        status : 500,
                        success:false,
                        message : "Internal server error while creating user",
                        errors : err.message
                    })
                })

            }
            else{
                res.json({
                    status:422,
                    success:false,
                    message : "Email already registered"
                })
            }
        })
        .catch(err=>{
            res.json({
                status : 500,
                success:false,
                message : "Internal server error",
                errors : err.message
            })
        })
    }
}

getallstudent = async (req,res)=>{
    var totalcount = await Student.find(req.body).countDocuments().exec()

    Student.find(req.body)
    .populate("departmentId")
    .populate("courseId")
    .populate("branchId")
    .then(studentData=>{
        res.json({
            status : 200,
            success:true,
            message : "Data loaded",
            total : totalcount,
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

module.exports = {
    register,
    getallstaff,
    registerstudent,
    getallstudent,
    login,
    changepassword
}