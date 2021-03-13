import { expect } from "chai";
import "mocha";
import { Car, CarBuilder} from '../src/classes/class.car'
import { Truck, TruckBuilder} from '../src/classes/class.truck'
import { withTowPackage } from "../src/mixins/mixin.withTowPackage";
import { with4x4 } from '../src/mixins/mixin.with4x4'
import {VehicleMake} from '../src/interfaces'
import {VehicleDirector} from '../src/director/director.vehicle'

describe("Vehicle Director", () => {
    const carDirector = new VehicleDirector(CarBuilder)
    const truckDirector = new VehicleDirector(TruckBuilder)
    it("should be a VehicleDirector", () => {
        expect(carDirector).to.be.instanceOf(VehicleDirector);
    });
    it("should return a Car", () => {
        expect(carDirector.makeFordTaurus().getCar()).to.be.instanceOf(Car)
    })
    it("should make a Ford car", () => {
        const car = carDirector.makeFordTaurus()
        expect(car.getCar().make).to.equal(VehicleMake.FORD)
    })
    it("should be a Taurus", () => {
        const car = carDirector.makeFordTaurus()
        expect(car.getCar().model).to.equal("Taurus")
    })

    it("should make a Truck", () => {
        const truck = truckDirector.makeF150()
        expect(truck.getTruck()).to.be.instanceOf(Truck)
    })
    it("should make an F-150", () => {
        const truck = truckDirector.makeF150().getTruck()
        expect(truck.make).to.equal("Ford")
        expect(truck.model).to.equal("F-150")
        expect(truck).to.include({towLimit:4})
        
    })
    it("should make an F-150 XLT", () => {
        const truck = truckDirector.makeF150XLT().getTruck()
        expect(truck.make).to.equal("Ford")
        expect(truck.model).to.equal("F-150 XLT")
        expect(truck).to.include({towLimit: 4})
        expect(truck).to.include(with4x4(Truck))
    })
    it("should make a Ranger", () => {
        const truck = truckDirector.makeRanger().getTruck()
        expect(truck.make).to.equal("Ford")
        expect(truck.model).to.equal("Ranger")
        expect(truck).to.include(with4x4(Truck))
    })
});