const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("./index.ejs");
});

// module.exportsを使うことで、一度にオブジェクトとしてexport可能。
module.exports = router;
