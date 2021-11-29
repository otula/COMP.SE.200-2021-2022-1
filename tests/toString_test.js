// node 12 and up
import chai from "chai"
import toString from "../src/toString.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#toString", () => {

    it("testing string equals string", () =>{
        expect(toString("a")).to.equal("a")
    });

})
