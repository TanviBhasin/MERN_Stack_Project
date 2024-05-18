const mongoose = require("mongoose")

const announcementSchema = new mongoose.Schema({
    description: { type: String, default: null },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now() },
})

module.exports = new mongoose.model("announcements",announcementSchema)