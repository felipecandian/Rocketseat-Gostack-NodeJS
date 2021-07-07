import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

// Criar um array para salvar em memória
const appointments: Appointment[] = [];

appointmentsRouter.post('/', (request, response) => {
  // Os dados que o usuário irão usar para criar o agendamentos
  const { provider, date } = request.body;
  const parsedDate = startOfHour(parseISO(date));
  // Iremos fazer essa função para comparar data e horário
  const findAppointmentInSameDate = appointments.find((appointment) =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
