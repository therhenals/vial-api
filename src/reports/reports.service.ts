import { Injectable } from '@nestjs/common';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';

@Injectable()
export class ReportsService {

    async create(reportDto: CreateReportDTO): Promise<void> {
        // Implement typeorm
    }

    async listAllByUser(userId: string) : Promise<ReportClass[]> {
        // Implement typeorm
    }
}
