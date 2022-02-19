import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { SignalTypeClass } from './classes/signal-type.class';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';
import { SignalTypesService } from './signal-types.service';

@Controller('signal-types')
export class SignalTypesController {
  constructor(private signalTypesService: SignalTypesService) { }

  @Post('create')
  create(@Body() signalType: CreateSignalTypeDTO) {
    return this.signalTypesService.create(signalType);
  }

  @Get('list')
  listAll(): Promise<SignalTypeClass[]> {
    return this.signalTypesService.listAll();
  }

  @Put('update/:id')
  editOne(@Param('id') id: number, @Body() dto: CreateSignalTypeDTO) {
    return this.signalTypesService.editOne(id, dto);
  }

  @Delete('delete/:id')
  deleteOne(@Param('id') id: number) {
    return this.signalTypesService.deleteOne(id);
  }
}
