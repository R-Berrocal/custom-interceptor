import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomResponseInterceptor } from './interceptors/custom-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new CustomResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
