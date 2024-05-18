const Department = require("../department/departmentModel")
const Course = require("../course/courseModel")
const Branch = require("../branch/branchModel")
const Subject = require("../subject/subjectModel")
const Staff = require("../staff/staffModel")
const Student = require("../student/studentModel")
const Feedback = require("../feedback/feedbackModel")

dashboard = async (req, res) => {

    totaldepartment = 0
    totalcourse = 0
    totalbranch = 0
    totalsubject = 0
    totalstaff = 0
    totalstudent = 0
    totalfeedback = 0

    totaldepartment = await Department.find({ status: true }).countDocuments().exec()
    totalcourse = await Course.find({ status: true }).countDocuments().exec()
    totalbranch = await Branch.find({ status: true }).countDocuments().exec()
    totalsubject = await Subject.find({ status: true }).countDocuments().exec()
    totalstaff = await Staff.find({ status: true }).countDocuments().exec()
    totalstudent = await Student.find({ status: true }).countDocuments().exec()
    totalfeedback = await Feedback.find({ status: true }).countDocuments().exec()


    Branch.find({ status: true })
    .limit(5)
    .then(branchData=>{

        res.json({
            status: 200,
            sucess: true,
            message: "Dashboard Loaded",
            totaldepartment : totaldepartment,
            totalcourse : totalcourse,
            totalbranch :totalbranch,
            totalsubject : totalsubject,
            totalstaff : totalstaff,
            totalstudent :totalstudent,
            totalfeedback : totalfeedback,
            branch : branchData
        })
    })
    

}


module.exports = {
    dashboard
}