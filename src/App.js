import { Console } from '@woowacourse/mission-utils';

class App {
  async run() {
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    let delimeters = [",", ":"];

    // 커스텀 구분자 지정
    if (input.startsWith("//")) {
      const end = input.indexOf("\\n");
      delimeters = input.slice(2,end);
    }
    
    Console.print(delimeters);
  }
}

export default App;
