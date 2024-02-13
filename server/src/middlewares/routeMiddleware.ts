const routeMiddleware =
  (fn) =>
  async (req, res, next): Promise<void> => {
    const routePromise = (session?): Promise<void> =>
      Promise.resolve(fn(req, res, next, session));

    try {
      await routePromise();
    } catch (error) {
      next(error);
    }
  };

export default routeMiddleware;
