const script = require("../../script");

const plus = script.plus;
const minus = script.minus;
const divide = script.divide;
const multi = script.multi;

describe("func plus()", () => {
  it("5 if (3,2)", () => {
    expect(plus(3, 2)).toBe(5);
  });
  it("undefined if someone undef", () => {
    expect(plus(undefined, Number)).toBe(undefined);
    expect(plus(Number, undefined)).toBe(undefined);
  });
  it("null if someone string", () => {
    expect(plus(String, Number)).toBe(null);
    expect(plus(Number, String)).toBe(null);
  });
});

describe("func minus()", () => {
  it("1 if (3,2)", () => {
    expect(minus(3, 2)).toBe(1);
  });
  it("undefined if someone undef", () => {
    expect(minus(undefined, Number)).toBe(undefined);
    expect(minus(Number, undefined)).toBe(undefined);
  });
  it("null if someone string", () => {
    expect(minus(String, Number)).toBe(null);
    expect(minus(Number, String)).toBe(null);
  });
});

describe("func divide()", () => {
  it("2 if (6,3)", () => {
    expect(divide(6, 3)).toBe(2);
  });
  it("undefined if someone undef", () => {
    expect(divide(undefined, Number)).toBe(undefined);
    expect(divide(Number, undefined)).toBe(undefined);
  });
  it("null if someone string", () => {
    expect(divide(String, Number)).toBe(null);
    expect(divide(Number, String)).toBe(null);
  });
});

describe("func multi()", () => {
  it("6 if (3,2)", () => {
    expect(multi(3, 2)).toBe(6);
  });
  it("undefined if someone undef", () => {
    expect(multi(undefined, Number)).toBe(undefined);
    expect(multi(Number, undefined)).toBe(undefined);
  });
  it("null if someone string", () => {
    expect(multi(String, Number)).toBe(null);
    expect(multi(Number, String)).toBe(null);
  });
});
