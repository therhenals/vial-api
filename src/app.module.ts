import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { SignalTypesModule } from './signal-types/signal-types.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //Nest modules
    ConfigModule.forRoot({
      isGlobal: true,
    }),    
    // App modules
    AuthModule,
    FirebaseModule,
    UsersModule,
    ReportsModule,
    SignalTypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
