// node 12 and up
import chai from "chai"
import divide from "../src/divide.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#divide", () => {

    it("testing string equals string", () =>{
        expect(divide(1,1)).to.equal(1)
    });

})
