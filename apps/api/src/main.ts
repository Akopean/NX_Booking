/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import { AppModule } from './app/app.module';
import { apiEnv } from '@booking/api/utils-env'

const { isProd, api } = apiEnv

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // TODO: contentSecurityPolicy should turn on in production
  await app.register(helmet, { contentSecurityPolicy: isProd });
  app.enableCors();

  await app.listen(api.port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${api.port}/graphiql`
  );
}

bootstrap();
