import { IsString, IsBoolean } from 'class-validator';
export default class ChargerState {
    @IsString()
    public chargerId: string;

    @IsBoolean()
    public active: boolean;

}
