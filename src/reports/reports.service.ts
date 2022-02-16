import { Injectable } from '@nestjs/common';
import { CreateReportDTO } from './dto/create-report.dto';

@Injectable()
export class ReportsService {

    async create(reportDto: CreateReportDTO): Promise<void> {
        // Implementacion con typeorm
    }
}
