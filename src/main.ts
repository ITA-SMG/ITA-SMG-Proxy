import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './modules/app.module';
import { Logger } from './utils/logger.util';

const bootstrap = async () => {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

    await app.listen(process.env.PORT || 3000, '0.0.0.0');
};

bootstrap().catch(Logger.error);
