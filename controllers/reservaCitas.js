const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.especialidades = async (req, res) => {
  try {
    const especialidades = await prisma.especialidad.findMany();
    res.json(especialidades);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

// Al seleccionar [especialidad] mostrar (doctor)
exports.especialidadDoctores = async (req, res) => {
  try {
    const doctores = await prisma.especialidad.findMany({
      include: {
        doctorRelation: true,
      },
    });

    res.json(doctores);
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
  const { nombre, telefono, email, doctorId, especialidadId } =
    req.body;
  try {
    const paciente = await prisma.paciente.findUnique({
      data: {
        nombre,
        telefono,
        email,
      },
    });
    const reserva = await prisma.reservaCitas.create({
      data: {
        doctorId,
        pacienteId: paciente.id,
        especialidadId,
      },
    });

    res.json(reserva);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};
