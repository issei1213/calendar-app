import eventRepository from '@/repositories/eventRepository';

type Repositories = 'eventRepository';

const repositories = {
  eventRepository: eventRepository,
};

export const RepositoryFactory = {
  get: (name: Repositories) => repositories[name],
};
