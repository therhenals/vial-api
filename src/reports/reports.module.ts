import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Signal } from 'src/signal-types/entities/signal-type.entity';
import { Conservation } from './entities/conservation.entity';
import { Report } from './entities/report.entity';
import { Visibility } from './entities/visibility.entity';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Visibility,
      Conservation,
      Report,
      User,
      Signal,
    ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule { }
