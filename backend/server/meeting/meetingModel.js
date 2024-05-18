const mongoose = require("mongoose")

const meetingSchema = new mongoose.Schema({
    staffId: { type: mongoose.Schema.Types.ObjectId, ref:'users', default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref:'branches', default: null },
    classDate: { type: Date, default: null },
    classTime: { type: String, default: null},
    meetingLink: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("meetings",meetingSchema)