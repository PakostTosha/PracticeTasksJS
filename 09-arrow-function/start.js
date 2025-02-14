/** ЗАДАЧА 9 - Стрелочная функция
 *
 * 1. Объявите переменную и присвойте ей стрелочную функцию
 *
 * 2. У функции не должно быть параметров
 *
 * 3. Явно верните из функции строку "Привет, мир!"
 *
 * 4. Вызовите функцию и выведите результат в консоль
 *
 * 5. Перепишите функцию так, чтобы результат возвращался неявно
 */

// Явный возврат результата
const arrowFunc1 = () => {
    return "Привет, мир!";
};
console.log(arrowFunc1());

// Неявный возврат результата
const arrowFunc2 = () => "Привет, мир!";
console.log(arrowFunc2());