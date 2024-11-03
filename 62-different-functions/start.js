/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// Можно вызывать функцию до её объявления в коде
firstFunction(2, 3);

function firstFunction(a, b) {
  return a + b;
}

// Нельзя вызвать до объявления
try {
  secondFunction(2, 3);
} catch {
  console.log("Ошибка")
}
const secondFunction = function (a, b) {
  return a + b;
};

console.log(firstFunction(2, 2), secondFunction(2, 2));