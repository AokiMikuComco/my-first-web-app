function fizzbuzz(n) {
  // ここにコードを書いてください
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// 注意：以下のコードは削除しないでください
if (import.meta.url === `file://${process.argv[1]}`) {
  // fizzbuzz 関数を試すためのコードです
  // 数値は任意で変更可能です
  fizzbuzz(30);
}

export default fizzbuzz;
