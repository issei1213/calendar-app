import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventClickArg } from '@fullcalendar/common';
import { DateSelectArg } from '@fullcalendar/core';
import jaLocale from '@fullcalendar/core/locales/ja';
import { Event } from '@/types/firestore';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/repositories/repository';
import dayjs from 'dayjs';
import { RepositoryFactory } from '@/repositories/repositoryFactory';
const eventRepository = RepositoryFactory.get('eventRepository');

/**
 * https://qiita.com/rpf-nob/items/466d5c8e0204146b2d6f
 * https://github.com/fullcalendar/fullcalendar-example-projects/tree/master/next
 * https://fullcalendar.io/docs#toc
 */

type Props = {
  id: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  context,
) => {
  try {
    console.log('context', context);
    return { props: { id: 'K4u1P3lDe0AwJFNAJzV7' } };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

const CalendarIdMonth: NextPage = (props) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'calendars/K4u1P3lDe0AwJFNAJzV7/events')),
      (snapshots) => {
        setEvents(
          snapshots.docs.map((item) => {
            return {
              title: item.data().title,
              date: dayjs(item.data().date.toDate()).format('YYYY-MM-DD'),
            };
          }),
        );
      },
    );

    //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
    return () => unsubscribe();
  }, []);

  const handleWeekendsToggle = (): void => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: 'asdva;kjd',
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo);
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`,
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const calendarRef = useRef(null);

  // const onClick = () => {
  //   const api = calendarRef.current.getApi();
  //   const type =
  //     api.view.type === 'dayGridMonth' ? 'timeGridDay' : 'dayGridMonth';
  //   const date = type === 'timeGridDay' ? '2017-06-01' : null;
  //   api.changeView(type, date);
  // };

  return (
    <div>
      <FullCalendar
        locale={jaLocale}
        ref={calendarRef}
        dateClick={(value) => {
          console.log('dateClick', value);
        }}
        // plugins={[timeGridPlugin, interactionPlugin]}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,myButton',
        }}
        customButtons={{
          myButton: {
            text: 'custom!',
            click: function () {
              alert('clicked the custom button!');
            },
          },
        }}
        initialView="dayGridMonth"
        // initialView="dayGridMonth"
        editable={true}
        selectable={false}
        selectMirror={true}
        dayMaxEvents={true}
        select={handleDateSelect}
        events={events}
        eventClick={handleEventClick}
        titleFormat={{
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }}
        // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        // /* you can update a remote database when these fire:
        // eventAdd={function(){}}
        eventChange={function (value) {
          console.log('eventChange', value);
        }}
        // eventRemove={function(){}}
      />
    </div>
  );
};

export default CalendarIdMonth;
