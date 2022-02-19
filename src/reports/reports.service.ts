import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';
import { Conservations } from './entitie/conservations.entity';
import { Reports } from './entitie/reports.entity';
import { Visibilities } from './entitie/visibilities.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly reportsRepository: Repository<Reports>,
    @InjectRepository(Visibilities)
    private readonly visibilitiesRepository: Repository<Visibilities>,
    @InjectRepository(Conservations)
    private readonly conservationsRepository: Repository<Conservations>,
  ) {}

  // async create(reportDto: CreateReportDTO): Promise<void> {
  //     // Implement typeorm
  // }

  // async listAllByUser(userId: string) : Promise<ReportClass[]> {
  //     // Implement typeorm
  // }
}
