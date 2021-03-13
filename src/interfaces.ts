export enum VehicleMake{
    FORD = "Ford",
    CHEVY = "Chevrolet",
    SUBARU = "Subaru",
    NISSAN = "Nissan",
    VW = "Volkswagen"
}

export interface IVehicle{
    make:VehicleMake
    model:string
    year:number
    age:number
}