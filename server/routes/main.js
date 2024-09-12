const express = require('express');
const router = express.Router();

// Routes
router.get("", (req, res) => {
    const locals = {
        title: "Let\'s do it!",
        description: "Welcome to Yeali\'s journey to becoming a full stack developer.",
    }

    res.render('index', locals);
});

router.get('/about', (req,res) => {
    res.render('about');
});

module.exports = router;