import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarsController } from './calendars/calendars.controller';
import { CalendarsService } from './calendars/calendars.service';
import { CalendarsModule } from './calendars/calendars.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [CalendarsModule, EventsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
