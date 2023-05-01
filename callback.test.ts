const getNameCB = (callback: (data: any) => void): void => {
  const name: string = "Tetz";
  setTimeout(() => {
    // 2분의 1 확률로 에러를 발생시켜서 에러가 발생하면
    // callback 함수에 담아서 전달 하는 코드
    try {
      if (Math.floor(Math.random() * 2) % 2 === 0) {
        console.log("정상 케이스");
        callback(name);
      } else {
        console.log("에러 케이스");
        throw new Error("에러");
      }
    } catch (error) {
      callback(error);
    }
  }, 2000);
};

test("3초 후에 이름을 받아오는 콜백 함수 테스트", (done) => {
  // data 로 에러가 들어올지 데이터가 들어올지 모르므로 any 타입 설정
  function callback(data: any): void {
    try {
      // 데이터가 Error 타입이면 error 객체의 메세지가 원래 보낸 메세지인지 테스트
      if (data instanceof Error) {
        expect(data.message).toBe("에러");
      } else {
        // 데이터가 Error 타입이 아니면 원래 보내기로 한 문자열과 동일한지 테스트
        expect(data).toBe("Tetz");
      }
      done();
    } catch (err) {
      done(err);
    }
  }
  getNameCB(callback);
});
