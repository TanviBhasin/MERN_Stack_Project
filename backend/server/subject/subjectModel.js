const mongoose = require("mongoose")

const subjectSchema = new mongoose.Schema({
    subjectName: { type: String, default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref:'branches', default: null },
    semester: { type: Number, default: null },
    subjectCode: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("subjects",subjectSchema)