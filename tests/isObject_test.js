// node 12 and up
import chai from "chai"
import isObject from "../src/isObject.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#isObject", () => {

    it("testing string equals string", () =>{
        expect(isObject(Object)).to.be.true
    });

})
