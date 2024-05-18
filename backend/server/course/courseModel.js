const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    courseName: { type: String, default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("courses",courseSchema)