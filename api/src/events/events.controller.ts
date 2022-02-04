import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreateEventDto } from './dto/createEvent.dto';
import { EventsService } from './events.service';

@Controller('calendars/:calendarId/events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Post()
  async create(
    @Param('calendarId') calendarId,
    @Body() createEventDto: CreateEventDto,
  ) {
    return await this.eventService.create(calendarId, createEventDto);
  }
}
