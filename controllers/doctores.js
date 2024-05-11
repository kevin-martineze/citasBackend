const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.doctor = async (req, res) => {

  try {
    const obtenerDoctores = await prisma.doctor.findMany({
        include: {
            especialidad: true,
            disponibilidad: true,
        },
    });
    res.json(obtenerDoctores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

// exports.
