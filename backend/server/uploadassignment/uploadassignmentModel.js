const mongoose = require("mongoose")

const assignmentSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref:'users', default: null },
    assignmentId: { type: mongoose.Schema.Types.ObjectId, ref:'assignments', default: null },
    answer: { type: String, default: null },
    obtainedMarks: { type: Number, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("uploadassignments",assignmentSchema)

