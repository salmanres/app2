const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    engine: {
        type: String
    },
    chassis: {
        type: String
    },
    vehicle: {
        type: String
    },
    registration: {
        type: String
    }
})

const record = mongoose.model("record", vehicleSchema);
module.exports = record;