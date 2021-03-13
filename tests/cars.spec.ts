import { expect } from "chai";
import "mocha";
import { Car} from '../src/classes/class.car'
import {VehicleMake} from '../src/interfaces'

describe("Cars", () => {
    const car = new Car()
    it("should be a Car", () => {
        expect(car).to.be.instanceOf(Car);
    });
    it("should be a Ford car", () => {
        car.make = VehicleMake.FORD
        expect(car.make).to.equal("Ford")
    })
    it("should be an Escape", () => {
        car.model = "Escape"
        expect(car.model).to.equal("Escape")
    })
    it("should be three years old", () => {
        car.age = 3
        expect(car.age).to.equal(3)
    })
});