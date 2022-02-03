import CalendarRepository from '@/repositories/calendarRepository';

type RepositoriesType = 'calendar';

const repositories = {
  calendar: CalendarRepository,
};

export const RepositoryFactory = {
  get: (name: RepositoriesType) => repositories[name],
};
