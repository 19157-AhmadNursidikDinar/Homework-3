const conversion= require("./conversion");

test("test cel to rea", () => {
  const transform = new conversion();
  expect(transform.fromCelcius('rea',123)).toBe(98.4);
});

test("test cel to far", () => {
    const transform = new conversion();
    expect(transform.fromCelcius('far',123)).toBe(253.4);
});

test("test rea to cel", () => {
    const transform = new conversion();
    expect(transform.fromReamur('cel',132)).toBe(165);
});

test("test rea to far", () => {
    const transform = new conversion();
    expect(transform.fromReamur('far',132)).toBe(329);
});

test("test far to cel", () => {
    const transform = new conversion();
    expect(transform.fromFarenheit('cel',212)).toBe(100);
});

test("test far to rea", () => {
    const transform = new conversion();
    expect(transform.fromFarenheit('rea',329)).toBe(132);
});