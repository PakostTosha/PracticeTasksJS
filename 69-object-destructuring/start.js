/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};

// console.log(objectWithNumbers)

// Создайте функцию здесь
// function mult(myObj) {
//   const {x, y, z} = myObj
//   return x * y * z;
// }

const mult = ({ x, y, z }) => {
  return x * y * z;
};

const result = mult(objectWithNumbers);
console.log(result);
// 300
