import { Console } from '@woowacourse/mission-utils';
import { Validator } from './Validator.js';

class App {
  async run() {
    const inputString = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');

    try {
      const { delimiter, numbersPart } = Validator(inputString);
      const regex = new RegExp(delimiter);

    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
