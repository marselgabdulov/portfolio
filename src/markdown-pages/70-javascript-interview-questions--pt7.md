---
path: "/blog/70-javascript-interview-questions-pt7"
date: "2020-04-14"
title: "70 вопросов по JavaScript для собеседования"
subTitle: "Часть 7."
tags: ["translate", "javascript"]
featuredImage: ../images/blog-posts/js7.jpg
imageAuthor: "Paweł Czerwiński"
imageAuthorLink: "https://unsplash.com/@pawel_czerwinski"
prevPostName: "Часть 6"
prevPostLink: "/blog/70-javascript-interview-questions-pt6"
nextPostName: "Часть 1"
nextPostLink: "/blog/70-javascript-interview-questions-pt1"
---

Оригинал статьи [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)

- [Часть 1](https://marsdev.ru/blog/70-javascript-interview-questions-pt1)

- [Часть 2](https://marsdev.ru/blog/70-javascript-interview-questions-pt2)

- [Часть 3](https://marsdev.ru/blog/70-javascript-interview-questions-pt3)

- [Часть 4](https://marsdev.ru/blog/70-javascript-interview-questions-pt4)

- [Часть 5](https://marsdev.ru/blog/70-javascript-interview-questions-pt5)

- [Часть 6](https://marsdev.ru/blog/70-javascript-interview-questions-pt6)

###61. Какие способы создания объекта есть в Javascript?

Использование **литерала объекта ( Object Literal)**.

```javascript
const o = {
  name: "Mark",
  greeting() {
    return `Hi, I'm ${this.name}`
  },
}

o.greeting() // вернет "Hi, I'm Mark"
```

Использование **функции конструктора**.

```javascript
function Person(name) {
  this.name = name
}

Person.prototype.greeting = function() {
  return `Hi, I'm ${this.name}`
}

const mark = new Person("Mark")

mark.greeting() // вернет "Hi, I'm Mark"
```

Использование метода **Object.create**.

```javascript
const n = {
  greeting() {
    return `Hi, I'm ${this.name}`
  },
}

const o = Object.create(n) // назначит прототипом объекта "o" объект "n"

o.name = "Mark"

console.log(o.greeting()) // выведет "Hi, I'm Mark"
```

###62. В чем разница между методами Object.seal и Object.freeze?

Разница между этими двумя методами состоит в том, что при использовании метода **Object.freeze** на объекте, свойства этого объекта становятся неизменяемыми, то есть мы не можем изменять или редактировать значения этих свойств. Тогда как при использовании метода **Object.seal**, мы можем изменять существующие свойства объекта.

###63. В чем разница между оператором in и методом hasOwnProperty в объектах?

Как вы уже знаете, оба этих метода проверяют наличие определенного свойства в объекте. И оба возвращают **true** или **false**. Разница состоит в том, что метод **in** так же проверяет наличие свойства в цепочке прототипов, если это свойство не находится в искомом объекте, тогда как метод **hasOwnProperty** производит проверку только в данном конкретном объекте, игнорируя цепочку прототипов.

```javascript
// Тот же объект, что и в предыдущем вопросе
console.log("prop" in o) // выведет true;
console.log("toString" in o) // выведет true, метод toString доступен в прототипе этого объект, то есть в Object.prototype

console.log(o.hasOwnProperty("prop")) // выведет true
console.log(o.hasOwnProperty("toString")) // выведет false, не проверяя прототип объекта
```

###64. Способы работы с асинхронным кодом в JavaScript?

- **Функции обратного порядка (Callbacks)**

- **Промисы (Promises)**

- **async/await**

- Библиотеки вроде [async.js](https://caolan.github.io/async/v3/)[bluebird](http://bluebirdjs.com/docs/getting-started.html)[q](http://documentup.com/kriskowal/q/)[co](https://www.npmjs.com/package/co)

###65 В чем разница между function expression и function declaration?

Допустим у нас есть следующий пример

```javascript
hoistedFunc()
notHoistedFunc()

function hoistedFunc() {
  console.log("I am hoisted")
}

var notHoistedFunc = function() {
  console.log("I will not be hoisted!")
}
```

Вызов **notHoistedFunc** приведет к ошибке, тогда как вызов **hoistedFunc** не приведет, потому что функция **hoistedFunc** _всплывет_. Подробнее смотри вопрос номер 18.

###66.Сколькими способами может быть вызвана функция?

Функция в JavaScript может быть вызвана четырьмя способами. **Вызов** определяет значение **this** или "хозяина" объекта этой функции.

- **Вызов как функция** - если функция не вызвана в качестве метода, конструктора или с применением методов **apply** или **call**, то она **вызывается как функция**. "Хозяйским" объектом для такой функции будет объект **window**.

```javascript
// Глобальное окружение

function add(a, b) {
  console.log(this)
  return a + b
}

add(1, 5) // выведет объект "window" и вернет 6

const o = {
  method(callback) {
    callback()
  },
}

o.method(function() {
  console.log(this) // выведет объект "window"
})
```

- **Вызов как метод** - если свойство объекта имеет в качестве значения функцию, мы зовем ее **методом**. Когда этот **метод** вызывается, значением **this** для этого метода будет именно этот объект.

```javascript
const details = {
  name: "Marko",
  getName() {
    return this.name
  },
}

details.getName() // вернет Marko
// значением "this" внутри метода "getName" будет объект "details"
```

- **Вызов как конструктор** - если функция будет вызвана с помощью ключевого **new**, то она называется **функция-конструктор**. Будет создан пустой объект и **this** будет ссылаться на него.

```javascript
function Employee(name, position, yearHired) {
  // создается пустой объект {}
  // затем ключевому слову this присваивается пустой объект
  // this = {};
  this.name = name
  this.position = position
  this.yearHired = yearHired
  // наследутеся от Employee.prototype
  // возвращает значение "this" если
  // нет явного оператора return
}

const emp = new Employee("Marko Polo", "Software Developer", 2017)
```

- **Вызов с помощью методов apply и call** - если мы хотим явно указать значение **this** или "хозяйский" объект для функции, то мы можем использовать эти методы. Эти методы доступны для всех функций.

```javascript
const obj1 = {
  result: 0,
}

const obj2 = {
  result: 0,
}

function reduceAdd() {
  let result = 0
  for (let i = 0, len = arguments.length; i < len; i++) {
    result += arguments[i]
  }
  this.result = result
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // объектом "this" внутри функции "reduceAdd" будет "obj1"
reduceAdd.call(obj2, 1, 2, 3, 4, 5) // объектом "this" внутри функции "reduceAdd" будет "obj2"
```

###67. Что такое мемоизация и для чего она используется?

_мемоизация_ это процесс создания функций, способных запоминать их предыдущие вычисленные результаты или значения. Польза от функций мемоизации в том, что мы избегаем вычислений этих функций, если они уже были произведены до этого с теми же аргументами. Это сокращает время вычислений. В качестве недостатка можно назвать то, что будет использоваться больше памяти для сохранения результатов предыдущих вычислений.

###68. Реализация функции мемоизации

```javascript
function memoize(fn) {
  const cache = {}
  return function(param) {
    if (cache[param]) {
      console.log("cached")
      return cache[param]
    } else {
      let result = fn(param)
      cache[param] = result
      console.log(`not cached`)
      return result
    }
  }
}

const toUpper = (str = "") => str.toUpperCase()

const toUpperMemoized = memoize(toUpper)

toUpperMemoized("abcdef")
toUpperMemoized("abcdef")
```

Вспомогательная функция _memoize_ работает только с функцией, принимающей один аргумент. Нам нужно создать функцию _memoize_, принимающей множество аргументов.

```javascript
const slice = Array.prototype.slice

function memoize(fn) {
  const cache = {}
  return (...args) => {
    const params = slice.call(args)
    console.log(params)
    if (cache[params]) {
      console.log("cached")
      return cache[params]
    } else {
      let result = fn(...args)
      cache[params] = result
      console.log(`not cached`)
      return result
    }
  }
}
const makeFullName = (fName, lName) => `${fName} ${lName}`
const reduceAdd = (numbers, startingValue = 0) =>
  numbers.reduce((total, cur) => total + cur, startingValue)

const memoizedMakeFullName = memoize(makeFullName)
const memoizedReduceAdd = memoize(reduceAdd)

memoizedMakeFullName("Marko", "Polo")
memoizedMakeFullName("Marko", "Polo")

memoizedReduceAdd([1, 2, 3, 4, 5], 5)
memoizedReduceAdd([1, 2, 3, 4, 5], 5)
```

###69. Почему typeof null возвращает object? Как проверить, что значение является null?

**typeof null == 'object'** всегда возвращает **true** потому что это была первичная имплеметация объекта **null** в JavaScript. Было предложено изменить **typeof null == 'object'** на **typeof null == 'null'**, но это предложение было отклонено поскольку вело к возникновению слишком большого количества багов.

Мы можем использовать **===** или **оператор строгого равенства** для проверки того, что значение равно **null**.

```javascript
function isNull(value) {
  return value === null
}
```

###70. Что делает ключевое слово new?

Ключевое слово **new** применяется с функцией-конструктором для создания объектов в JavaScript.

Допустим у нас есть слудующий пример.

```javascript
function Employee(name, position, yearHired) {
  this.name = name
  this.position = position
  this.yearHired = yearHired
}

const emp = new Employee("Marko Polo", "Software Developer", 2017)
```

Ключевое слово **new** делает 4 вещи:

- Создает пустой объект.

- Присваивает этот объект значению **this**.

- Функция будет наследоваться от **functionName.prototype**.

- Возвращает **this** если не используется явный оператор возврата **return**.

В примере выше сперва создается пустой объект **{}**, затем значению **this** присваивается пустой объект **this = {}** и добавляются свойства к этому объекту **this**. Поскольку у нас нет явного оператора возврата **return** - автоматически позвращается объект **this**.
