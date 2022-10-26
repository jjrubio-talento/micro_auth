import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        url: 'http://localhost',
        port: 3001,
      },
      // options: {
      //   //url: process.env.GRPC_URL_RECURSOS,
      //   package: 'auth',
      //   // protoPath: join(__dirname, 'Application/grpc/recursos.proto'),
      // },
    },
  );
  //app.useGlobalPipes(new ValidationPipe());
  app.listen();
}
bootstrap();
