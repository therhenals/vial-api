import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateReportDTO } from './dto/create-report.dto';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
    constructor(
        private reportsService: ReportsService
    ) { }


    @Post('create')
    async create(@Body() reportDto: CreateReportDTO): Promise<void> {
        await this.reportsService.create(reportDto);
    }


    @Get('listAll')
    async listAllByUser() {}
}
