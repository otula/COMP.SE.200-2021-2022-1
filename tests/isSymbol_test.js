// node 12 and up
import chai from "chai"
import isSymbol from "../src/isSymbol.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#isSymbol", () => {

    it("testing string equals string", () =>{
        expect(isSymbol(Symbol("test"))).to.be.true
    });

})
