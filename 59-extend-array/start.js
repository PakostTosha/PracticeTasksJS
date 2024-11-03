/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
  sum() {
    return this.reduce((prevVal, currVal) => prevVal + currVal);
  }
  onlyNumbers() {
    let arr = [];
    this.forEach((v) => (typeof v === "number" ? arr.push(v) : false));
    return arr
  }
}

const myArr1 = new ExtendedArray(1, 2, 3);
console.log(myArr1);
console.log(myArr1.sum());

const myArr2 = new ExtendedArray(1, 2, true, 3, 'abc', 5)
console.log(myArr2);
console.log(myArr2.onlyNumbers());

myArr2.forEach(v => console.log(v))