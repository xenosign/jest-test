const getNamePromise = (): Promise<string> => {
  const name = "Tetz";
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if (false) {
        console.log("정상 케이스");
        res(name);
      } else {
        console.log("에러 케이스");
        rej(new Error("에러"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 받아오는 프로미스 함수 테스트", () => {
  return getNamePromise()
    .then((age: string) => {
      expect(age).toBe("Tetz");
    })
    .catch((err) => {
      expect(err.message).toBe("에러");
    });
});
