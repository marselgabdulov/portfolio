---
path: "/blog/70-javascript-interview-questions-pt2"
date: "2020-04-09"
title: "70 вопросов по JavaScript для собеседования"
subTitle: "Часть 2."
tags: ["translate", "javascript"]
featuredImage: ../images/blog-posts/js2.jpg
imageAuthor: "Paweł Czerwiński"
imageAuthorLink: https://unsplash.com/@pawel_czerwinski"
prevPostName: "Часть 1"
prevPostLink: "/blog/70-javascript-interview-questions-pt1"
nextPostName: ""
nextPostLink: ""
---

Оригинал статьи [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)

###11. В чем ошибка в следующем фрагменте кода obj.someprop.x ?

```javascript
const obj = {}
console.log(obj.someprop.x)
```

Очевидно, что ошибка вызвана тем, что мы пытаемся получить доступ к свойству **x** свойства **someprop**, которое, в свою очередь, имеет значение **undefined**. Вспомните, что свойства объекта, которые не существуют сами, и которых нет у прототипа объекта, имеют значение по умолчанию **undefined**. Таким образом, **undefined** не имеет свойства **x**.

###12. Что такое event.target?

Проще говоря, **event.target** - это элемент, на котором произошло событие, или элемент, вызвавший событие.

Взгляните на разметку

```html
<div
  onclick="clickFunc(event)"
  style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;"
>
  <div style="margin: 25px; border:1px solid royalblue;border-radius:3px;">
    <div style="margin:25px;border:1px solid skyblue;border-radius:3px;">
      <button style="margin:10px">
        Button
      </button>
    </div>
  </div>
</div>
```

А теперь на код JavaScript

```javascript
function clickFunc(event) {
  console.log(event.target)
}
```

Если мы кликнем на кнопку, то в консоли выведется разметка кнопки. Даже если мы прикрепим событие к самому верхнему элементу **div**, в консоли все равно будет выведена разметка кнопки. Из чего мы можем сделать вывод, что **event.target** является элементом, вызывающим событие.

###13. Что такое event.currentTarget?

**event.currentTarget** - это элемент, к которому мы **явно** присоединяем обработчик события.

Таже разметка, что и в вопросе 12.

```html
<div
  onclick="clickFunc(event)"
  style="text-align: center;margin:15px;
border:1px solid red;border-radius:3px;"
>
  <div style="margin: 25px; border:1px solid royalblue;border-radius:3px;">
    <div style="margin:25px;border:1px solid skyblue;border-radius:3px;">
      <button style="margin:10px">
        Button
      </button>
    </div>
  </div>
</div>
```

Но код JavaScript иной

```javascript
function clickFunc(event) {
  console.log(event.currentTarget)
}
```

При клике на кнопке, в консоли выведется разметка самого верхнего элемента **div**. Из чего мы делаем заключение, что **event.currentTarget** является элементом, к которому прикрепляется обработчик события.

###14. В чем разница между операторами == и === ?

Разница между **==** и **===** заключается в том, что оператор **==** сравнивает по значению после операции приведения типов, а оператор **===** сравнивает и по значению, и по типу без проведения операции приведения типов.

Давайте подробнее рассмотрим оператор **==**. Сперва нам стоит разобраться с приведением типов (coercion). Приведение типов, это такая операция, при которой значение трансформируется в другой тип данных. В данном случае, оператор **==** проводит операцию неявного приведения типов. Оператор **==** имеет некоторые условия перед выполнением сравнения двух значений.

Допустим мы должны сравнить **x == y**.

