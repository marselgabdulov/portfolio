---
path: "/blog/70-javascript-interview-questions-pt4"
date: "2020-04-11"
title: "70 вопросов по JavaScript для собеседования"
subTitle: "Часть 4."
tags: ["translate", "javascript"]
featuredImage: ../images/blog-posts/js4.jpg
imageAuthor: "Paweł Czerwiński"
imageAuthorLink: "https://unsplash.com/@pawel_czerwinski"
prevPostName: "Часть 3"
prevPostLink: "/blog/70-javascript-interview-questions-pt3"
nextPostName: "Часть 5"
nextPostLink: "/blog/70-javascript-interview-questions-pt5"
---

Оригинал статьи [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)

- [Часть 1](https://marsdev.ru/blog/70-javascript-interview-questions-pt1)

- [Часть 2](https://marsdev.ru/blog/70-javascript-interview-questions-pt2)

- [Часть 3](https://marsdev.ru/blog/70-javascript-interview-questions-pt3)

- [Часть 5](https://marsdev.ru/blog/70-javascript-interview-questions-pt5)

- [Часть 6](https://marsdev.ru/blog/70-javascript-interview-questions-pt6)

- [Часть 7](https://marsdev.ru/blog/70-javascript-interview-questions-pt7)

###31. Что такое функциональное программирование и какие особенности JavaScript позволяют считать его функциональным языком?

**Функциональное программирование** это парадигма или паттерн декларативного программирования, по которой мы строим наши приложения с помощью функций, которые высчитывают значение без изменения аргументов, переданных в функцию.

Методы массивов JavaScript **map**, **filter** и **reduce** являются самыми известными функциями в функциональном программировании из-за своей полезности и потому, что они не меняют массивы. Это делает эти функции **чистыми**. Также, в JavaScript есть **замыкания** и **функции высшего порядка**, что является признаком **функционального языка**.

- Метод **map** создает новый массив с результатами высова callback функции на каждом элементе массива.

```javascript
const words = ["Functional", "Procedural", "Object-Oriented"]

const wordsLength = words.map(word => word.length)
```

- Метод **filter** создает новый массив, со всеми элементами, удавлетворяющими проверку в callback функции.

```javascript
const data = [
  { name: "Mark", isRegistered: true },
  { name: "Mary", isRegistered: false },
  { name: "Mae", isRegistered: true },
]

const registeredUsers = data.filter(user => user.isRegistered)
```

- Метод **reduce** применяет функцию к аккумулятору и к каждому элементу массива (слева направо), пока не уменьшит результат до одного значения.

```javascript
const strs = ["I", " ", "am", " ", "Iron", " ", "Man"]
const result = strs.reduce((acc, currentStr) => acc + currentStr, "")
```

###32. Что такое функции высшего порядка (Higher Order Functions)?

**Функции высшего порядка** это такие функции, которые могут возвращать функции или могут принимать одну или более функций в качестве аргументов.

```javascript
function higherOrderFunction(param, callback) {
  return callback(param)
}
```

###33. Почему функции считаются объектами первого класса (First-class Objects)?

Функции в JavaScript являются **объектами первого класса**, потому что они обрабатываются как любое другое значение в языке. Они могут быть назначены переменным, они могут быть свойствами объекта, которые называются методами, они могут быть элементом в массиве, они могут быть переданы в качестве аргументов функции, и они могут быть возвращены в качестве значений функции. Единственная разница между функцией и любым другим значением в JavaScript заключается в том, что функции могут вызываться или исполняться.

###34. Собственная реализация метода Array.prototype.map.

```javascript
function map(arr, mapCallback) {
  // Сперва мы проверяем правильность переданных аргументов
  if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== "function") {
    return []
  } else {
    let result = []
    // Мы создаем массив result каждый раз, когда мы вызываем эту функцию
    // потому что мы не хотим менять оригинальный массив
    for (let i = 0, len = arr.length; i < len; i++) {
      result.push(mapCallback(arr[i], i, arr))
      // вносим результат выполнения mapCallback в массив 'result'
    }
    return result // возвращаем массив result
  }
}
```

Определение метода **Array.prototype.map** от **MDN**

Метод **map** создает новый массив с результатами вызова переданной функции на каждом элементе переданного массива.

###35. Собственная реализация метода Array.prototype.filter.

```javascript
function filter(arr, filterCallback) {
  // Сперва мы проверяем правильность переданных аргументов
  if (
    !Array.isArray(arr) ||
    !arr.length ||
    typeof filterCallback !== "function"
  ) {
    return []
  } else {
    let result = []
    // Мы создаем массив result каждый раз, когда мы вызываем эту функцию
    // потому что мы не хотим менять оригинальный массив
    for (let i = 0, len = arr.length; i < len; i++) {
      // проверяем возвращаемое функцие1 filterCallback значение на "правдивость"
      if (filterCallback(arr[i], i, arr)) {
        // вносим текущее значение в массив result, если оно "правдиво
        result.push(arr[i])
      }
    }
    return result // возвращаем массив result
  }
}
```

Определение метода **Array.prototype.filter** от **MDN**

Метод **filter** создает новый массив со всеми элементами, которые прошли проверку, выраженную в переданной функции.

###36. Собственная реализация метода Array.prototype.reduce.

```javascript
function reduce(arr, reduceCallback, initialValue) {
  // Сперва мы проверяем правильность переданных аргументов
  if (
    !Array.isArray(arr) ||
    !arr.length ||
    typeof reduceCallback !== "function"
  ) {
    return []
  } else {
    // если initialValue не был передан в функцию, мы должны использовать
    let hasInitialValue = initialValue !== undefined
    let value = hasInitialValue ? initialValue : arr[0]
    // первый элемент массива в качестве initialValue

    // затем мы начинаем цикл с индекса 1, если initialValue не был передан
    // или с 0, если initialValue был передан
    for (let i = hasInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
      // Затем для каждой итерации мы присваиваем
      // результат ReduCallback к значению переменной
      value = reduceCallback(value, arr[i], i, arr)
    }
    return value
  }
}
```

Определение метода **Array.prototype.reduce** от **MDN**

Метод **reduce** выполняет функцию reduce для каждого элемента массива, в результате чего на выходе получается одно значение.

###37. Что такое агументы объекта?

Объект **arguments** представляет собой набор значение параметров, переданных в функцию. Это объект похож на массив - у него есть длина и мы можем получить доступ к его элементам, обратившись к их индексам. Но у него нет встроенных методов массива **forEach**, **reduce**, **filter** и **map**. Этот объект полезен, когда нужно узнать количество аргументов, переданных в функцию.

Мы можем конвертировать объект **arguments** в массив при помощи метода **Array.prototype.slice**.

```javascript
function one() {
  return Array.prototype.slice.call(arguments)
}
```

Примечание: **объект arguments не работает в стрелочных функциях ES6**

```javascript
function one() {
  return arguments
}
const two = function() {
  return arguments
}
const three = function three() {
  return arguments
}

const four = () => arguments

four() // Вызовет ошибку  - arguments is not defined
```

При вызове функции **four** появляется ошибка **ReferenceError: arguments is not defined**. Мы можем решить эту проблему использование оператора **rest** (если ваше окружение позволит).

```javascript
const four = (...args) => args
```

Это автоматически помещает все значения параметров в массив.

###38. Как создать объекты без прототипа?

Мы можем создать объект без прототипа используя метод **Object create**.

```javascript
const o1 = {}
console.log(o1.toString())
// выведет [object Object] получив этот метод из Object.prototype

const o2 = Object.create(null)
// первым параметром является прототип объекта "o2", который в этом случае
//  будет нулевым, указывая, что мы не хотим никакого прототипа
console.log(o2.toString())
// выдаст ошибку o2.toString is not a function
```

###39. Что коде ниже делает b глобальной переменной при вызове функции ?

```javascript
function myFunc() {
  // let a = b = 0;
}

myFunc()
```

**b** становится глобальной переменной из-за того, что оператор присвоения **=** имеет ассоциативность **справа-налево**. Это означает, что когда несколько операторов присваивания появляются в одном выражении, они присваиваются справа налево. Таким образом, наш код становится таким.

```javascript
function myFunc() {
  let a = (b = 0)
}

myFunc()
```

Сперва срабатывает присвоение **b = 0**, а **b** еще не была объевлена. И движок JS создает глобальную пременную **и** вовне функции. Затем он возвращает результат выражения **b = 0**, то есть **0**, и присваивает это значение локальной переменной **a** при помощи ключевого слова **let**.

Мы можем решить эту проблему объявлением переменным перед тем, как присвоить им значения.

```javascript
function myFunc() {
  let a, b
  a = b = 0
}
myFunc()
```

###40. Что такое ECMAScipt?

**ECMAScipt** является стандартом создания скриптовых языков. Это означает, что **JavaScript** следует за изменениями стардартов в спецификации **ECMAScipt**, поскольку он является образцом для **JavaScript**.
