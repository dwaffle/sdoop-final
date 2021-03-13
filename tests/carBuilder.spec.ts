import { expect } from "chai";
import "mocha";
import { Car, CarBuilder} from '../src/classes/class.car'
import {VehicleMake} from '../src/interfaces'

describe("Car Builder", () => {
    const carBuilder = new CarBuilder()
    it("should be a CarBuilder", () => {
        expect(carBuilder).to.be.instanceOf(CarBuilder)
    });
    it("should set the make to Volkswagen", () => {
        carBuilder.setMake(VehicleMake.VW)
        expect(carBuilder.getCar().make).to.equal("Volkswagen")
    })
    it("should set the model to Neon", () => {
        carBuilder.setModel("Neon")
        expect(carBuilder.getCar().model).to.equal("Neon")
    })
    it("should return a Car", () => {
        expect(carBuilder.getCar()).to.be.instanceOf(Car)
    })
});