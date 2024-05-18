const mongoose = require("mongoose")

const marksSchema = new mongoose.Schema({
    assignmentId: { type: mongoose.Schema.Types.ObjectId, ref:'uploadassignments', default: null },
    obtainedMarks: { type: Number, default: null },
    isChecked: { type: Boolean, default: true },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("marks",marksSchema)