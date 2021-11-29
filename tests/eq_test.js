// node 12 and up
import chai from "chai"
import eq from "../src/eq.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#equals", () => {

    it("testing string equals string", () =>{
        expect(eq("a","a")).to.be.true
    });

     it("testing object equals object", () =>{
        expect(eq(Object,Object)).to.be.true
    });

    it("testing object equals string", () =>{
        expect(eq(Object,"test")).to.be.false
    });

    it("testing NaN equals NaN", () =>{
        expect(eq(NaN,NaN)).to.be.true
    });

    it("testing int (1) equals int (1)", () =>{
        expect(eq(1,1)).to.be.true
    });

    it("testing int (1) equals int (2)", () =>{
        expect(eq(1,2)).to.be.false
    });

    it("testing two nulls", () =>{
        expect(eq(null,null)).to.be.true
    });

    it("Eq testing null and NaN", () =>{
        expect(eq(null,NaN)).to.be.false
    });

})
