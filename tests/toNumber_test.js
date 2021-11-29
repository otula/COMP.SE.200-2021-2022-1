// node 12 and up
import chai from "chai"
import toNumber from "../src/toNumber.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toNumber", () => {

    it("testing string equals string", () =>{
        expect(toNumber(1)).to.equal(1)
    });

})
