const mongoose = require("mongoose")
const { title } = require("process")

const assignmentSchema = new mongoose.Schema({
    title: { type: String, default: null },
    description: { type: String, default: null },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref:'subjects', default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref:'branches', default: null },
    assignment: { type: String, default: null },
    marks: { type: Number, default: null },
    duedate: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("assignments",assignmentSchema)