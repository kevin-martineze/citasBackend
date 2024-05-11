const express = require("express");
const doctores = require("../controllers/doctores");
const reservas = require("../controllers/reservaCitas")

const router = express.Router();

router.get("/getDoctores", doctores.doctor);
router.get("/especialidad", reservas.especialidad)
router.get("/disponibilidad", reservas.disponibilidad)
router.post("/reservaCita", reservas.reservaCita)





module.exports = router;