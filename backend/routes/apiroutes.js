const routes = require("express").Router()
const departmentController = require("../server/department/departmentController")
const courseController = require("../server/course/courseController")
const branchController = require("../server/branch/branchController")
const subjectController = require("../server/subject/subjectController")
const staffController = require("../server/staff/staffController")
const studentController = require("../server/student/studentController")
const materialController = require("../server/material/materialController")
const assignmentController = require("../server/assignment/assignmentController")
const assignsubjectController = require("../server/assignsubject/assignsubjectController")
const marksController = require("../server/marks/marksController")
const feedbackController = require("../server/feedback/feedbackController")
const announcementController = require("../server/announcement/announcementController")
const userController = require("../server/user/userController")
const dashboardController = require("../server/dashboard/dashboardController")
const uploadassignmentController = require("../server/uploadassignment/uploadassignmentController")
const meetingController = require("../server/meeting/meetingController")
const multer = require("multer")



const userstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/users')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // console.log(file)
    var newname =  file.fieldname + '-' + uniqueSuffix + file.originalname
    req.body['image'] = newname
      cb(null, newname)
    }
  })
  
const userupload = multer({ storage: userstorage })


const materialstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/material')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  // console.log(file)
  var newname =  file.fieldname + '-' + uniqueSuffix + file.originalname
  req.body['material'] = newname
    cb(null, newname)
  }
})

const materialupload = multer({ storage: materialstorage })


const assignmentstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/assignments')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  // console.log(file)
  var newname =  file.fieldname + '-' + uniqueSuffix + file.originalname
  req.body['assignment'] = newname
    cb(null, newname)
  }
})

const assignmentupload = multer({ storage: assignmentstorage })



const answerstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
  // console.log(file)
  var newname =  file.fieldname + '-' + uniqueSuffix + file.originalname
  req.body['answer'] = newname
    cb(null, newname)
  }
})

const answerupload = multer({ storage: answerstorage })



routes.post("/user/register",userupload.single("image"),userController.register)
routes.post("/user/login",userController.login)
routes.post("/user/registerstudent",userupload.single("image"),userController.registerstudent)



routes.use(require("../config/middleware"))



routes.post("/dashboard",dashboardController.dashboard)


routes.post("/user/changepassword",userController.changepassword)
routes.post("/user/getallstaff",userController.getallstaff)
routes.post("/user/getallstudent",userController.getallstudent)


routes.post("/department/add",departmentController.add)
routes.post("/department/getall",departmentController.getall)
routes.post("/department/getpagination",departmentController.getpagination)
routes.post("/department/getsingle",departmentController.getsingle)
routes.post("/department/updatedata",departmentController.updatedata)
routes.post("/department/softdelete",departmentController.softdelete)

routes.post("/course/add",courseController.add)
routes.post("/course/getall",courseController.getall)
routes.post("/course/getpagination",courseController.getpagination)
routes.post("/course/getsingle",courseController.getsingle)
routes.post("/course/updatedata",courseController.updatedata)
routes.post("/course/softdelete",courseController.softdelete)


routes.post("/branch/add",branchController.add)
routes.post("/branch/getall",branchController.getall)
routes.post("/branch/getpagination",branchController.getpagination)
routes.post("/branch/getsingle",branchController.getsingle)
routes.post("/branch/updatedata",branchController.updatedata)
routes.post("/branch/softdelete",branchController.softdelete)


routes.post("/subject/add",subjectController.add)
routes.post("/subject/getall",subjectController.getall)
routes.post("/subject/getpagination",subjectController.getpagination)
routes.post("/subject/getsingle",subjectController.getsingle)
routes.post("/subject/updatedata",subjectController.updatedata)
routes.post("/subject/softdelete",subjectController.softdelete)


routes.post("/staff/getpagination",staffController.getpagination)
routes.post("/staff/getsingle",staffController.getsingle)
routes.post("/staff/updatedata",userupload.single("image"),staffController.updatedata)
routes.post("/staff/softdelete",staffController.softdelete)


routes.post("/student/getpagination",studentController.getpagination)
routes.post("/student/getsingle",studentController.getsingle)
routes.post("/student/updatedata",userupload.single("image"),studentController.updatedata)
routes.post("/student/softdelete",studentController.softdelete)


routes.post("/material/add",materialupload.single("material"),materialController.add)
routes.post("/material/getall",materialController.getall)
routes.post("/material/getpagination",materialController.getpagination)
routes.post("/material/getsingle",materialController.getsingle)
routes.post("/material/updatedata",materialupload.single("material"),materialController.updatedata)
routes.post("/material/softdelete",materialController.softdelete)


routes.post("/assignment/add",assignmentupload.single("assignment"),assignmentController.add)
routes.post("/assignment/getall",assignmentController.getall)
routes.post("/assignment/getpagination",assignmentController.getpagination)
routes.post("/assignment/getsingle",assignmentController.getsingle)
routes.post("/assignment/updatedata",assignmentupload.single("assignment"),assignmentController.updatedata)
routes.post("/assignment/softdelete",assignmentController.softdelete)


routes.post("/assignment/upload",answerupload.single("answer"),uploadassignmentController.upload)
routes.post("/assignment/getallupload",uploadassignmentController.getall)
routes.post("/assignment/getsingleupload",uploadassignmentController.getsingle)


routes.post("/assignsub/add",assignsubjectController.add)
routes.post("/assignsub/getall",assignsubjectController.getall)
routes.post("/assignsub/getpagination",assignsubjectController.getpagination)
routes.post("/assignsub/getsingle",assignsubjectController.getsingle)
routes.post("/assignsub/updatedata",assignsubjectController.updatedata)
routes.post("/assignsub/softdelete",assignsubjectController.softdelete)


routes.post("/marks/add",answerupload.single("answer"),marksController.add)
routes.post("/marks/getall",marksController.getall)
routes.post("/marks/getpagination",marksController.getpagination)
routes.post("/marks/updatedata",marksController.updatedata)
routes.post("/marks/softdelete",marksController.softdelete)


routes.post("/meeting/add",meetingController.add)
routes.post("/meeting/getall",meetingController.getall)
routes.post("/meeting/updatedata",meetingController.updatedata)
routes.post("/meeting/softdelete",meetingController.softdelete)


routes.post("/announcement/add",announcementController.add)
routes.post("/announcement/getall",announcementController.getall)
routes.post("/announcement/getpagination",announcementController.getpagination)
routes.post("/announcement/updatedata",announcementController.updatedata)
routes.post("/announcement/delete",announcementController.deletedata)


routes.post("/feedback/add",feedbackController.add)
routes.post("/feedback/getall",feedbackController.getall)


module.exports = routes