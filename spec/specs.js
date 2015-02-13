describe("binary", function() {
  it("will return the decimal of a binary number under 10", function() {
    expect(binary("11")).to.equal(3);
  });
  it("will return the decimal of a binary number under 10 when it's not the same binary number", function() {
    expect(binary("10")).to.equal(2);
  });
  it("will return the decimal of a binary number when it's crazy when it's not the same binary number", function() {
    expect(binary("101010001000100")).to.equal(21572);
  });
});

describe("trinary", function() {
  it("will return the decimal of a trinary number under 10", function() {
    expect(trinary("12")).to.equal(5);
  });
  it("will return the decimal of a crazy trinary number", function() {
    expect(trinary("1211122212121")).to.equal(977497);
  });
});

describe("hexadecimal", function() {
  it("will return the decimal of a hexadecimal number under 10", function() {
    expect(hexadecimal("3e8")).to.equal(1000);
  });
});
