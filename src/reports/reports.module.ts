import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conservations } from './entitie/conservations.entity';
import { Visibilities } from './entitie/visibilities.entity';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({imports: [
  TypeOrmModule.forFeature([Visibilities,Conservations])
],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
