const mongoose = require("mongoose")

const branchSchema = new mongoose.Schema({
    branchName: { type: String, default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("branches",branchSchema)