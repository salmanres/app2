const mongoose = require("mongoose");
const key = encodeURIComponent(process.env.DBKEY);
const db = `mongodb+srv://zebsoft:${key}@zebsoft.iyoy4go.mongodb.net/vehicledata`;

mongoose.connect(db).then(()=>{
    console.log("database connection created");
})