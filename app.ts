function plus(a: number, b: number): number {
  var c: number = a + b;

  return c;
}

var a: number = 1;
var b: number = 2; // 2. compile err 발생

console.log('a+b=' + plus(a, b));
