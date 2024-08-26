"Access-Control-Allow-Origin"
const express = require("express");
const appRoute = express.Router();
const vehicleData = require("../schema/vehicledetails");
const record = require("../schema/vehicledetails");
const bodyParser = require("body-parser");
appRoute.use(bodyParser.urlencoded({ extended: true }));
const newUserData = require("../schema/newUserSchema");

appRoute.get("/", (req, res) => {
    res.send("welcome to vehicle details app");
})

appRoute.get("/userdata", async (req, res) => {
    let usersData = await newUserData.find({ blacklisted: false });
    res.send(usersData);
})

appRoute.get("/userdata/:id", async (req, res) => {
    let userId = req.params.id;
    let userData = await newUserData.findById(userId);
    res.send(userData);
})

appRoute.get("/blacklisted", async (req, res) => {
    let userData = await newUserData.find({ blacklisted: true });
    res.send(userData);
})

appRoute.put("/blacklist/:id", async (req, res) => {
    let userId = req.params.id;
    let blacklistedUser = await newUserData.findByIdAndUpdate(userId, { blacklisted: true });
    console.log(blacklistedUser);
    res.send(blacklistedUser);
})


appRoute.put("/unblock/:id", async (req, res) => {
    let userId = req.params.id;
    let unblockedUser = await newUserData.findByIdAndUpdate(userId, { blacklisted: false });
    console.log(unblockedUser);
    res.send(unblockedUser);
})

appRoute.get("/search", async (req, res) => {
    const { query } = req.query;

    if (!query || query.length < 3) {
        return res.status(400).json({ message: "Query must be at least 2 characters long" });
    }

    const results = await record.find({ registration: { $regex: query, $options: "i" } });
    res.status(200).json(results);
});

appRoute.get("/vehdetails/:id", async (req, res) => {
    const { id } = req.params;
    const result = await record.findById(id);
    res.send(result);
});

appRoute.post("/login", async (req, res) => {
    let { email, password } = req.body;
    const user = await newUserData.findOne({ email });
    if (!user || user.blacklisted) {
        res.status(400).json({ message: "invalid username or password" });
    } else {
        res.status(200).json(user);
    }

})

appRoute.post("/register", async (req, res) => {
    let { fullname, email, password, blacklisted } = req.body;

    const existingUser = await newUserData.findOne({ email });

    if (existingUser) {
        return res.status(400).json({ message: "user already registered" });
    } else {
        let newUser = new newUserData({ fullname, email, password, blacklisted });
        await newUser.save();
        res.status(200).json(newUser);
        console.log(newUser);
    }
})

appRoute.post("/search", async (req, res) => {
    let regNumber = req.body.regNumber;
    let result = await record.findOne({ registration: { $regex: regNumber, $options: "i" } });
    if (result) {
        console.log('Registration Number:', regNumber);
        console.log(`the result is ${result}`);
        res.json(`<h3>VEHICLE DETAILS : </h3><br>
            REGISTRATION NO : ${result.registration}<br/><br/>
            VEHICLE TYPE : ${result.vehicle}<br/><br/> 
            ENGINE NO : ${result.engine}<br/><br/> 
            CHASSIS NO : ${result.chassis} `);
    } else {
        res.send("data not found");
    }
})

module.exports = appRoute;