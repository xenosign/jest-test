const { insertUser } = require("./mongoController");

test("유저 생성 테스트", async () => {
  const addUser = { id: "tetz", name: "이효석", age: 39 };

  try {
    const result = insertUser(addUser);
    expect(result).toBe("회원 추가 성공");
  } catch (err) {
    expect(err).toBe("");
  }
});
