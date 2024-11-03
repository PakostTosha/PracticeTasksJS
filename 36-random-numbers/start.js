/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number} Return random number includes min, max
 */
// Функция генерации числа в заданном диапазоне
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 *
 * @param {array} array
 * @returns {array} Return array with a new unique random number
 */
// Добавление случайного уникального числа с возвратом массива
const pushUniqNumber = (array, min, max) => {
  let newNumber;
  while (true) {
    newNumber = randomNumber(min, max);
    if (array.includes(newNumber)) {
      console.log(
        `Сгенерированное число ${newNumber} уже содержится в массиве ${array}`
      );
    } else {
      console.log(
        `Сгенерированное число ${newNumber} уникально и будет добавлено в массив ${array}`
      );
      break;
    }
  }
  array.push(newNumber);
  return array;
};

console.log(pushUniqNumber(myNumbers, MIN, MAX));
