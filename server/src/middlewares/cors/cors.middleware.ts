import type {RequestHandler} from 'express';
import cors from 'cors';

type TRequestHandler = RequestHandler;

const CORSProtocol: TRequestHandler = async (req, res, next) => {
  cors({credentials: true, origin: true})(req, res, next);
};

export {CORSProtocol};
