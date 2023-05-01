const { insertUser } = require("./mongoController");

const test = async () => {
  await insertUser({ id: "tetz", name: "이효석", age: 39 });
};

test();
