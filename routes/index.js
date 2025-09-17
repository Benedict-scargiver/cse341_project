const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("Welcome to the Home Page!");
});


router.use("/contact", require("./contact"));

module.exports = router;