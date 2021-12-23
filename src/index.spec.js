import { slugger } from "./index.js";

describe("testing slugger basic functionality", () => {
  /**
   * @it - unit tests can use the 'it' syntax
   */
  it("should be defined", () => {
    expect(slugger).toBeDefined();
  });

  it("should be a function", () => {
    expect(slugger).toBeInstanceOf(Function);
  });

  it("slugger can slug string with spaces", () => {
    expect(slugger("   rena    arfi ", "rapyd")).toEqual("rena-arfi-rapyd");
  });

  test("slugger can slug any number of spacy strings", () => {
    expect(slugger("hello","who","are","you")).toEqual("hello-who-are-you");
  }) 

});
