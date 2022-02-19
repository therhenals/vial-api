import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/entitie/user.entity';
import { Signal } from 'src/signal-types/entitie/signal-types.entity';
import { Conservations } from './entitie/conservations.entity';
import { Reports } from './entitie/reports.entity';
import { Visibilities } from './entitie/visibilities.entity';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Visibilities,
      Conservations,
      Reports,
      Users,
      Signal,
    ]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
