import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';
import { Signal } from './entitie/signal-types.entity';

@Injectable()
export class SignalTypesService {
  constructor(
    @InjectRepository(Signal)
    private readonly postRepository: Repository<Signal>,
  ) {}

  // async create(signalType: CreateSignalTypeDTO): Promise<void> {
  //     // Implement typeorm
  // }

  // async listAll(): Promise<SignalTypeClass[]> {
  //     // Implement typeorm
  // }
}
