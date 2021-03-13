import {Car, CarBuilder} from '../classes/class.car'
import {Truck, TruckBuilder} from '../classes/class.truck'
import {VehicleMake} from '../interfaces'

export class VehicleDirector{


    constructor(private builder:typeof TruckBuilder | typeof CarBuilder){
      
    }

    makeFordTaurus(){
        const builder = new this.builder as CarBuilder
        builder.setMake(VehicleMake.FORD)
        builder.setModel("Taurus")
        return builder
        
    }

    makeF150(){
       const builder = new this.builder as TruckBuilder
       builder.addTowPackage()
       builder.setMake(VehicleMake.FORD)
       builder.setModel("F-150")
       return builder
    }

    makeF150XLT(){
        const builder = new this.builder as TruckBuilder
        builder.addTowPackage()
        builder.add4x4()
        builder.setMake(VehicleMake.FORD)
        builder.setModel("F-150 XLT")
        
        return builder
    }

    makeRanger(){
        const builder = new this.builder as TruckBuilder
        builder.setMake(VehicleMake.FORD)
        builder.setModel("Ranger") 
        builder.add4x4()
        return builder
    }
}