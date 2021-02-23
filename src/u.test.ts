export const aTestFx = () => "hello";

test("a test fx", () => {
  expect(aTestFx()).toEqual("hello");
});
