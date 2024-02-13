import {isCelebrateError} from 'celebrate';
import {Request, Response, NextFunction} from 'express';
import ServiceError from '../services/utils/ServiceError';

const errorMiddleware: any = async (
  error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let errorForLog = error;
  let auxError = error;
  if (isCelebrateError(error)) {
    const {_original: original} = error.details.get('body') || {
      _original: null,
    };
    errorForLog = {
      message: `${error.message}: ${
        error.details.get('body')?.details[0].message
      } - original: ${JSON.stringify(original)}`,
    };
  }

  // Log the real error with the highest possible detail
  console.log('Error: ', errorForLog);

  // Parse unknown errors into a generic ServiceError to avoid including any sensitive/irrelevant data in the response
  if (!(error instanceof ServiceError)) {
    auxError = new ServiceError({
      code: 1,
      status: 500,
      message: 'Something went wrong. Please try again later',
      component: 'PortalBE',
      traceId: '1',
    });
  }

  const {status, message, code} = auxError;
  return res.status(status || 500).json({error: {code, message}});
};

export default errorMiddleware;
