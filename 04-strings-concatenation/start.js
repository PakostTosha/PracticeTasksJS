/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const firstName = 'Anton';
const lastName = "Polyakov";
const profession = "IT-developer";

// Важное замечание - интерполяция строк не работает с "", '', только с ``
const output = `Меня зовут ${firstName} ${lastName} и я ${profession}.`
console.log(output)