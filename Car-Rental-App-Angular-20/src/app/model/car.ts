export class CarModel {
    carId: number = 0;
    brand!: string;
    model!: string;
    year!: number;
    color!: string;
    dailyRate!: number;
    carImage!: string;
    regNo!: string;
}

export interface APIResponse {
    message: string,
    result: boolean,
    data: any
}