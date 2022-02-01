import { Controller, Get } from '@nestjs/common';
// import { CalendarModel } from './calendar.model';
import { CalendarsService } from './calendars.service';

@Controller('calendars')
export class CalendarsController {
  constructor(private readonly calendarService: CalendarsService) {}

  @Get()
  findAllDocId() {
    return this.calendarService.findAllDocId();
  }
}
