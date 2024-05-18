const mongoose = require("mongoose")

const materialSchema = new mongoose.Schema({
    title: { type: String, default: null },
    description: { type: String, default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref:'branches', default: null },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref:'subjects', default: null },
    material: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("materials",materialSchema)