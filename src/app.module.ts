import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from './mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

import { TransactionModule } from './transaction/transaction.module';


import { FeedbackModule } from './feedback/feedback.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: process.env.DB_NAME }),
    // ConfigModule.forRoot(),

    UsersModule,
    AuthModule,
    ProfileModule,
    ProductModule,
    OrderModule,
    TransactionModule,
    FeedbackModule,
    // MailerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
