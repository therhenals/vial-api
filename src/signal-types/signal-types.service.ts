import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignalTypeClass } from './classes/signal-type.class';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';
import { Signal } from './entitie/signal-types.entity';

@Injectable()
export class SignalTypesService {
  constructor(
    @InjectRepository(Signal)
    private readonly signalRepository: Repository<Signal>,
  ) {}

  async create(senial: CreateSignalTypeDTO) {
    const dto = this.signalRepository.create(senial as any);
    return await this.signalRepository.save(dto);
    console.log(dto);
  }

  async getById(id: number) {
    const res = await this.signalRepository.findOne(id);
    if (!res) throw new NotFoundException('The Sygnal no exist');
    return res;
  }

  async listAll(): Promise<any> {
    const data = await this.signalRepository.find();
    return { message: 'data', data };
  }

  async editOne(id: number, dto: CreateSignalTypeDTO) {
    const senial = await this.signalRepository.findOne(id);

    if (!senial) throw new NotFoundException('Not found');

    const editedPost = Object.assign(senial, dto);
    return await this.signalRepository.save(editedPost);
  }

  async deleteOne(id: number) {
    const senial = await this.signalRepository.findOne(id);
    if (!senial) throw new NotFoundException('Id not found');

    await this.signalRepository.delete(id);

    return { message: 'Success Fulll porcess of elimination' };
  }
}
