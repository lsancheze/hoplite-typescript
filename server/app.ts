import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import indexRouter from './src/routes';

import errorHandler from './src/middlewares/errorMiddleware';
import {CORSProtocol} from './src/middlewares/cors/cors.middleware';
import createRouterV1 from './src/routes/v1/router';

const app = express();

app.use(CORSProtocol);
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

const portalRouterV1beta = createRouterV1();

app.use('/v1', portalRouterV1beta);
app.use(errorHandler);

export {app};
