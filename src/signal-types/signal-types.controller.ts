import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignalTypeClass } from './classes/signal-type.class';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';
import { SignalTypesService } from './signal-types.service';

@ApiTags('signal-types')
@Controller('signal-types')
export class SignalTypesController {
  constructor(private signalTypesService: SignalTypesService) { }

  @Post('create')
  async create(@Body() signalType: CreateSignalTypeDTO): Promise<void> {
    return await this.signalTypesService.create(signalType);
  }

  @Get('list')
  listAll(): Promise<SignalTypeClass[]> {
    return this.signalTypesService.listAll();
  }

  @Delete('delete/:id')
  delete(@Param('id') id: number) {
    return this.signalTypesService.delete(id);
  }
}
