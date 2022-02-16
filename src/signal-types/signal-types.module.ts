import { Module } from '@nestjs/common';
import { SignalTypesController } from './signal-types.controller';
import { SignalTypesService } from './signal-types.service';

@Module({
  controllers: [SignalTypesController],
  providers: [SignalTypesService]
})
export class SignalTypesModule {}
