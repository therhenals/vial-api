import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { SignalTypesModule } from './signal-types/signal-types.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';
// import { Signal } from './signal-types/entitie/signal-types.entity';

@Module({
  imports: [
    //Nest modules
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // App modules
    AuthModule,
    // FirebaseModule,
    UsersModule,
    ReportsModule,
    SignalTypesModule,
    //TypeOrm
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dbnest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
