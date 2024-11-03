/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ["London", "New York", "Singapore"];
const cityInfo = (city, index) => {
  return `${city} is at the index ${index} in the myCities array`;
};
console.log(cityInfo("London", 0));

for (let i = 0; i < myCities.length; i++) {
  console.log(cityInfo(myCities[i], i));
}
