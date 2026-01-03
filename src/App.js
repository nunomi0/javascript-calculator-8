import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");
    
    let delimeters = [",", ":"];
    let numbersPart = input;

    // 커스텀 구분자 지정
    if (input.startsWith("//")) {
      const end = input.indexOf("\\n");
      delimeters = [input.slice(2,end)];
      numbersPart = input.slice(end+2);
    }

    // 숫자 파싱
    let i = 0;
    let cur = "";
    const numbers = [];

    while (i<numbersPart.length){
      if ("0"<=numbersPart[i] && numbersPart[i]<="9"){
        cur+=numbersPart[i];
        i++;
      }
      else {
        let matched = false;
        for (const d of delimeters){
          if (numbersPart.startsWith(d,i)){
            if (cur==="") throw new Error("[ERROR] 올바른 형식이 아닙니다");
            numbers.push(Number(cur));
            cur="";
            i+=d.length;
            matched = true;
            break;
          }
        }
        if (!matched) throw new Error("[ERROR] 올바른 형식이 아닙니다");
      }
    }
    numbers.push(Number(cur));
    Console.print(numbers);
  }
}

export default App;
