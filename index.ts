// const hello: string = "!!!!@";

//cmd or 터미널에서 command prompt 열고
//cd (경로)
//tsc -w

// function add(x: number, y: number): number {
//   return x + y;
// }
// interface Person {
//   name: string;
//   age: number;
// }
// const person: Person = {
//   name: "박기영",
//   age: 27,
// };

// 에러처리 여부 - JS -TS
// 문법에러 - O - O
// 타입에러 - X - O
// 런타임에러 - X - X

// Uncaught TypeError : Cannot read perperty of null
// typeError: null is not an object..... undefined is no and object
// .... is not a function

// const human = {
//   mouth: null,
// };
// human.mouth;

// const array = [123, 4, 56, 0];
// array[3].toFixed();

// string, number, boolean, null, undefined, symbol, bigint, object
// const str: string = "hellow";
// const num: number = 123;
// const bool: boolean = false;
// const n: null = null;
// const u: undefined = undefined;
// const sym: symbol = Symbol("sym");
// const bit: bigint = 100000000n;
// const obj: object = { hello: "world" };

// function plus(x: number, y: number): number {
//   return x + y;
// }

// const minus = (x: number, y: number): number => x + y;

// const result1: number = plus(1, 2);
// const result2 = plus(1, 2);

// const str3: string = "aaaa";
// const str4: {} = "aaaa";

// const str2 = "aaaa";
// let str10 = "hello"; // type widening
// let u = undefined;
// let n = null;

// let str: "hello" = "hello"; // const str = "hello"
// let str2: string = "hello";
// str2 = "world";
// str2 = 123;

// const obj: { name: "zero" } = { name: "zero" };
// const arr: [1, 3, "five"] = [1, 3, "five"];

//두 코드는 같다.
// const func: (amount: number, unit: string) => string = (amount, unit) =>
//   amount + unit;
// const func = (amount: number, unit: string): string => amount + unit;

// const obj = { name: "zero" } as const;
// const arr = [1, 3, "five"];

// const arr1 = [];
// arr1.push(1);
// arr1.push(2);

// const arr1: string[] = ["1", "2", "3"];
// const arr2: Array<number> = [1, 2, 3];

// const arr3 = [1, 3, 5];
// const arr4 = [1, "3", 5];
// const arr5 = [];

// const arr = [123, 4, 56];
// arr[3].toFixed();

//자료형 표시할때 첫자를 대문자로 쓰는건 피해라
// const date: Date = new Date();
// const math: Math = Math;
// const str: String = "hello";
// const num: Number = 123;
// const bool: Boolean = true;

// function add(x: Number, y: Number) {
//   return x + y;
// }

// const str1: String = "hello";
// const str2: string = str1;

// 유니언 타입 -> |파이프연산자
// let strOrNum: string | number = "asdfa";
// strOrNum = 123;
// function returnNnmber(value: string | number) {
//   if (typeof value === "number") {
//     return value.toFixed(value);
//   } else {
//     return value.toString();
//   }
// }
// returnNnmber(1);
// returnNnmber("1");

// function returnString(value: string | number | boolean): String {
//   return CSSMathValue.toString();
// }

// function plus(x, y) {
//   return x + y;
// }

// let str: any = "hello";
// const result = str.toFixed();

// const arr = [];
// arr.push("1");
// arr.push(3);

// const arr2 = [];
// arr2[0] = "1";
// arr2;
// arr2[1] = 3;
// arr;

// const a: any = "123";
// const an1 = a + 1;
// const nb1 = a - 1;
// const nb2 = a * 1;

// unknown >> any
// const a: unknown = "hellow";
// const b: unknown = "world";
// a + b;

// try {
//   //
// } catch (e) {
//   const error = e as Error;
//   const err = <Error>e;
//   console.log(error.message);
// }
// const aaa: number = "123" as unknown as number;
// function reReturn() {}
// const fn: () => void = () => 3;
// const v = fn();

// const str: {} = "hello";
// const num: {} = 123;
// const bool: {} = true;
// const obj: {} = { name: "zero" };

//never : never 타입 외에 어떤 타입도 대입불가.
// function neverFn() {
//   throw new Error("에러");
// }
// const result1: never = neverFn();
// const neverFn2 = () => {
//   throw new Error("에러");
// };
// const result2 = neverFn2();

// 타입에 별칭 붙이기
// type A = string; // 별칭 type alias
// const str: A = "abc";

// const fn1: (value: number, unit: string) => string = (value, unit) =>
//   value + unit;

// type valueWithUnit = (value: number, unit: string) => string;
// const fn2: valueWithUnit = (value, unit) => value + unit;

// type Person = {
//   name: string;
//   age: number;
//   married: boolean;
// };
// const Person1: Person = {
//   name: "zero2",
//   age: 32,
//   married: true,
// };
// const person2: Person = {
//   name: "zero",
//   age: 30,
//   married: false,
// };

// interface Func {
//   (x: number, y: number): number;
// }
// const add: Func = (x, y) => x + y;
// type
// interface : t선언 병합

// interface Merge {
//   one: string;
// }
// interface Merge {
//   two: number;
// }

// const ex: Merge = {
//   one: "1",
//   two: 2,
// };

// interface Person {
//   name: string;
//   age: number;
// }
// interface Employee extends Person {
//   empId: number;
// }

// 네임스페이스
// namespace Example {
//   export interface Inner {
//     test: string;
//   }
//   export type test2 = number;
// }
// const ex: Example.Inner = {
//   test: "hellow",
// };
// const ex2: Example.test2 = 123;
