import { v4 as uuid } from 'uuid';

class Appointment {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}
// Para que a classe fique disponvível externamente
export default Appointment;
