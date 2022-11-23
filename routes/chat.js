const express = require("express");
const controller = require("../controller/Cchat");
const router = express.Router();

// 기본경로: lcoalhost:PORT/chat

// GET lcoalhost:PORT/chat
//GET /chat
router.get("/", controller.chat);
// POST /chat/search
router.post("/search", controller.search);

module.exports = router;
