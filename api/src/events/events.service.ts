import {
  HttpException,
  HttpStatus,
  Injectable,
  MisdirectedException,
} from '@nestjs/common';
import { CreateEventDto } from './dto/createEvent.dto';
import { EventRepository } from './event.repository';

@Injectable()
export class EventsService {
  async create(calendarId: string, createEvent: CreateEventDto): Promise<void> {
    if (!createEvent.title) {
      throw new MisdirectedException('Text is empty');
    }
    await EventRepository.create({
      calendarId,
      ...createEvent,
    });
  }
}
