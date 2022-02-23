import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignalTypeClass } from './classes/signal-type.class';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';
import { Signal } from './entities/signal-type.entity';

@Injectable()
export class SignalTypesService {
  constructor(
    @InjectRepository(Signal)
    private readonly signalRepository: Repository<Signal>,
  ) { }

  async create(signal: CreateSignalTypeDTO): Promise<void> {
    const data = this.signalRepository.create(signal);
    await this.signalRepository.save(data);
  }

  async listAll(): Promise<SignalTypeClass[]> {
    const signalTypes = await this.signalRepository.find();
    return signalTypes;
  }

  async delete(id: number): Promise<void> {
    const signalType = await this.signalRepository.findOne(id);
    if (!signalType) throw new NotFoundException('SignalType not found');
    await this.signalRepository.delete(id);
  }
}
