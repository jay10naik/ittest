const express = require("express");
const router = express.Router({ mergeParams: true });
const authService = require("../Services/auth");

/* User Registration. */
router.post("/register", authService.register);


/* User Login. */
router.post("/login'",, authService.login);


module.exports = router;