import { IsString } from "class-validator";

export class CreateSignalTypeDTO {
    @IsString()
    name: string;
}