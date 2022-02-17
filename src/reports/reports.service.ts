import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';
import { Visibilities } from './entitie/visibilities.entity';

@Injectable()
export class ReportsService {

    constructor(
        @InjectRepository(Visibilities)
       private readonly postRepository: Repository<Visibilities>
    ){}


    // async create(reportDto: CreateReportDTO): Promise<void> {
    //     // Implement typeorm
    // }

    // async listAllByUser(userId: string) : Promise<ReportClass[]> {
    //     // Implement typeorm
    // }
}
