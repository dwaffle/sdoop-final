import {Vehicle} from './class.vehicle'
import {with4x4} from '../mixins/mixin.with4x4'
import {withTowPackage} from '../mixins/mixin.withTowPackage'
import { VehicleMake } from '../interfaces'


export class Truck extends Vehicle {
    
}

export class TruckBuilder{

    BaseTruck = Truck

    private _instance:Truck

    protected get instance():Truck{
        if( !this._instance){
            this._instance = new this.BaseTruck()
            
        }
        return this._instance
    }

    addTowPackage(){
        this.BaseTruck = withTowPackage(this.BaseTruck)
    }

    add4x4(){
        this.BaseTruck = with4x4(this.BaseTruck)
    }

    setMake(make:VehicleMake){
        this.instance.make = make
    }

    setModel(model:string){
        this.instance.model = model
    }
    
    getTruck(){
        return this._instance
    }
}