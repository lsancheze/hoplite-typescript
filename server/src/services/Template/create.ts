import ServiceError from '../utils/ServiceError';

const create = (siteId: string): object => {
  // Business logic
  console.log('Do something ', siteId);
  throw new ServiceError({
    status: 404,
    code: 1,
    message: 'Something went wrong.',
  });
  return {message: 'Hello World'};
};

export default create;
