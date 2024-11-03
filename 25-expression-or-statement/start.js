/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// statement
15

// expr state
const myObject = {
  x: 10,
  y: true,
}

// expr
myObject.z = 'abc'

// state
delete myObject.x

//state
let newVariable

// expr
newVariable = 30 + 5

// state
console.log(newVariable)

// expr state
if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
}
