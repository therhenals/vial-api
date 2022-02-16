import { Test, TestingModule } from '@nestjs/testing';
import { SignalTypesService } from './signal-types.service';

describe('SignalTypesService', () => {
  let service: SignalTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignalTypesService],
    }).compile();

    service = module.get<SignalTypesService>(SignalTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
