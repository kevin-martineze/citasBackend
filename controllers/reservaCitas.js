const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Al seleccionar [especialidad] mostrar (doctor)
exports.especialidad = async (req, res) => {
  try {
    const especialidad = await prisma.especialidad.findMany({
      include: {
        doctorRelation: {
          //   include: {
          //     disponibilidad: true,
          //   },
        },
      },
    });

    res.json(especialidad);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

// Al seleccionar [doctor] mostrar (disponibilidad)
exports.disponibilidad = async (req, res) => {
  const { doctorId } = req.params;

  try {
    const disponibilidad = await prisma.especialidad.findMany({
      where: {
        doctorId: parseInt(doctorId),
      },
      include: {
        doctorRelation: {
          include: {
            disponibilidad: true,
          },
        },
      },
    });

    res.json(disponibilidad);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

exports.reservaCita = async (req, res) => {
  const { doctorId, pacienteId, especialidadId } = req.body;
  try {
    const reserva = await prisma.reservaCitas.create({
      data: {
        doctorId,
        pacienteId,
        especialidadId,
      },
    });

    res.json(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};
