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
   
  async create(signal: any){
       const senial = this.signalRepository.create(signal);
       return await this.signalRepository.save(senial);
  }

    getById(id: number){
        const res =  this.signalRepository.findOne(id);
        if(!res) throw new NotFoundException('The Sygnal no exist');
        return res;
  }

  async listAll(): Promise<any> {
   const data = await this.signalRepository.find();
    return  {message:'data',data} 
    
  }
}