1. Если **x** и **y** одного типа, то сравнивать их следует оператором **===**.
2. Если **x** имеет значение **null**, а **y** имеет значение **undefined**, то результатом будет **true**.
3. Если **x** имеет значение **undefined**, а **y** имеет значение **null**, то результатом будет **true**.
4. Если **x** является числом, а **y** является строкой, то результатом будет **x == toNumber(y)**.
5. Если **x** является строкой, а **y** является числом, то результатом будет **toNumber(x) == y**.
6. Если **x** является булевым значением, то результатом будет **toNumber(x) == y**.
7. Если **y** является булевым значением, то результатом будет **x == toNumber(y)**.
8. Если **x** является строкой, символом или числом, а **y** является объектом, то результатом будет **x == toPrimitive(y)**.
9. Если **x** является объектом, а **y** является строкой или символом, то результатом будет **toPrimitive(x) == y**.
10. Во всех остальных случаях результатом будет **false**.

Метод **toPrimitive** сперва применяет к объекту метод **valueOf**, затем метод **toString**.

Рассмотрим примеры

| x                 | y         | x==y |
| ----------------- | --------- | ---- |
| 5                 | 5         | true |
| 1                 | '1'       | true |
| null              | undefined | true |
| 0                 | false     | true |
| '1,2'             | [1,2]     | true |
| '[object Object]' | {}        | true |

В этих примерах все сравнения возвращают **true**.

Первый пример относится к условию 1, поскольку **x** и **y** являются числами.

Второй пример относится к условию 4, **y** конвертируется в число перед сравнением.

Третий пример относится к условию номер 2.

Четвертый пример относится к условию номер 7, потому что **y** является булевым значением.

Пятый пример оносится к условию номер 8. Массив преобразуется в строку при помощи метода **toString()**, который возвращает **'1,2'**

Последний пример оносится к условию 10. Объект преобразуется в строку при помощи метода **toString()**, который возвращает **[object Object]**.

| x                 | y         | x===y |
| ----------------- | --------- | ----- |
| 5                 | 5         | true  |
| 1                 | '1'       | false |
| null              | undefined | false |
| 0                 | false     | false |
| '1,2'             | [1,2]     | false |
| '[object Object]' | {}        | false |

При использовании оператора **===**, все сравнения, кроме первого, вернут **false**, потому что сравниваемые значения разного типа.

###15. Почему сравнение двух одинаковых объектов возвращает false?

Пример

```javascript
let a = { a: 1 }
let b = { a: 1 }
let c = a

console.log(a === b) //  false даже если у них одинаковые свойства
console.log(a === c) //  true
```

JavaScript сравнивает объекты и примитивные типы по-разному. Примитивные типы сравниваются по **значению**, тогда как объекты сравниваются по **ссылке** (или адресу в памяти, где хранится переменная). Вот почему первое сравнение возвращает false, а второе true. **a** и **c** имеют ссылку на один и тот же участок в памяти, тогда как **b** - на другой.

###16. Что делает оператор !! ?

**Двойное НЕ** или оператор **!!** приводит значение, находящееся справа от него, в булево значение. Это довольно причудвливый способ преобразования в булево значение.

```javascript
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!"") // false
console.log(!!0) // false
console.log(!!NaN) // false
console.log(!!" ") // true
console.log(!!{}) // true
console.log(!![]) // true
console.log(!!1) // true
console.log(!![].length) // false
```

###17. Как вызвать несколько выражений одной строкой?

Мы можем сделать это с помощью оператора **,** (запятой).

Выражения будут считываться и исполняться слева направо. Возвращено будет последнее значение справа.

```javascript
let x = 5

x = (x++, (x = addFive(x)), (x *= 2), (x -= 5), (x += 10))

function addFive(num) {
  return num + 5
}
```

Если вывести в консоль значение **x**, то оно будет равно **27**. Сперва мы увеличили значение **x** на единицу, до **6**. Затем вызвали функцию **addFive(6)**, результат уже равен **11**. Дальше мы умножили результат на **2** - теперь он равен **22**. Затем отняли **5** и получили **17**. В конце прибавили **10**. Итоговый результат равен **27**.

###18. Что такое **Hoisting**?

**Hoisting** - это термин для обозначения процесса "подъема" или "всплытия" переменных и функций к вершине окружения, где они были объявлены (global scope или function scope).

