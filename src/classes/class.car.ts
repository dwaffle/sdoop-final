import {Vehicle} from './class.vehicle'
import {VehicleMake} from '../interfaces'

export class Car extends Vehicle{
    
}

export class CarBuilder{
    BaseCar = Car
    
    private _instance:Car

    protected get instance():Car{
        if(!this._instance){
            this._instance = new this.BaseCar()
        }
        return this._instance
    }
    
    setMake(make:VehicleMake){
        this.instance.make = make
    }

    setModel(model:string){
        this.instance.model = model
    }

    getCar(){
        return this.instance //PDF says return a Truck, but that seems wrong for a CarBuilder.
    }
}