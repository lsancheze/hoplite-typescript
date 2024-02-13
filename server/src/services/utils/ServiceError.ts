export type TServiceErrorType =
  | 'internal'
  | 'request'
  | 'not_found'
  | 'unauthorized'
  | 'forbidden';
export type TServiceErrorData = Record<string, unknown> | Array<unknown>;

export type TServiceErrorMetadata = {
  code: number;
  message: string;
  traceId?: string;
  description?: string;
  status: number;
  component?: string;
};

export default class ServiceError extends Error {
  code: number;

  status: number;

  message: string;

  component: string;

  traceId: string | undefined;

  description: string | undefined;

  constructor(
    data: TServiceErrorMetadata,
    additionalMessage?: string,
    ...params: string[]
  ) {
    super(...params);

    /* istanbul ignore next */
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }

    this.code = data.code;
    this.message = `${additionalMessage || data.message}`;
    this.component = data.component || 'PortalBE';
    this.traceId = data.traceId;
    this.description = data.description;
    this.status = data.status;
  }
}
