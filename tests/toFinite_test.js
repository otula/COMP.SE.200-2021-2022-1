// node 12 and up
import chai from "chai"
import toFinite from "../src/toFinite.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toFinite", () => {

    it("testing string equals string", () =>{
        expect(toFinite(1)).to.equal(1)
    });

})
