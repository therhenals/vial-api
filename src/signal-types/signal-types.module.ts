import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Signal } from './entitie/signal-types.entity';
import { SignalTypesController } from './signal-types.controller';
import { SignalTypesService } from './signal-types.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Signal])
  ],
  controllers: [SignalTypesController],
  providers: [SignalTypesService]
})
export class SignalTypesModule {}
