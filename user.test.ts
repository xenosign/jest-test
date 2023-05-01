interface User {
  email: string;
  name: string;
  age: number;
}

const users: User[] = [
  { email: "tetz@kdt.com", name: "이효석", age: 39 },
  { email: "faker@t1.com", name: "이상혁", age: 26 },
  { email: "oner@t1.com", name: "문현준", age: 20 },
  { email: "keria@t1.com", name: "류민석", age: 20 },
];

const getAllUsers = (): User[] => {
  return users;
};

const getCountsOverAge = (age: number): number => {
  const resultArr: User[] | [] = users.filter((el: User) => el.age >= age);
  return resultArr?.length;
};

const getUserEmailByName = (name: string): string => {
  const resultArr: User | undefined = users.find(
    (el: User) => el.name.indexOf(name) !== -1
  );
  if (resultArr) return resultArr.email;
  return "특정 회원을 찾을 수 없습니다!";
};

test("전체 회원 중에 아래의 회원 정보를 가진 회원이 존재 하는가?", () => {
  expect(getAllUsers()).toContainEqual({
    email: "tetz@kdt.com",
    name: "이효",
    age: 39,
  });
});

// test("25살 이상인 회원은 2명 또는 그 이하다!", () => {
//   expect(getCountsOverAge(25)).toBeLessThanOrEqual(0);
// });

// test("특정 이름을 가진 회원의 email 주소 형태가 올바른가?", () => {
//   expect(getUserEmailByName("이효석")).toMatch(
//     /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
//   );
// });
