---
path: "/blog/70-javascript-interview-questions-pt1"
date: "2020-04-08"
title: "70 вопросов по JavaScript для собеседования"
subTitle: "Часть 1."
tags: ["translate", "javascript"]
featuredImage: ../images/blog-posts/js1.jpg
imageAuthor: "Paweł Czerwiński"
imageAuthorLink: "https://unsplash.com/@pawel_czerwinski"
prevPostName: "Часть 7"
prevPostLink: "/blog/70-javascript-interview-questions-pt7"
nextPostName: "Часть 2"
nextPostLink: "/blog/70-javascript-interview-questions-pt2"
---

Оригинал статьи [70 JavaScript Interview Questions](https://dev.to/macmacky/70-javascript-interview-questions-5gfi)

- [Часть 2](https://marsdev.ru/blog/70-javascript-interview-questions-pt2)

- [Часть 3](https://marsdev.ru/blog/70-javascript-interview-questions-pt3)

- [Часть 4](https://marsdev.ru/blog/70-javascript-interview-questions-pt4)

- [Часть 5](https://marsdev.ru/blog/70-javascript-interview-questions-pt5)

- [Часть 6](https://marsdev.ru/blog/70-javascript-interview-questions-pt6)

- [Часть 7](https://marsdev.ru/blog/70-javascript-interview-questions-pt7)

###1. Отличие _undefined_ от _null_

Перед тем, как разбирать различия **null** и **undefined**, мы должны понять сходства между ними.

- Эти типы данных относятся к семи примитивным типам JavaScript

```javascript
let primitiveTypes = [
  "string",
  "number",
  "null",
  "undefined",
  "boolean",
  "symbol",
  "bigint",
]
```

- Они считаются **ложными** (falsy), то есть методы **Boolean(value)** или **!!value** возвращают **false** при передаче в качестве value **undefined** или **null**.

```javascript
console.log(!!null) //false
console.log(!!undefined) //false

console.log(Boolean(null)) //false
console.log(Boolean(undefined)) //false
```

А теперь поговорим о различиях.

- **undefined** является значением по умолчанию для переменной, которой не было присвоено определенное значение, для функции, которая не имеет явного возвращаемого значения, например **console.log(2)** или для несуществующего свойства объекта.

- **null** буквально означает, что значения нет. **null** - это значение, которое было явно определено для переменной. В этом примере мы получаем значение null, когда метод fs.readFile не выдает ошибку.

```javascript
fs.readFile("path/to/file", (e, data) => {
  console.log(e) // выдает null, когда нет ошибок
  if (e) {
    console.log(e)
  }
  console.log(data)
})
```

При сравнении значений **null** и **undefined** мы получаем **true** при использовании **==** и **false** при использовании **===**. Подробнее описано [здесь.](https://dev.to/macmacky/70-javascript-interview-questions-5gfi#14-whats-the-difference-between-and-)

###2. Что делает оператор && ?

Оператор **&&** или **логический оператор И** находит первое _ложное_ выражение в его операндах и возвращает его. Если же он не находит ни одного _ложного_ выражения, то он возращает последнее. Он использует короткое замыкание, чтобы предотвратить ненужную работу. Я использовал его в блоке **catch** чтобы закрыть соединение с базой данных в одном из моих проектов.

```javascript
console.log(false && 1 && []) // false
console.log(" " && true && 5) // 5
```

Использование оператора **if**.

```javascript
const router: Router = Router()

router.get("/endpoint", (req: Request, res: Response) => {
  let conMobile: PoolConnection
  try {
    // операции с базой данных
  } catch (e) {
    if (conMobile) {
      conMobile.release()
    }
  }
})
```

Использование оператора **&&**.

```javascript
const router: Router = Router()

router.get("/endpoint", (req: Request, res: Response) => {
  let conMobile: PoolConnection
  try {
    // операции с базой данных
  } catch (e) {
    conMobile && conMobile.release()
  }
})
```

###3. Что делает оператор || ?

Оператор **||** или **логический оператор ИЛИ** находит первое _правдивое_ выражение в его операндах и возвращает его. Он также использует короткое замыкание, чтобы предотвратить ненужную работу. В прошлом (до ES6 значий функции по умолчанию) он использовался для инициализации значений по умолчанию.

```javascript
console.log(null || 1 || undefined) // 1

function logName(name) {
  var n = name || "Mark"
  console.log(n)
}

logName() // "Mark"
```

###4. Является ли использование оператора **+** (или унарный плюс) самым быстрым способом преобразования строки в число?

Согласно [документации MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus), **+** является самым быстрым способом преобразования строки в число, поскольку он не выполняет никаких операций со значением, если оно уже является числом.

###5. Что такое DOM?

**DOM**, расшифровывается как **Document Object Model** (Объектная модель документа) и представляет собой интерфейс (**API**) для HTML и XML документов. Когда браузер читает (проводит синтактический анализ) наш HTML документ, то он создает большой объект, и вот как раз этот огромный объект, основанный на HTML документе, и есть **DOM**. Это древовидная структура (или граф), свормированная из HTML документа. **DOM** используется для взаимодействия и модификации **структуры DOM** или специфических элементов или узлов.

Представьте, что у нас есть следующий документ HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document Object Model</title>
  </head>

  <body>
    <div>
      <p>
        <span></span>
      </p>
      <label></label>
      <input />
    </div>
  </body>
</html>
```

Эквивалентом в DOM будет следующая структура:

![Картинка с деревом DOM](https://res.cloudinary.com/practicaldev/image/fetch/s--z_mRQj0_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/mbqphfbjfie45ynj0teo.png)

Объект JavaScript **document** представляет **DOM**. Он предоставляет нам методы для выделения элементов, обновления их содержимого и множество других.

###6. Что такое Event Propagation (распространение событий) ?

При выполнении события на элементе **DOM**, это событие затрагивает не только сам элемент. В **фазе всплытия (Bubbling Phase)** событие "всплывает" или подымается по дереву элементов пока не достигает объекта **window**, в тоже время в **фазе захвата (Capturing Phase)** событие стартует от объекта **window** до элемента, вызвавшего событие или **event.target**.

**Event Propagation** имеет три фазы:

1. **Capturing Phase (фаза захвата)** - событие стартует от объекта **window** и спускается по дереву DOM пока не достигнет цели.

2. **Target Phase (фаза цели)** - событие достигает целевого элемента.

3. **Bubbling Phase (фаза всплытия)** - событие "всплывает" от целевого элемента к объекту **window**.

![Картинка с фазами](https://res.cloudinary.com/practicaldev/image/fetch/s--Azk8KRbD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/hjayqa99iejfhbsujlqd.png)

###7. Что такое **Event Bubbling (всплытие события)**?
При исполнение события на элементе **DOM**, это событие не происходит полностью только в этом одном элементе. В **Bubbling Phase (фазе всплытия)**, событие "всплывает", или оно переходит к его родителю, его бабушке и дедушке, к родителю бабушки и дедушки, пока оно не достигнет всего пути к объекту **window**.

Допустим, у нас есть разметка

```html
<div class="grandparent">
  <div class="parent">
    <div class="child">1</div>
  </div>
</div>
```

и код javascript

```javascript
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== "function") return
  if (typeof el === "string") {
    el = document.querySelector(el)
  }
  el.addEventListener(event, callback, isCapture)
}

addEvent(document, "DOMContentLoaded", () => {
  const child = document.querySelector(".child")
  const parent = document.querySelector(".parent")
  const grandparent = document.querySelector(".grandparent")

  addEvent(child, "click", function(e) {
    console.log("child")
  })

  addEvent(parent, "click", function(e) {
    console.log("parent")
  })

  addEvent(grandparent, "click", function(e) {
    console.log("grandparent")
  })

  addEvent(document, "click", function(e) {
    console.log("document")
  })

  addEvent("html", "click", function(e) {
    console.log("html")
  })

  addEvent(window, "click", function(e) {
    console.log("window")
  })
})
```

В методе **addEventListener** есть третий опциональный параметр **useCapture** со значением по умолчанию **false**. Если **useCapture** останется равным **false**, то событие исполнится в **фазе всплытия**, если оно будет равно **true**, то событие истолнится в **фазе захвата**. Если клинуть на дочернем элементе, то в консоли выведутся дочерний, родительский, бабушкин эелемент, **html**, **document** и **window**

###8. Что такое **Event Capturing (захват события)**?
При исполнение события на элементе **DOM**, это событие не происходит полностью только в этом одном элементе. В **Capturing Phase (фазе захвата)**, событие стартует от объекта **window** и спускается вниз до целевого элемента.

Допустим, у нас есть разметка

```html
<div class="grandparent">
  <div class="parent">
    <div class="child">1</div>
  </div>
</div>
```

и код javascript

```javascript
function addEvent(el, event, callback, isCapture = false) {
  if (!el || !event || !callback || typeof callback !== "function") return
  if (typeof el === "string") {
    el = document.querySelector(el)
  }
  el.addEventListener(event, callback, isCapture)
}

addEvent(document, "DOMContentLoaded", () => {
  const child = document.querySelector(".child")
  const parent = document.querySelector(".parent")
  const grandparent = document.querySelector(".grandparent")

  addEvent(
    child,
    "click",
    function(e) {
      console.log("child")
    },
    true
  )

  addEvent(
    parent,
    "click",
    function(e) {
      console.log("parent")
    },
    true
  )

  addEvent(
    grandparent,
    "click",
    function(e) {
      console.log("grandparent")
    },
    true
  )

  addEvent(
    document,
    "click",
    function(e) {
      console.log("document")
    },
    true
  )

  addEvent(
    "html",
    "click",
    function(e) {
      console.log("html")
    },
    true
  )

  addEvent(
    window,
    "click",
    function(e) {
      console.log("window")
    },
    true
  )
})
```

В методе **addEventListener** есть третий опциональный параметр **useCapture** со значением по умолчанию **false**. Если **useCapture** останется равным **false**, то событие исполнится в **фазе всплытия**, если оно будет равно **true**, то событие истолнится в **фазе захвата**. Если клинуть на дочернем элементе, то в консоли выведутся **window**, **document**, **html**, бабушкин, родительский и дочерний элементы.

###9. В чем разница между методами event.preventDefault() и event.stopPropagation() ?

Метод **event.preventDefault()** предотвращает поведение элемента по умолчанию. Если он вызывается на элементе **form**, то он предовращает отправку данных, на элементе **ancor** он препятствует навигации, на элементе **contextmenu** он препятствует показу или отображению. Тогда как метод **event.stopPropagation()** останавливает распространение или возникновение события в **фазе всплытия** или в **фазе захвата**.

###10. Как узнать, что метод event.preventDefault() был применен к элементу?

Мы можем использовать свойство объекта события **event.defaultPrevented**, которое возвращает булево значение, отвечающее на вопрос был ли использован метод **event.preventDefault()**.
