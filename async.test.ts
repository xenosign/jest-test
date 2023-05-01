const getNameAsync = (id: string): Promise<string> => {
  const name = "이효석";
  return new Promise<string>((res, rej) => {
    setTimeout(() => {
      if (id === "tetz") {
        console.log("정상 케이스");
        res(name);
      } else {
        rej(new Error("id가 다릅니다!"));
      }
    }, 2000);
  });
};

test("2초 후에 이름을 받아오는 async/await 함수 테스트", async () => {
  try {
    const result: any = await getNameAsync("tetz");
    expect(result).toBe("이효석");
  } catch (error) {
    expect(error.message).toBe("에러");
  }
});
