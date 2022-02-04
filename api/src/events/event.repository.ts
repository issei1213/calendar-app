import { CreateEventDto } from './dto/createEvent.dto';
import { firestore } from '../firebase/initialize';

export const EventRepository = {
  create: async ({ title, calendarId, startDate, endDate }): Promise<void> => {
    await firestore
      .collection('calendars')
      .doc(calendarId)
      .collection('events')
      .doc()
      .set({
        title,
        startDate,
        endDate,
      });
  },
};
