const mongoClient = require("./mongoConnect");

const insertUser = async (user) => {
  try {
    const client = await mongoClient.connect();
    const db = client.db("jest").collection("test");
    const result = await db.insertOne(user);
    return result.acknowledged;
    res.status(200).json("데이터 추가 성공!");
  } catch (err) {
    return err;
  }
};

module.exports = {
  insertUser,
};
