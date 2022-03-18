import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  // app.enableCors({
  // //   origin: 'http://localhots:4200'
  // })


  // await app.listen(8001);

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {  // RabbitMQ options
      urls: ['aamqps://yvrewtoy:fc0LGe4rXdQjW6TWFPUHPxhX3UYh5Wij@fly.rmq.cloudamqp.com/yvrewtoy'],
      queue: 'main_queue' ,
      queueOptions: { durable: false },

  }
  });

  app.listen();
  console.log('Microservice is listening');

}
bootstrap();
