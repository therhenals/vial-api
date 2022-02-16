import { Injectable } from '@nestjs/common';
import { CreateSignalTypeDTO } from './dto/create-signal-type.dto';

@Injectable()
export class SignalTypesService {

    async create(signalType: CreateSignalTypeDTO): Promise<void> {
        // Implement typeorm
    }

    async listAll(): Promise<SignalTypeClass[]> {
        // Implement typeorm
    }
}
