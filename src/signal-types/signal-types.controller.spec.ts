import { Test, TestingModule } from '@nestjs/testing';
import { SignalTypesController } from './signal-types.controller';

describe('SignalTypesController', () => {
  let controller: SignalTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignalTypesController],
    }).compile();

    controller = module.get<SignalTypesController>(SignalTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
