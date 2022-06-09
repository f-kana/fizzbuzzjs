import {fizzbuzz} from './FizzBuzz'

// todo: ２つの引数の積を返す

function multiplier2numbers(num_1, num_2) {
  return num_1 * num_2;
}

describe('my test', () => {
  it('should multiple 2 arguments.', () => {
    expect(multiplier2numbers(1, 2)).toBe(2);
  });
})



describe('fizzbuzz', () => {
  it('Intの引数を１つもち、戻り値String型の関数を作る', () => {
    expect(fizzbuzz(11)).toBe("11");
  });
  it('引数チェックで1~100の場合は"Error"ではない値を返却する', () => {
    expect(fizzbuzz(1)).not.toBe("Error");
    expect(fizzbuzz(100)).not.toBe("Error");
  });
  it('引数チェックで1~100以外の場合は"Error"という文字列を返す', () => {
    expect(fizzbuzz(101)).toBe("Error");
    expect(fizzbuzz(0)).toBe("Error");
    expect(fizzbuzz()).toBe("Error");
    expect(fizzbuzz(1.5)).toBe("Error");
    expect(fizzbuzz(1,2,3,4,5,6)).toBe("Error");
    expect(fizzbuzz("aaa")).toBe("Error");
  });

  it('3の倍数かつ5の倍数の場合、FizzBuzzを返却する。', () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it('3の倍数であり5の倍数でない場合、Fizzを返却する。', () => {
    expect(fizzbuzz(3)).toBe("Fizz");
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  it('5の倍数であり3の倍数でない場合、Buzzを返却する。', () => {
    expect(fizzbuzz(5)).toBe("Buzz");
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  it('3の倍数でも5の倍数でも無い場合、引数をString型に変換して返却する。', () => {
    expect(fizzbuzz(2)).toBe("2");
    expect(fizzbuzz(7)).toBe("7");
  });
  
})
