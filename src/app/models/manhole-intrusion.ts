import { ManholeLocationRequest } from "./manhole_location_request";

export class ManholeIntrusion {

    id: number;
    createdDate: Date;
    title: string;
    comment: string;
    date: Date;
    transformerLocation: ManholeLocationRequest;

}