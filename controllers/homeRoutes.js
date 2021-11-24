//store stuff 
// create route for the homepage but not entirely, need it to hit the body route

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("all");
});


module.exports = router;