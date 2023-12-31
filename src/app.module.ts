import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.development.env'],
      isGlobal: true,
    }),
    PrismaModule,
    PublicationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
