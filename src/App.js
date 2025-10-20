import { Console } from '@woowacourse/mission-utils';
import { Validator } from './Validator.js';

class App {
  async run() {
    const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

      const { delimiter, numbersPart } = Validator(inputString);
      const regex = new RegExp(delimiter);
      const numbers = numbersPart.split(regex).map(Number);
      
      if (numbers.some((n) => n <= 0 || isNaN(n))) {
        throw new Error('[ERROR] 0 또는 음수를 입력할 수 없습니다.');
      }

      const sum = numbers.reduce((acc, cur) => acc + cur, 0);
      Console.print(`결과 : ${sum}`);
  }
}

export default App;
