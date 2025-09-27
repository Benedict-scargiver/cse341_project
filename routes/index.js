const router = require('express').Router();

router.get("/", (req, res) => {
    //swagger.tag=['Hello World']
    res.send("Welcome to the Home Page!");
});

router.use(require('./swagger'));
router.use("/contact", require("./contact"));

module.exports = router;