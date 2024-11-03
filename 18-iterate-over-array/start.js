/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

const myArr = [
    15,
    "string",
    false,
    null
]

console.log("--map--")
myArr.map(item => console.log(item))
console.log("--forEach--")
myArr.forEach(item=>console.log(item))