import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FirebaseStorageService } from 'src/firebase/storage/storage.service';
import { Signal } from 'src/signal-types/entities/signal-type.entity';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { ReportClass } from './classes/report.class';
import { CreateReportDTO } from './dto/create-report.dto';
import { Conservation } from './entities/conservation.entity';
import { Report } from './entities/report.entity';
import { Visibility } from './entities/visibility.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private readonly reportsRepository: Repository<Report>,
    @InjectRepository(Visibility)
    private readonly visibilitiesRepository: Repository<Visibility>,
    @InjectRepository(Conservation)
    private readonly conservationsRepository: Repository<Conservation>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
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
      user: user,
      urlPhoto: '',
      signalType: signalType,
    }

    report = this.reportsRepository.create({
      visibility: visibility,
      conservation: conservation,
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
    return await this.reportsRepository
      .createQueryBuilder('report')
      .where('report.user = :user', { user: userId })
      .innerJoinAndSelect('report.user', 'u')
      .innerJoinAndSelect('report.signalType', 's')
      .innerJoinAndSelect('report.visibility', 'v')
      .innerJoinAndSelect('report.conservation', 'c')
      .getMany()
  }

  async statistics() {
   const reportsByUsers = await this.reportsRepository.query(`
      SELECT surname,
      COUNT(*) as total
      FROM (
          SELECT u.firtsName, u.surname, r.Users_id
          FROM Reports r
          INNER JOIN Users u
          ON r.Users_id = u.id
      ) as ReportsWithUsers
      GROUP BY Users_id
    `);

    const reportsBySignalTypes = await this.reportsRepository.query(`
      SELECT *,
      COUNT(*) as total
      FROM (
          SELECT t.name, r.SignalTypes_id
          FROM Reports r
          INNER JOIN SignalTypes t
          ON r.SignalTypes_id = t.id
      ) as ReportsWithTypes
      GROUP BY SignalTypes_id
    `);
    return {
      users: reportsByUsers,
      signalTypes: reportsBySignalTypes,
    };
  }
}
