import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Signal } from './entities/signal-type.entity';
import { SignalTypesController } from './signal-types.controller';
import { SignalTypesService } from './signal-types.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Signal])
  ],
  controllers: [SignalTypesController],
  providers: [SignalTypesService]
})
export class SignalTypesModule {}
