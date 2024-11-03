/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

// Если функцию объявляем при помощи ключевого слова "function"
// function meanScore() {
//   // arguments - объект с ключами 1, 2, 3 и т.д.
//   let sum = 0;
//   for (arg in arguments) {
//     if (typeof arguments[arg] != "number") {
//       return "Все аргументы в вызове функции должны быть числами!";
//     }
//     sum += arguments[arg];
//   }
//   const meanScoreValue = Number((sum / arguments.length).toFixed(2));
//   return meanScoreValue;
// }

// Если функцию объявляем при помощи стрелочной функции
const meanScore = (...arguments) => {
  // arguments - экземпляр класса Array
  let sum = 0;
  // Метод for ... of
  // for (let arg of arguments) {
  //   if (typeof arg != "number") {
  //     return "Все аргументы в вызове функции должны быть числами!";
  //   }
  //   sum += arg;
  // }

  // Метод reduce
  let isNaN = false;
  // const meanScoreValue = Number((sum / arguments.length).toFixed(2));
  const res = Number(
    (
      arguments.reduce((prevValue, curValue) => {
        if (typeof curValue != "number") {
          isNaN = true;
        } else {
          return prevValue + curValue;
        }
      }, 0) / arguments.length
    ).toFixed(2)
  );
  
  return (
    (isNaN && "Все аргументы в вызове функции должны быть числами!") || res
  );
};

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

console.log(meanScore(...scores1));
// // 1.93

console.log(meanScore(...scores1, ...scores2));
// // // 2.8

console.log(meanScore(...scores1, ...scores2, ...scores3));
// // // 2.59

console.log(meanScore(...scores1, ...scores2, ...scores3, ...scores4));
// // // Все аргументы в вызове функции должны быть числами!
