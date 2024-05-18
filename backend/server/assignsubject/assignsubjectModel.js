const mongoose = require("mongoose")

const assignsubjectSchema = new mongoose.Schema({
    staffId: { type: mongoose.Schema.Types.ObjectId, ref:'staffs', default: null },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref:'subjects', default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref:'branches', default: null },
    semester: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("assignedsubjects",assignsubjectSchema)