const mongoose = require("mongoose")

const departmentSchema = new mongoose.Schema({
    departmentName: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("departments",departmentSchema)