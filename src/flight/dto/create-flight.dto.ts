import { IsNotEmpty, IsString, IsDateString, IsUUID } from 'class-validator';

export class CreateFlightDto {
    @IsNotEmpty()
    @IsDateString()
    date: Date;

    @IsNotEmpty()
    @IsUUID('4')
    sourceId: string;

    @IsNotEmpty()
    @IsUUID('4')
    destinyId: string;
}
