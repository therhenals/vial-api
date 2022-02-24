import { Controller, Post, Body, Get, UseGuards, SetMetadata } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FirebaseUserClass } from 'src/firebase/classes/firebase-user.class';
import { FirebaseUser } from 'src/firebase/user.decorator';
import { AuthGuard } from 'src/utils/guards/auth.guard';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';
import { ReportsService } from './reports.service';

@ApiTags('reports')
@Controller('reports')
export class ReportsController {
    constructor(
        private reportsService: ReportsService
    ) { }

    @UseGuards(AuthGuard)
    @Post('create')
    @SetMetadata('roles', ['reporter', 'admin'])
    async create(
        @FirebaseUser() firebaseUser: FirebaseUserClass,
        @Body() reportDto: CreateReportDTO,
    ): Promise<void> {
        await this.reportsService.create(firebaseUser.uid, reportDto);
    }

    @UseGuards(AuthGuard)
    @SetMetadata('roles', ['reporter', 'admin'])
    @Get('listAll')
    async listAllByUser(
        @FirebaseUser() user: FirebaseUserClass
    ) {
        return await this.reportsService.listAllByUser(user.uid);
    }

    @Get('statistics')
    async getStatistics() {
        return await this.reportsService.statistics();
    }
}
