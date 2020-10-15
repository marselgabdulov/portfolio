---
path: "/blog/70-javascript-interview-questions-pt3"
date: "2020-04-10"
title: "70 вопросов собеседования JavaScript."
subTitle: "Часть 3."
tags: ["translate", "javascript"]
prevPostName: "Часть 2"
prevPostLink: "/blog/70-javascript-interview-questions-pt2"
nextPostName: "Часть 4"
nextPostLink: "/blog/70-javascript-interview-questions-pt2"
---

Оригинал статьи [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)

- [Часть 1](https://marsdev.ru/blog/70-javascript-interview-questions-pt1)

- [Часть 2](https://marsdev.ru/blog/70-javascript-interview-questions-pt2)

- [Часть 4](https://marsdev.ru/blog/70-javascript-interview-questions-pt4)

- [Часть 5](https://marsdev.ru/blog/70-javascript-interview-questions-pt5)

- [Часть 6](https://marsdev.ru/blog/70-javascript-interview-questions-pt6)

- [Часть 7](https://marsdev.ru/blog/70-javascript-interview-questions-pt7)

###21. Какие значения являются ложными (falsy) в JavaScript ?

```javascript
const falsyValues = ["", 0, null, undefined, NaN, false]
```

**Ложными** являются такие значения, которые при конвертации в булево значение становятся **false**.

###22. Как проверить, что значение является ложным?

Используйте функцию **Boolean** или оператор **Двойное НЕ !!**.

###23. Что делает "use strict"?

**use strict** - это особенность стандарта ES5, позволяющая запускать код в **строгом режиме** как в отдельной функции, так и во всем скрипте. Данный режим позволяет нам избегать ошибок на раннем этапе разработки и добавлять ограничения в наш код.

Вот список ограничений:

- Присвоение значений или доступ к необъявленным переменным.

```javascript
function returnY() {
  "use strict"
  y = 123
  return y
}
```

- Присвоение значений к глобальным переменным, предназначенным только для чтения.

```javascript
"use strict"
var NaN = NaN
var undefined = undefined
var Infinity = "and beyond"
```

- Удаление свойств, которые нельзя удалять.

```javascript
"use strict"
const obj = {}

Object.defineProperty(obj, "x", {
  value: "1",
})

delete obj.x
```

- Дублирование имен параметров.

```javascript
"use strict"

function someFunc(a, b, b, c) {}
```

- Создание переменных с помощью функции **eval**.

```javascript
"use strict"

eval("var x = 1;")

console.log(x) // Вызовет Reference Error x is not defined
```

- Значением по умолчанию для **this** будет **undefined**.

```javascript
"use strict"

function showMeThis() {
  return this
}

showMeThis() // вернет undefined
```

###24. Каково значение this в Javascript?

По своей сути, **this** ссылается на значение объекта, который в данный момент выполняет или вызывает функцию. Я сказал **в данный момент**, потому что значение **this** меняется в зависимости от контекста, в котором мы его используем и где мы его используем.

```javascript
const carDetails = {
  name: "Ford Mustang",
  yearBought: 2005,
  getName() {
    return this.name
  },
  isRegistered: true,
}

console.log(carDetails.getName()) // выведет Ford Mustang
```

Это очевидно то, что мы ожидаем, потому что в методе **getName** мы возвращаем **this.name**, а **this** ссылается на объект **carDetails**, который в данный момент является "хозяином" выполнения функции.

Хорошо, давайте добавим немного кода, чтобы сделать его более странным. Ниже выражения **console.log** добавьте следующие три строчки кода

```javascript
var name = "Ford Ranger"
var getCarName = carDetails.getName

console.log(getCarName()) // выведет Ford Ranger
```

Второй **console.log** выведет **Ford Ranger**, что странно, поскольку в нашем первом **console.log** выводилось **Ford Mustang**. Причина этого в том, что метод **getCarName** имеет отличный от **window** "хозяйский" объект Объявление переменных ключевым словом **var** в глобальном окружении добавляет свойства в объект **window** c теми же именами, что и переменные. Помните, что **this** в глобальном окружении ссылается на объект **window** в случае, если **use strict** не был использован.

```javascript
console.log(getCarName === window.getCarName) // true
console.log(getCarName === this.getCarName) // true
```

В этом примере **this** и **window** ссылаются на один и тот же объект.

Единственным способом решить эту проблему является использование в функциях методов **apply** и **call**.

```javascript
console.log(getCarName.apply(carDetails)) // Ford Mustang
console.log(getCarName.call(carDetails)) // Ford Mustang
```

Методы **apply** и **call** ожидают первым параметром объект, который будет иметь значение **this** внутри этой функции.

**IIEF** или **Немедленно вызываемые функциональные выражения (Immediately Invoked Function Expression)**, функции, объявленные в глобальном окружении, **анонимные функции** и внутренние функции методов внутри объектов имеют в качестве значения по умолчанию для **this** ссылку на объект **window**.

```javascript
;(function() {
  console.log(this)
})() // объект "window"

function iHateThis() {
  console.log(this)
}

iHateThis() // объект "window"

const myFavoriteObj = {
  guessThis() {
    function getName() {
      console.log(this.name)
    }
    getName()
  },
  name: "Marko Polo",
  thisIsAnnoying(callback) {
    callback()
  },
}

myFavoriteObj.guessThis() // объект "window"
myFavoriteObj.thisIsAnnoying(function() {
  console.log(this) // объект "window"
})
```

У нас есть два способа получить значение свойства **name** объекта **myFavoriteObj** равное **Marko Polo**.

Первый способ - сохранить значение **this** в переменной.

```javascript
const myFavoriteObj = {
  guessThis() {
    const self = this // сохраняет значение this в переменной self
    function getName() {
      console.log(self.name)
    }
    getName()
  },
  name: "Marko Polo",
  thisIsAnnoying(callback) {
    callback()
  },
}
```

Мы переопредели значение **this** на **myFavoriteObj** и, таким образом, получили доступ к внутренней функции **getName**.

Второй способ - использование **стрелочных функций ES6**.

```javascript
const myFavoriteObj = {
  guessThis() {
    const getName = () => {
      // копирует значение "this" за пределы этой стрелочной функции
      console.log(this.name)
    }
    getName()
  },
  name: "Marko Polo",
  thisIsAnnoying(callback) {
    callback()
  },
}
```

У стрелочных функций нет собственного **this**. Они копируют значение **this** из ближайшего лексического окружения. В нашем примере, значением **this** снаружи внутренней функции **getName** будет объект **myFavoriteObj**.

###25. Что такое прототип объекта?

Проще говоря, прототип - это схема объекта. Он используется как запасной вариант для свойств и методов объекта, если их нет в текущем объекте. Это способ распространения свойств и функциональности между объектами. Это основная концепция прототипного наследования JavaScript.

```javascript
const o = {}
console.log(o.toString()) // [object Object]
```

Даже при том, что метода **o.toString** не существует, это не вызывает ошибки, а возвращает **[object Object]**. Когда свойства объекта не существует, начинается поиск этого свойства у **прототипа**, у **простотипа прототипа** и так далее по **цепочке прототипов**. Финалом этой цепочки является **Object.prototype**.

```javascript
console.log(o.toString === Object.prototype.toString) // выводит true
// Это значит, что мы произвели поиск по цепочке прототипов,
// достигли Object.prototype и использовали метод "toString"
```

###26. Что такое IIFE и для чего оно применяется?

**IIEF** или **Немедленно вызываемое функциональное выражение (Immediately Invoked Function Expression)** - это функция, которая вызывается или исполняется сразу же после создания или объявления. Сиснтаксис для **IIEF** такой - мы оборачиваем функцию круглыми скобками и сразу же вызываем ее при помощи круглых скобок **(function(){...})()**.

```javascript
(function () {
...
}());

(function () {
...
})();

(function named(params) {
...
})();

(() => {
...
})();

(function (global) {
...
})(window);

const utility = (function () {
   return {
      // utilities
   };
})();
```

Это все валидные примеры использования **IIEF**. Со второго по последний примеры демонстрируют как мы можем передавать параметры в функцию. В последнем примере продемонстрировано, как мы можем сохранить результат вызова **IIEF** в переменной для последующего использования.

Лучшее использование **IIFE** - это создание функциональных возможностей настройки инициализации и предотвращение конфликтов имен с другими переменными в глобальной области видимости или загрязнения глобального пространства имен. Давайте взглянем на пример.

```html
<script src="https://cdnurl.com/somelibrary.js"></script>
```

Предположим, что у нас есть ссылка на библиотеку **somelibrary.js** в которой находятся некоторые глобальные функции, которые мы можем использовать в нашем коде. Но так же в библиотеке находятся два метода, которые мы не используем - **createGraph** и **drawGraph**, потому что в этих методах есть баги. И мы хотим реализовать наши собственные методы createGraph и drawGraph.

- Одним из способов решения проблемы является изменение структуры наших скриптов.

```html
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
  function createGraph() {
    // createGraph логика
  }
  function drawGraph() {
    // drawGraph логика
  }
</script>
```

Тут мы переопределяем эти два метода, предоставляемые библиотекой.

- Следующий способ - изменение имен наших собственных функций.

```html
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
  function myCreateGraph() {
    // createGraph логика
  }
  function myDrawGraph() {
    // drawGraph логика
  }
</script>
```

При этом решении мы меняем вызовы функций на новые имена функций.

- И наконец, мы можем использовать IIEF.

```html
<script src="https://cdnurl.com/somelibrary.js"></script>
<script>
  const graphUtility = function() {
    function createGraph() {
      // createGraph логика
    }
    function drawGraph() {
      // drawGraph логика
    }
    return {
      createGraph,
      drawGraph,
    }
  }
</script>
```

В этом решении мы создаем служебную переменную, которая является результатом **IIFE** и возвращает объект, который содержит два метода - **createGraph** и **drawGraph**.

В следующем примере показана другая проблема, с которой помогает **IIEF**.

```javascript
var li = document.querySelectorAll(".list-group > li")
for (var i = 0, len = li.length; i < len; i++) {
  li[i].addEventListener("click", function(e) {
    console.log(i)
  })
}
```

Предположим у нас есть элемент **ul** класса **list-group**, который содержит 5 дочерних элементов **li**. И мы хотим вывести в консоль значение переменной **i** при клике на отдельный элемент **li**.

Но код ведет себя иначе - выводит **5-ку** при клике на любой элемент **li**. Эта проблема связана с работой **замыканий (Closures)**. **Замыкания** - это просто способность функций запоминать ссылки на переменные в текущей области, в области родительских функций и в глобальной области. Когда мы объявляем переменную с помощью ключевого слова **var** в глобальном окружении, очевидно, что мы создаем глобальную переменную **i**. Таким образом, кликая на элементе **i**, мы получаем в консоли **5** так как это и есть значение переменной **i**, когда мы позже ссылаемся на него в функции обратного вызова.

- Решением этой проблемы является использование **IIEF**.

```javascript
var li = document.querySelectorAll(".list-group > li")
for (var i = 0, len = li.length; i < len; i++) {
  ;(function(currentIndex) {
    li[currentIndex].addEventListener("click", function(e) {
      console.log(currentIndex)
    })
  })(i)
}
```

Это решение работает, потому что **IIEF** создает отдельное окружение для каждой итерации, значение переменной **i** сохраняется в параментр **currentIndex** и при исполнении **IIEF** значение **currentIndex** для каждой итерации становится разным.

###27. Каково предназначение метода Function.prototype.apply?

**apply** вызывает функцию, указывающую объект **this** или «владельца» этой функции в момент вызова.

```javascript
const details = {
  message: "Hello World!",
}

function getMessage() {
  return this.message
}

getMessage.apply(details) // возвращает 'Hello World!'
```

Данный метод работает также, как и **Function.prototype.call**. Единственная разница в том, как мы передаем аргументы. В методе **apply** мы передаем аргументы массивом.

```javascript
const person = {
  name: "Marko Polo",
}

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`
}

greeting.apply(person, ["Hello"]) // возвращает "Hello Marko Polo!"
```

###28. Каково предназначение метода Function.prototype.call?

**call** вызывает функцию, указывающую объект **this** или «владельца» этой функции в момент вызова.

```javascript
const details = {
  message: "Hello World!",
}

function getMessage() {
  return this.message
}

getMessage.call(details) // возвращает 'Hello World!'
```

Данный метод работает также, как и **Function.prototype.apply**. Единственная разница в том, как мы передаем аргументы. В методе **call** мы передаем аргументы напрямую, разделяя запятой.

```javascript
const person = {
  name: "Marko Polo",
}

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`
}

greeting.call(person, "Hello") // возвращает "Hello Marko Polo!"
```

###29. В чем разница между методами Function.prototype.apply и Function.prototype.call?

Единственная разница между методами **apply** и **call** заключается в способе передачи аргументов. В **apply** мы передаем аргументы массивом, а в **call** - напрямую, разделяя их запятыми.

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

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // возвращает 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5) // возвращает 15
```

###30. Каково предназначение метода Function.prototype.bind?

Метод **bind** возвращает новую функцию, которая связывается со специфическим значением **this** или объектом-"хозяином". И мы можем использовать это в нашем коде. Методы **call** и **apply** вызывают функцию немедленно вместо возвращения новой функции, так как это делает метод **bind**.

```javascript
import React from "react"

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
    }
    this.handleChange = this.handleChange.bind(this)
    // Связывает метод "handleChange" с компонентом "MyComponent"
  }

  handleChange(e) {
    // какое-то действие
  }

  render() {
    return (
      <>
        <input
          type={this.props.type}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </>
    )
  }
}
```
