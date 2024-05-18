const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: { type: String, default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref:'courses', default: null },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref:'branches', default: null },
    image: { type: String, default: 'no-image.jpg' },
    rno: { type: Number, default: null },
    address: { type: String, default: null },
    contact: { type: Number, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    semester: { type: Number, default: null },
    userId: { type: mongoose.Schema.Types.ObjectId,ref:'users', default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("students",studentSchema)