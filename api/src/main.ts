import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as functions from 'firebase-functions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();

const server = express();

export const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  // ここにセキュリティについての設定を追加する
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.use(helmet());
  app.enableCors();

  return app.init();
};

createNestServer(server)
  .then(() => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api = functions.region('asia-northeast1').https.onRequest(server);
