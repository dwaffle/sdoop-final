import { expect } from "chai";
import "mocha";
import { Truck} from '../src/classes/class.truck'
import {VehicleMake} from '../src/interfaces'

describe("Cars", () => {
    const truck = new Truck()
    it("should be a Truck", () => {
        expect(truck).to.be.instanceOf(Truck);
    });
    it("should be a Ford truck", () => {
        truck.make = VehicleMake.FORD
        expect(truck.make).to.equal("Ford")
    })
    it("should be an F-150", () => {
        truck.model = "F-150"
        expect(truck.model).to.equal("F-150")
    })
    it("should be five years old", () => {
        truck.age = 5
        expect(truck.age).to.equal(5)
    })
});