// node 12 and up
import chai from "chai"
import add from "../src/add.js"
// below for node 10
//var chai = require("chai")
//var sum = require ("")
const expect = chai.expect


describe("#add", () => {

    it("testing string equals string", () =>{
        expect(add(Number(1),1)).to.equal(2)
    });

})
