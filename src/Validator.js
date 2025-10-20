export function Validator(inputString) {
    let delimiter = '[,:]';
    let numbersPart = inputString;
    let escapedDelimiter = delimiter;
  
    if (inputString.startsWith('//')) {
      if (!inputString.includes('\\n')) {
        throw new Error('[ERROR] 커스텀 구분자를 올바르게 입력하세요.');
      }
  
      const endIndex = inputString.indexOf('\\n');
      const customDelimiter = inputString.slice(2, endIndex);
  
      if (/\d/.test(customDelimiter)) {
        throw new Error('[ERROR] 커스텀 구분자에 숫자는 사용할 수 없습니다.');
      }
  
      delimiter = customDelimiter;
      numbersPart = inputString.slice(endIndex + 2);
      escapedDelimiter = delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  
    const pattern = new RegExp(`^\\d+(?:${escapedDelimiter}\\d+)*$`);
  
    if (!pattern.test(numbersPart)) {
      throw new Error('[ERROR] 구분자 외의 다른 문자가 포함되었거나 형식이 올바르지 않습니다.');
    }
  
    return { delimiter, numbersPart };
  }