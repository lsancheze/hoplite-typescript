  import http from 'http';
import Debug from 'debug';
import 'dotenv/config';

import {app} from '../app';

const debug = Debug('express-boilerplate');

function normalizePort(val: string): number | string {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) return val;
  if (port >= 0) return port;

  return -1;
}

const port = normalizePort(process.env.PORT || '3000');

function onError(error): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.log(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.log(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

app.set('port', port);

const server = http.createServer(app);

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr?.port}`;
  console.log(`Server running on: http://localhost:${process.env.PORT}`);
  debug(`Listening on ${bind}`);
}

async function gracefulShutdown(): Promise<void> {
  console.log('Received kill signal. Prepare to shutdown');

  // Graceful Shutdown operations

  console.log('Shutdown successfuly. Bye :)');

  process.exit(0);
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
