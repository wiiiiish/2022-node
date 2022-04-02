const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time("전체시간");
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 직을 수 있습니다.");
console.log(string, number, boolean);
console.error("에러메시지는 console.err 에 담아주세요.");

console.table([
  { name: "제로", birth: 1999 },
  { name: "hero", birth: 2000 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 2 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
  console.trace("에러 위치 추적");
}

function a() {
  b();
}

a();
console.timeEnd("전체시간");
