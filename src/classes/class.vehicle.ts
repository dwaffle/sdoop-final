import {IVehicle, VehicleMake} from '../interfaces'

export class Vehicle implements IVehicle{
    make:VehicleMake
    model:string
    year:number
    private _age:number
    set age(years:number){
        this._age = years
    }
    get age():number{
        return this._age
    }
}