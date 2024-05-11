const express = require("express");
const doctores = require("../controllers/doctores");


const router = express.Router();

router.get("/getDoctores", doctores.doctor);





module.exports = router;