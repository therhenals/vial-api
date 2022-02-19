import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { SignalTypeClass } from './classes/signal-type.class';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';
import { SignalTypesService } from './signal-types.service';

@Controller('signal-types')
export class SignalTypesController {

    constructor(
        private signalTypesService: SignalTypesService
    ) { }

    @Post('create')
   async  create(@Body() signalType: CreateSignalTypeDTO) : Promise<void> {
     await   this.signalTypesService.create(signalType);
    }

    @Get('list')
    async listAll(): Promise<SignalTypeClass[]> {
      return await this.signalTypesService.listAll();
    }

    @Get(':id')
    async getOne(@Param('id',ParseIntPipe) id:number){
      return await this.signalTypesService.getById(id);
    }
}
