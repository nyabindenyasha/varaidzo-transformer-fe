export interface TransformerLocation {

    id: number;
    createdDate: Date;
    name: string;
    description: string;
    latitude: number;
    longitude: number;
    hasIntrusion: boolean;
    hasAbnormalTemperature: boolean;
    hasAbnormalOilLevel: boolean;

    color1: string;
    color2: string;
    color3: string;

}