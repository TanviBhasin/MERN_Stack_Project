const mongoose = require("mongoose")

const staffSchema = new mongoose.Schema({
    name: { type: String, default: null },
    email: { type: String, default: null },
    password: { type: String, default: null },
    contact: { type: Number, default: null },
    qualification: { type: String, default: null },
    departmentId: { type: mongoose.Schema.Types.ObjectId, ref:'departments', default: null },
    image: { type: String, default: 'no-image.jpg' },
    userId: { type: mongoose.Schema.Types.ObjectId,ref:'users', default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("staffs",staffSchema)