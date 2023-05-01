const throwErr = (): never => {
  throw new Error("에러 발생!");
};

test("에러가 발생하는지 봅시다", () => {
  expect(() => throwErr()).toThrow();
});
