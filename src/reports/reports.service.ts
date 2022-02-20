import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseStorageService } from 'src/firebase/storage/storage.service';
import { Signal } from 'src/signal-types/entities/signal-types.entity';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';
import { Conservations } from './entities/conservations.entity';
import { Reports } from './entities/reports.entity';
import { Visibilities } from './entities/visibilities.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Reports)
    private readonly reportsRepository: Repository<Reports>,
    @InjectRepository(Visibilities)
    private readonly visibilitiesRepository: Repository<Visibilities>,
    @InjectRepository(Conservations)
    private readonly conservationsRepository: Repository<Conservations>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Signal)
    private readonly signalRepository: Repository<Signal>,
    private readonly firebaseStorageService: FirebaseStorageService,
  ) { }

  async create(uid: string, reportDto: CreateReportDTO): Promise<void> {
    const user = await this.usersRepository.findOne(uid);
    const signalType = await this.signalRepository.findOne(reportDto.typeId);

    let conservation = {
      clean: reportDto.clean,
      scratched: reportDto.scratched,
      foldedBoard: reportDto.foldedBoard,
      bentPost: reportDto.bentPost,
    };

    let visibility = {
      adequate: reportDto.adequate,
      vegetation: reportDto.vegetation,
      color: reportDto.color,
      energyPost: reportDto.energyPost
    };

    conservation = this.conservationsRepository.create(conservation);
    conservation = await this.conservationsRepository.save(conservation);

    visibility = this.visibilitiesRepository.create(visibility);
    visibility = await this.visibilitiesRepository.save(visibility);

    let report = {
      lat: reportDto.lat,
      lng: reportDto.lng,
      users: user,
      urlPhoto: '',
      signalTypes: signalType,
    }

    report = this.reportsRepository.create({
      visibilities: visibility,
      conservations: conservation,
      ...report,
    });

    const saved = await this.reportsRepository.save(report);

    await this.firebaseStorageService.upload(
      `photos/${saved.id}.jpg`,
      reportDto.photo,
    );

    report.urlPhoto = `photos/${saved.id}.jpg`;

    await this.reportsRepository.update(saved.id, report);
  }

  async listAllByUser(userId: string) {
    const user = await this.usersRepository.findOne(userId);

    return await this.reportsRepository.find({
      users: user,
    });
    // Implement typeorm
  }
}
