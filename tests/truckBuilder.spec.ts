import { expect } from "chai";
import "mocha";
import { Truck, TruckBuilder} from '../src/classes/class.truck'
import {VehicleMake} from '../src/interfaces'
import { withTowPackage } from "../src/mixins/mixin.withTowPackage";
import { with4x4 } from '../src/mixins/mixin.with4x4'

describe("Truck Builder", () => {
    const truckBuilder = new TruckBuilder()
    it("should be a TruckBuilder", () => {
        expect(truckBuilder).to.be.instanceOf(TruckBuilder)
    });
    it("should have a tow package", () => {
        truckBuilder.addTowPackage()
        expect(truckBuilder.getTruck()).to.contain(withTowPackage(Truck))
    })
    it("should set the make to Chevrolet", () => {
        truckBuilder.setMake(VehicleMake.CHEVY)
        expect(truckBuilder.getTruck().make).to.equal("Chevrolet")
    })
    it("should set the model to Ram", () => {
        truckBuilder.setModel("Ram")
        expect(truckBuilder.getTruck().model).to.equal("Ram")
    })
    it("should return a Truck", () => {
        expect(truckBuilder.getTruck()).to.be.instanceOf(Truck)
    })

  
    it("should have 4x4", () => {
        truckBuilder.add4x4()
        expect(truckBuilder.getTruck()).to.contain(with4x4(Truck))
    })

    it("should have both 4x4 and a tow package", () => {
        truckBuilder.add4x4()
        truckBuilder.addTowPackage()
        expect(truckBuilder.getTruck()).to.contain(with4x4(withTowPackage(Truck)))
    })
});