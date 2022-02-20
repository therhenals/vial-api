import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseUserClass } from 'src/firebase/classes/firebase-user.class';
import { FirebaseUser } from 'src/firebase/user.decorator';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
    constructor(
        private reportsService: ReportsService
    ) { }


    @Post('create')
    async create(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
        @Body() reportDto: CreateReportDTO,
    ): Promise<void> {
        await this.reportsService.create(firebaseUser.uid, reportDto);
    }


    @Get('listAll')
    async listAllByUser(
        @FirebaseUser() user: FirebaseUserClass
    ) /* : Promise<ReportClass[]> */ {
        return await this.reportsService.listAllByUser(user.uid);
    }
}
