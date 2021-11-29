// node 12 and up
import chai from "chai"
import toInteger from "../src/toInteger.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toInteger", () => {

    it("testing string equals string", () =>{
        expect(toInteger(1)).to.equal(1)
    });

})
