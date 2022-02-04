import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventRepository } from './event.repository';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