Для понимания **подъема** необходимо разобраться с контекстом выполнения (execution context).
**Контекст исполнения** - это "среда выполнения кода", которая выполняется в данный момент.
**Контекст исполнения** имеет две фазы - компиляцию и исполнение.

В фазе **компиляции** берутся все _объявления функций_ и поднимаются наверх их окружения (scope), для того, чтобы к ним можно было обращаться в будущем. Тоже самое происходит с переменными (объявленным ключевым словом **var**), переменным присваивается значение по умолчанию, равное **undefined**.

В фазе **исполнения** переменным, поднятым на предыдущем этапе, присваиваются их значения, и вызываются функции (методы в объектах).

**Примечание**. Всплывают только переменные, объявленные ключевым словом **var** и **function declaration**. Это не касается **стрелочных функций**, **function expression** и ключевых слов **let** и **const**.

Итак, ниже пример с глобальным окружением (global scope)

```javascript
console.log(y)
y = 1
console.log(y)
console.log(greet("Mark"))

function greet(name) {
  return "Hello " + name + "!"
}

var y
```

Данный код выведет в консоль **undefined**, **1** и **Hello Mark!** соответсвенно.

Фаза компиляции быдет выглядеть так

```javascript
function greet(name) {
  return "Hello " + name + "!"
}

var y // неявное присвоение "undefined"

// ожидание завершения фазы компиляции

// затем начало фазы исполнения
/*
console.log(y);
y = 1;
console.log(y);
console.log(greet("Mark"));
*/
```

Для примера я закомментировал присвоение значения переменной и вызов функции.

После завершения _фазы компиляции_ стартует _фаза исполнения_ с вызова методов и присвоения значений переменным.

```javascript
function greet(name) {
  return "Hello " + name + "!"
}

var y

// начало фазы исполнения

console.log(y)
y = 1
console.log(y)
console.log(greet("Mark"))
```

###19. Что такое окружение (scope) ?

**Окружение** в JavaScript - это область, где у нас есть валидный доступ к переменным или функциям. Существуют **глобальное окружение**, **окружение функции** и **окружение блока (ES6)**.

- **Глобальное окружение** - переменные или функции, объявленные в глобальном пространстве имен и доступные из любого участка кода.

```javascript
// глобальное пространство имен
var g = "global"

function globalFunc() {
  function innerFunc() {
    console.log(g) // имеем доступ к "g", потому что "g" является глобальной переменной
  }
  innerFunc()
}
```

- **Окружение функции** - переменные, функции и параметры, объявленные и доступные внутри функции, но не снаружи.

```javascript
function myFavoriteFunc(a) {
  if (true) {
    var b = "Hello " + a
  }
  return b
}
myFavoriteFunc("World")

console.log(a) // Вызовет ReferenceError "a" is not defined
console.log(b) // не доберется до этого участка
```

- **Окружение блока** - переменные (**let** и **const**), объявленные внутри блока **{}**, и доступные только внутри блока.

```javascript
function testBlock() {
  if (true) {
    let z = 5
  }
  return z
}

testBlock() // Вызовет ReferenceError "z" is not defined
```

**Окружение** является еще и набором правил по нахождению переменных. Если перенной не находится в **текущем окружении** - инициализируется поиск во **внешнем окружении**, если и там ее нет - поиск продолжается дальше, пока не достигнет **глобального окружения**. Если переенной не находится вообще - вызывается ошибка. Поиск идет до ближайшего окружения и прекращается, когда при нахождении цели. Это называется **Цепь окружений (Scope Chain)**.

```javascript
/* Цепь окружений
   Начинается с внутреннего окружения

   внутренее окружение -> внешнее окружение -> глобальное окружение
  */

// глобальное окружение
var variable1 = "Comrades"
var variable2 = "Sayonara"

function outer() {
  // внешнее окружение
  var variable1 = "World"
  function inner() {
    // внутренее окружение
    var variable2 = "Hello"
    console.log(variable2 + " " + variable1)
  }
  inner()
}
outer()
// выводит Hello World
// потому что (variable2 = "Hello") и (variable1 = "World") являются ближайшими
// переменными к внутреннему окружению
```

