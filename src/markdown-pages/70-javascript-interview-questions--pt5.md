---
path: "/blog/70-javascript-interview-questions-pt5"
date: "2020-04-12"
title: "70 вопросов по JavaScript для собеседования"
subTitle: "Часть 5."
tags: ["translate", "javascript"]
featuredImage: ../images/blog-posts/js5.jpg
imageAuthor: "Paweł Czerwiński"
imageAuthorLink: https://unsplash.com/@pawel_czerwinski"
prevPostName: "Часть 4"
prevPostLink: "/blog/70-javascript-interview-questions-pt4"
nextPostName: "Часть 6"
nextPostLink: "/blog/70-javascript-interview-questions-pt6"
---

Оригинал статьи [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)

- [Часть 1](https://marsdev.ru/blog/70-javascript-interview-questions-pt1)

- [Часть 2](https://marsdev.ru/blog/70-javascript-interview-questions-pt2)

- [Часть 3](https://marsdev.ru/blog/70-javascript-interview-questions-pt3)

- [Часть 4](https://marsdev.ru/blog/70-javascript-interview-questions-pt4)

- [Часть 6](https://marsdev.ru/blog/70-javascript-interview-questions-pt6)

- [Часть 7](https://marsdev.ru/blog/70-javascript-interview-questions-pt7)

###41. Что нового добавилось в ES6 или ECMAScript 2015?

- Стрелочные функции (Arrow Functions)
- Классы
- Шаблон строки (Template Strings)
- Расширенные объектные литералы (Enhanced Object literals)
- Деструктуризация объектов
- Промисы
- Генераторы
- Модули
- Символы
- Прокси (Proxies)
- Сеты (Sets)
- Параметры функции по умолчанию
- Rest и Spred операторы
- Область видимости блока с **let** и **const**

###42. В чем разница между ключевыми словами var, let и const?

Переменные, объявленные с помощью **var**, принадлежат области видимости функции. Это значит, что такие переменные доступны во всем теле функции, даже если они объявлены внутри блока.

```javascript
function giveMeX(showX) {
  if (showX) {
    var x = 5
  }
  return x
}

console.log(giveMeX(false))
console.log(giveMeX(true))
```

Первое **console.log** выведет **undefined**, а второе **5**. У нас есть доступ к переменной **x** потому, что она _всплыла_ наверх функции. Наша функция интерпретируется так

```javascript
function giveMeX(showX) {
  var x // значение по умолчанию undefined
  if (showX) {
    x = 5
  }
  return x
}
```

Если вас удивляет, почему в первом **console.log** выводится **undefined**, то вспомните, что объявленнные переменные, не имеющие присвоенных значений, имеют значение по умолчанию, равное **undefined**.

Переменные, объявленные ключевымисловами **let** и **const**, имеют _блочную_ область видимости. Это значит, что переменная может быть доступна только внутри блока **{}**, в котором мы ее объявили.

```javascript
function giveMeX(showX) {
  if (showX) {
    let x = 5
  }
  return x
}

function giveMeY(showY) {
  if (showY) {
    let y = 5
  }
  return y
}
```

Если мы вызовем эти функции с переданным аргументом, равным **false**, то выведется ошибка **Reference Error**. Это произойдет потому, что у нас нет доступа к переменным **x** и **y** вне блока и они не _всплывают_.

Также, существует разница между **let** и **const**. Мы можем присваивать новые значения переменным, объявленным с помощью **let**. Но не можем делать этого с переменными, объявленными с помощью **const**. Но при этом, **const** не означает, что присвоенное значение является неизменяемым. Это значит, что если значением является объект, то мы можем изменять свойства этого объекта, но мы не можем переназначить новое значение к переменной.

###43. Что такое стрелочные функции (Arrow Funcitons)?

**Стрелочные функции** - это новый способ создания функций в JavaScript. Стрелочные функции создаются быстрее, чем функциональные выражения (function expression), поскольку в стрелочных функциях не применяется ключевое слово **function**. В целом синтаксис становится чище.

```javascript
//ES5
var getCurrentDate = function() {
  return new Date()
}

//ES6
const getCurrentDate = () => new Date()
```

В версии ES5 имеется выражение **function(){}** и ключевое слово **return**, необходимые для создания функции и возврата значения соответственно. В **стрелочной функции** нам нужны только круглые скобки **()** и нам не нужен оператор **return**, потому что **стрелочные функции** имеют неявный возврат, если у нас есть только одно выражение или значение для возврата.

```javascript
//ES5
function greet(name) {
  return "Hello " + name + "!"
}

//ES6
const greet = name => `Hello ${name}`
const greet2 = name => `Hello ${name}`
```

Точно также, как и в **function expressions** и в **function declarations**, в **стрелочных функциях** мы можем добавлять параметры функции. Если у нас только один параметр, то мы можем опустить скобки.

```javascript
const getArgs = () => arguments

const getArgs2 = (...rest) => rest
```

У стрелочной функции нет доступа к объекту **arguments**. Таким образом, вызов первой функции **getArgs** вызовет ошибку. Мы можем исправить это используя **rest** параметры.

```javascript
const data = {
  result: 0,
  nums: [1, 2, 3, 4, 5],
  computeResult() {
    // "this" ссылается на объект "data"
    const addAll = () => {
      // стрелочная функция "копирует" значение "this"
      // в ближайшем лексическом окужении функции
      return this.nums.reduce((total, cur) => total + cur, 0)
    }
    this.result = addAll()
  },
}
```

У **стрелочных функций** нет собственного значения **this**. Они _захватывают_ значение **this** в ближайшем лексическом окужении функции. В примере выше, функция **addAll** копирует значение **this** метода **computeResult** и если мы объявили стрелочную функцию в глобальном окружении - значением **this** должен быть объект **window**.

###44. Что такое классы в JavaScript?

**Классы** - это новый способ записи функций-конструкторов в JavaScript. Это _синтаксический сахар_ для функций-конструкторов. Под капотом у классов все еще **прототипы** и основанное на прототипах наследование.

```javascript
//ES5
function Person(firstName, lastName, age, address) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.address = address
}

Person.self = function() {
  return this
}

Person.prototype.toString = function() {
  return "[object Person]"
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName
}

//ES6
class Person {
  constructor(firstName, lastName, age, address) {
    this.lastName = lastName
    this.firstName = firstName
    this.age = age
    this.address = address
  }

  static self() {
    return this
  }

  toString() {
    return "[object Person]"
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
```

**Переопределение методов** и **наследование от другого класса**.

```javascript
//ES5
Employee.prototype = Object.create(Person.prototype)

function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {
  Person.call(this, firstName, lastName, age, address)
  this.jobTitle = jobTitle
  this.yearStarted = yearStarted
}

Employee.prototype.describe = function() {
  return `I am ${this.getFullName()} and I have a position of ${
    this.jobTitle
  } and I started at ${this.yearStarted}`
}

Employee.prototype.toString = function() {
  return "[object Employee]"
}

//ES6
class Employee extends Person {
  // Наследуется от класса "Person"
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address)
    this.jobTitle = jobTitle
    this.yearStarted = yearStarted
  }

  describe() {
    return `I am ${this.getFullName()} and I have a position of ${
      this.jobTitle
    } and I started at ${this.yearStarted}`
  }

  toString() {
    // Переопределение метода "toString" класса "Person"
    return "[object Employee]"
  }
}
```

Так каким образом мы можем понять, что под капотом используются _прототипы_?

```javascript
class Something {}

function AnotherSomething() {}
const as = new AnotherSomething()
const s = new Something()

console.log(typeof Something) // выводит "function"
console.log(typeof AnotherSomething) // выводит "function"
console.log(as.toString()) // выводит "[object Object]"
console.log(as.toString()) // выводит "[object Object]"
console.log(as.toString === Object.prototype.toString)
console.log(s.toString === Object.prototype.toString)
// оба выводят true, что говорит о том, что мы все еще
// использует прототипы под капотом, потому что Object.prototype -
// последняя часть цепочки прототипов и оба "Something"
// и "AnotherSomething" наследуются Object.prototype
```

###45. Что такое шаблонные литералы (Template Literals)?

**Шаблонные литералы** - это новый способ создания строк в JavaScript. Мы можем создавать шаблонные литералы при помощи обратных кавычек.

```javascript
//ES5
var greet = "Hi I'm Mark"

//ES6
let greet = `Hi I'm Mark`
```

В версии ES5 нам нужно экранитовать кавычку **'**, чтобы сохранить нормальную функциональность этого знака, в данном случае это обозначение конца строки. В шаблонных литералах нам не нужно этого делать.

```javascript
//ES5
var lastWords = "\n" + "   I  \n" + "   Am  \n" + "Iron Man \n"

//ES6
let lastWords = `
    I
    Am
  Iron Man   
`
```

В версии ES5 нам нужно добавлять **\n**, чтобы добавить переход строки. В шаблонных литералах нам это не нужно.

```javascript
//ES5
function greet(name) {
  return "Hello " + name + "!"
}

//ES6
function greet(name) {
  return `Hello ${name} !`
}
```

В версии ES5, если нам нужно добавить в строку выражение (значение переменной), то нам нужно использовать оператор **+** для конкатенации строки. В шаблонных литералах нам достаточно использовать **\${expr}** для внедрения выражения в строку. Это делает код _чище_, чем в версии ES5.

###46. Что такое деструктуризация объекта (Object Destructuring)?

**Деструктуризация объекта** - это новый и более чистый (изящный) способ получения или извлечения значений из объекта или массива.

Допустим у нас есть следующий объект.

```javascript
const employee = {
  firstName: "Marko",
  lastName: "Polo",
  position: "Software Developer",
  yearHired: 2017,
}
```

Раньше, для того чтобы получить свойства объекта, нам нужно было создать переменные с теми же именами, что и свойства объекта. Это довольно неудобный способ, поскольку нам нужно создавать новые переменные для каждого свойства объекта. Представьте насколько раздражительным было извлечение свойств из огромного объекта.

```javascript
var firstName = employee.firstName
var lastName = employee.lastName
var position = employee.position
var yearHired = employee.yearHired
```

При использовании **деструктуризации объекта** код более чистый и пишется гораздо быстрее. Синтаксис следующий - мы используем **{}** для деструктуризации объекта и помещаем внутри фигурных скобок те свойства, которые хотим извлечь из объекта. В случае, если нам нужно извлечь значения из массива - мы используем **[]**.

```javascript
let { firstName, lastName, position, yearHired } = employee
```

Если мы хотим изменить имя извлекаемой переменной, то мы используем следующий синтаксис - **propertyName:newName**. В следующем примере переменная **fName** сохранит значение переменной **firstName**, а переменная **lName** сохранит значение переменной **lastName**.

```javascript
let { firstName: fName, lastName: lName, position, yearHired } = employee
```

Мы можем назначить значение по умолчанию при деструктуризации. В следующем примере, если значение переменной **firstName** будет **undedined**, то при деструктуризации, эта переменная получит значение по умолчанию **"Mark"**.

```javascript
let { firstName = "Mark", lastName: lName, position, yearHired } = employee
```

###47. Что такое модули ES6?

**Модули** позволяют нам разбивать наш код на множество файлов для большей поддерживаемости. Это позволяет нам избегать одного огромного файла с кодом. До внесения модулей в ES6 было два способа разбивать код на отдельные файлы:

- CommonJS для **Nodejs**

- AMD (Asynchronous Module Definition) для браузеров.

По своей сути, синтаксис создания модулей достаточно очевидный. **import** предназначен для получения _функциональности_ из другого файла, тогда как **export** используется для _экспорта_ функциональности из файла.

**Экспорт функциональности в файл или именнованный экспорт**

_ES5 (CommonJS)_

```javascript
// ES5 CommonJS - helpers.js
exports.isNull = function(val) {
  return val === null
}

exports.isUndefined = function(val) {
  return val === undefined
}

exports.isNullOrUndefined = function(val) {
  return exports.isNull(val) || exports.isUndefined(val)
}
```

_ES6 модули_

```javascript
// ES6 модули - helpers.js
export function isNull(val) {
  return val === null
}

export function isUndefined(val) {
  return val === undefined
}

export function isNullOrUndefined(val) {
  return isNull(val) || isUndefined(val)
}
```

**Импорт функциональности в файл**

```javascript
// ES5 (CommonJS) - index.js
const helpers = require("./helpers.js") // helpers это объект
const isNull = helpers.isNull
const isUndefined = helpers.isUndefined
const isNullOrUndefined = helpers.isNullOrUndefined

// или если окружение позволяет деструктуризацию
const { isNull, isUndefined, isNullOrUndefined } = require("./helpers.js")
```

```javascript
// ES6 модули - index.js
import * as helpers from "./helpers.js" // helpers это объект

// или

import { isNull, isUndefined, isNullOrUndefined as isValid } from "./helpers.js"

// использование "as" для переименования именованного экспорта
```

**Экспорт одной функциональности (функции) в файл или экспорт по умолчанию**

_ES5 (CommonJS)_

```javascript
// ES5 (CommonJS) - index.js
class Helpers {
  static isNull(val) {
    return val === null
  }

  static isUndefined(val) {
    return val === undefined
  }

  static isNullOrUndefined(val) {
    return this.isNull(val) || this.isUndefined(val)
  }
}

module.exports = Helpers
```

_ES6 модули_

```javascript
// ES6 модули - helpers.js
class Helpers {
  static isNull(val) {
    return val === null
  }

  static isUndefined(val) {
    return val === undefined
  }

  static isNullOrUndefined(val) {
    return this.isNull(val) || this.isUndefined(val)
  }
}

export default Helpers
```

**Импорт одной функциональности (функции) из другого файла**

_ES5 (CommonJS)_

```javascript
// ES5 (CommonJS) - index.js
const Helpers = require("./helpers.js")
console.log(Helpers.isNull(null))
```

_ES6 модули_

```javascript
import Helpers from ".helpers.js"
console.log(Helpers.isNull(null))
```

Это основы использования **модулей ES6**. Я не смогу описать всю тему модулей, поскольку она слишком обширна, а эта статья и так уже довольгл большая.

###48. Что такое объект Set (набор) и как он работает?

Объект **Set** это дополнение ES6, позволяющее хранить уникальные значения, **примитивные** значения или **ссылки на объекты**. Значение в **Set** может помещаться только один раз. Проверка уникальности значения в Set проводится с помощью алгоритма **SameValueZero**

Мы можем создать **Set** при помощи конструктора **Set** и мы можем добавить в качестве параметра **итерируемый объект (Iterable)**.

```javascript
const set1 = new Set()
const set2 = new Set(["a", "b", "c", "d", "d", "e"])
```

Мы можем добавить новое значение в инстанс **Set** с помощью метода **add** и так как этот метод возвращает объект **Set** - мы можем создавать цепочку из методов **add**. Если значение уже находится в **Set**, то оно не будет вновь добавлено в него.

```javascript
set2.add("f")
set2
  .add("g")
  .add("h")
  .add("i")
  .add("j")
  .add("k")
  .add("k")
// последнее "k" не будет добавлено в объект set, потому что оно уже там присутствует
```

Мы можем удалить значение из **Set** с помощью метода **delete**. Этот метод возвращает булево значение (true или false) в зависимости от того, присутствует ли значение в **Set**.

```javascript
set2.delete("k") // возвращает true потому что "k" присутствует
set2.delete("z") // возвращает false потому что "z" отсутствует
```

Мы можем проверить наличие определенного значения в **Set** с помощью метода **has**.

```javascript
set2.has("a") // возвращает true потому что "a" присутствует
set2.has("z") // возвращает false потому что "z" отсутствует
```

Мы можем получить длину **Set** с помощью свойства **size**.

```javascript
set2.size // возвращает 10
```

Мы можем удалить все элементы **Set** с помощью метода **clear**.

```javascript
set2.clear() // очищает данные set
```

Мы можем использовать **Set** для удаление дублирующих элементов массива.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5]
const uniqueNums = [...new Set(numbers)] // теперь [1,2,3,4,5,6,7,8]
```

###49. Что такое функция обратного вызова (Callback function)?

**Функция обратного вызова** - это функция, которая будет вызвана позднее.

```javascript
const btnAdd = document.getElementById("btnAdd")

btnAdd.addEventListener("click", function clickCallback(e) {
  // делает что-то
})
```

В этом примере мы ожидаем событие **click** на элементе с id равным **btnAdd**. При клике произойдет выполнение функции **clickCallback**. **Функция обратного вызова** добавляет определенную функциональность к определенным данным или событию. Методы массива **reduce**, **map** и **filter** ожидают **функцию обратного вызова** в качестве. Неплохии примером является работа автоответчика. Когда вы звоните кому то, и вам не отвечают, то вы оставляете сообщение с просьбой перезвонить, и вам **перезванивают (callback)**. Само действие в виде звонка или оставления сообщения является **событием или данными**, а **перезвон (callback)** - действием, которое ожидается в будущем.

###50. Что такое Promises (Промисы)?

**Промисы** - это один из способов работы с асинхронным кодом в JavaScript. Промисы отражают значение асинхронных операций. Они были созданы для решения проблемы работы с асинхронным кодом. До внедрения промисов для этого использовались **функции обратного вызова (callbacks)**.

```javascript
fs.readFile("somefile.txt", function(e, data) {
  if (e) {
    console.log(e)
  }
  console.log(data)
})
```

Проблема этого подхода в том, что если у нас будет еще одна асинхронная операция внутри функции обратного вызова, и еще одна, то это сделает код очень некрасивым и крайне трудно читаемым. Это называется **адом колбэков (Callback Hell)**.

```javascript
// Callback Hell
fs.readFile("somefile.txt", function(e, data) {
  // какой-то код
  fs.readdir("directory", function(e, files) {
    // какой-то код
    fs.mkdir("directory", function(e) {
      // какой-то код
    })
  })
})
```

Если же мы будем использовать промисы, то это сделает наш код более читаемым, понимаемым и поддерживаемым.

```javascript
promReadFile("file/path")
  .then(data => {
    return promReaddir("directory")
  })
  .then(data => {
    return promMkdir("directory")
  })
  .catch(e => {
    console.log(e)
  })
```

Промисы имеют три различных состояния.

**В Ожидании (Pending)** - Это начальное состояние промиса. Результат промиса пока не известен, поскольку операция еще не завершена.

**Исполнено (Fulfilled)** - асинхронная операция завершена успешно и результирующее значение существует.

**Отклонено (Rejected)** - асинхронная операция провалилась и есть причина, почему это произошло.

**Устаявшееся (Settled)** - когда асинхронная операция или **исполнена**, или **отклонена**.

Конструктор **Promise** имеет два параметра, которые являются функциями **resolve (разрешено или исполнено)** и **reject (отклонено)** соответственно. Если асинхронная операция завершена без ошибок - вызывается функция **resolve** для исполнения промиса. Если же произошла ошибка - вызывается функция **reject** и возвращается ошибка, в которой описана причина произошедшего. Мы можем получить доступ к результату выполненного промиса с помощью метода **then**, мы можем "перехватывать" ошибки при помощи метода **catch**. Мы можем совершать несколько асинхронных операций путем создания цепочки промисов при помощи метода **then**, потому что метод **then** возвращает **промис**. Смотри на код внизу.

```javascript
const myPromiseAsync = (...args) => {
  return new Promise((resolve, reject) => {
    doSomeAsync(...args, (error, data) => {
      if (error) {
        reject(error)
      } else {
        resolve(data)
      }
    })
  })
}

myPromiseAsync()
  .then(result => {
    console.log(result)
  })
  .catch(reason => {
    console.log(reason)
  })
```

Мы можем создать вспомогательную функцию, которая преобразует асинхронную операцию с обратным вызовом в **промис**. Это работает подобно служебной функции promisify из нодовской утилиты модуля **util**.

```javascript
const toPromise = asyncFuncWithCallback => {
  return (...args) => {
    return new Promise((res, rej) => {
      asyncFuncWithCallback(...args, (e, result) => {
        return e ? rej(e) : res(result)
      })
    })
  }
}

const promReadFile = toPromise(fs.readFile)

promReadFile("file/path")
  .then(data => {
    console.log(data)
  })
  .catch(e => console.log(e))
```
