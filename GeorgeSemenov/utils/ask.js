//Задаёт вопрос, возвращает ответ. Всё просто.
const readline = require('readline-sync');
const _ask = function (question="Create/select block: "){//Задаём вопрос
  let answer = readline.question(`${question}`);
  return answer;
};

module.exports = _ask;