![Схема окружений](https://res.cloudinary.com/practicaldev/image/fetch/s--dJFL2g1k--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/l81b3nmdonimex0qsgyr.png)

###20. Что такое замыкания (Closures)?

Это пожалуй самый сложный вопрос, поскольку дискуссии на тему замыканий не прекращаются. Я попытаюсь выразить то, как я их понимаю.

**Замыкания** - это возможность функции во время объявления запоминать ссылки на переменные и параметры в своей текущей области, в области родительской функции, в области родительской функции своего родителя, пока она не достигнет глобальной области с помощью цепочки окружений. По сути это окружение, созданное при объявлении функции.

Лучше всего показать это с помощью примера

```javascript
// глобальное окружение
var globalVar = "abc"

function a() {
  // окружение замыкания
  console.log(globalVar)
}

a() // выводит "abc"
/* цепочка окружений
      внутри функции a

     окружение функции а -> глобальное окружение
   */
```

В этом примере, при объявлении функции **а**, **глобальное окружение** становится частью замыкания функции **а**.

![Схема замыкания 1](https://res.cloudinary.com/practicaldev/image/fetch/s--gbH9Uqec--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/teatokuw4xvgtlzbzhn8.png)

Причина, по которой пременная **globalVar** не была отображена на схеме, является то, что значение этой переменной может быть изменено в зависимости от того, **где** и **когда** мы вызовем функцию **а**.

Но в примере выше у переменной **globalVar** было значение **abc**.

Приступим к более сложному примеру

```javascript
var globalVar = "global"
var outerVar = "outer"

function outerFunc(outerParam) {
  function innerFunc(innerParam) {
    console.log(globalVar, outerParam, innerParam)
  }
  return innerFunc
}

const x = outerFunc(outerVar)
outerVar = "outer-2"
globalVar = "guess"
x("inner")
```

![Схема замыкания 2](https://res.cloudinary.com/practicaldev/image/fetch/s--inSFoNQU--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/e4hxm7zvz8eun2ppenwp.png)

В консоль выведется "guess outer inner". Объяснение следующее. Когда мы вызываем функцию **outerFunc** и присваеваем переменной **x** возвращаемое значение функции **innerFunc**, **outerParam** будет иметь значение **outer** даже если мы присвоили ему значение **outer-2**, потому что переопределение значения произошло после вызова внешней функции и в тоже самое время, когда мы вызываем функцию **outerFunc**, она ищет значение переменной **outerVar** в цепочке окружения, и это значение будет равно **outer**. Теперь, когда мы вызываем **x**, которая имеет ссылку на **innerFunc**, **innerParam**, будет иметь значение **inner** потому что это то значение, которое мы передаем при вызове. И переменная **globalVar** будет иметь значение **guess**, потому что перед вызовом **x** мы присваиваем новое значение для переменной **globalVar**, а во время вызова **x** значение **globalVar** в цепочке окружений.

У нас есть пример, демонстрирующий неправильное понимание замыканий

```javascript
const arrFuncs = []
for (var i = 0; i < 5; i++) {
  arrFuncs.push(function() {
    return i
  })
}
console.log(i) // i ранвно 5

for (let i = 0; i < arrFuncs.length; i++) {
  console.log(arrFuncs[i]()) // все выводы будут равны "5"
}
```

Этот код не будет работать корректно из-за замыканий. Ключевое слово **var** создает глобальную переменную. И при использовании **push** мы возвращаем глобальную переменную **i**. Таким образом, когда мы вызываем эти функции в том массиве после выполнения for loop, в консоль выводится **5**, потому что мы берем текущее значение переменной **i**, которая равна **5** и мы имеем к ней доступ, поскольку она глобальная. Потому что **замыкания** сохраняют **ссылки** к этим переменным, а не к их **значениям** во время их создания. Мы можем решить эту проблему используя **IIFES (мгновенно вызываемые функции)** или использованием **let** вместо **var** в теле цикла.