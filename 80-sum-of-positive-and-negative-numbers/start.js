/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Создайте функцию "sumPositiveNegative" здесь
function sumPositiveNegative(numArray){
    // const numStat = {
    //     positive: 0,
    //     negative: 0
    // }

    // numArray.forEach(element => {
    //     if (element > 0) numStat.positive += element
    //     else if (element < 0) numStat.negative += element
    // });

    // return numStat

    let positive = 0
    let negative = 0

    numArray.forEach(element => {
        if (element > 0) positive += element
        else if (element < 0) negative += element
    });

    return {
        positive,
        negative
    }
}

const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
