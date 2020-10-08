// import { assert } from "chai";
import pkg from "chai";
const { assert } = pkg;

import { demo, addition } from "../app.js";

//Result
let demoResult = demo();
let additionResult = addition(3, 3);

describe("App", () => {
  describe("demo()", () => {
    it("demoFunction should return hello", () => {
      assert.equal(demoResult, "hello");
    });

    it("demoFunction should return type string", () => {
      assert.typeOf(demoResult, "string");
    });
  });

  describe("addition()", () => {
    it("additionFunction should be above 5", () => {
      //let result = addition(3, 3);
      assert.isAbove(additionResult, 5);
    });

    it("additionFuncton should be return type string", () => {
      //let result = addition(5, 5);
      assert.typeOf(additionResult, "number");
    });
  });
});
