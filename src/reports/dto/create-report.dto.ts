import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateReportDTO {
    @IsString()
    lat: string;
    @IsString()
    lng: string;
    @IsString()
    photo: string;

    //Visibilities
    @IsBoolean()
    adequate: boolean;
    @IsBoolean()
    vegetation: boolean;
    @IsBoolean()
    color: boolean;
    @IsBoolean()
    energyPost: boolean;

    //Conservations
    @IsBoolean()
    clean: boolean;
    @IsBoolean()
    scratched: boolean;
    @IsBoolean()
    foldedBoard: boolean;
    @IsBoolean()
    bentPost: boolean;
    @IsNumber()
    typeId: number;
}