
// A. Intの引数を１つもち、戻り値String型の関数を作る
// B-1. 引数チェックで1~100の場合は"Error"ではない値を返却する
// B-2. 引数チェックで1~100以外の場合は"Error"という文字列を返す
// C. 3の倍数かつ5の倍数の場合、FizzBuzzを返却する。
// D. 3の倍数であり5の倍数でない場合、Fizzを返却する。
// E. 5の倍数であり3の倍数でない場合、Buzzを返却する。

// F. 3の倍数でも5の倍数でも無い場合、引数をString型に変換して返却する。

function divisibleByN(num, n) {
  return num % n === 0;
}

function divisibleBy3(num) {
  // return num % 3 === 0;
  return divisibleByN(num, 3);
}

const divisibleBy5 = (num) => num % 5 === 0;

function fizzbuzz(num) {
  const ERROR_MESSAGE = "Error";
  const FIZZ = "Fizz";
  const BUZZ = "Buzz";
  const MIN_NUM = 1;
  const MAX_NUM = 100;

  if (arguments.length !== 1) {
    return ERROR_MESSAGE;
  }

  if (!Number.isInteger(num)) {
    return ERROR_MESSAGE;
  }

  if (num < MIN_NUM || num > MAX_NUM) {
    return ERROR_MESSAGE;
  }

  if (divisibleBy3(num) && divisibleBy5(num)) {
    return FIZZ + BUZZ;
  } else if (divisibleBy3(num)) {
    return FIZZ;
  } else if (divisibleBy5(num)) {
    return BUZZ;
  }

  return String(num);
}

export {fizzbuzz};

