---
path: "/blog/react-state-hooks"
date: "2020-04-30"
title: "Управление состоянием React."
subTitle: "Часть 2. Хуки."
tags: ["translate", "javascript", "react", "summary"]
prevPostName: "Управление состоянием в React. Классовые компоненты."
prevPostLink: "/blog/react-state-classes"
nextPostName: ""
nextPostLink: ""
---

**Хуки** - это нововведение в React 16.8, позволяющее манипулировать состоянием в функциональных компонентах.

### Рефакторинг компонента Counter.

Изменим классовый компонент **Counter** из прошлого поста.

```javascript
import React, { useState } from React

const [count, setCount] = useState(0)

const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)
const reset = () => setCount(0)

const Counter = ({max, step}) => {
  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Плюс</button>
        <button onClick={decrement}>Минус</button>
        <button onClick={reset}>Сбросить</button>
      </section>
    </div>
  )
}

export default Counter
```

Как видите, кода меньше, он чище, нет нужды в **this** и **bind**.

Мы применили хук **useState**, который предоставляет функциональным компонентам возможность "подцепиться" к состоянию React.

Давайте опять поэксперементируем с методом **increment**.

```javascript
const increment = () => {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  console.log(count)
}
```

Вывод в консоль все также запаздывает на один шаг. Значит хук **useState**, как и **setState** в классовых компонентах, работает асинхронно.

Попробуем передать в setState функцию.

```javascript
const increment = () => {
  setCount(c => c + 1)
}
```

И это работает, потому что **setCount** это функция JavaScript, а это значит, что она может принимать функцию в качестве аргумента.

Попробуем следующее:

```javascript
const increment = () => {
  setCount(c => c + 1)
  setCount(c => c + 1)
  setCount(c => c + 1)
}
```

Прибавление будет производиться с шагом **3**. Напомню, что в классовом компоненте шаг прибавления не увеличивался и был равен единице, потому что **setState** манипулировал с ключами объекта и убирал дублирующие ключи. У хуков же поведение более очевидное.

Используем пропсы так же, как в классовом компоненте.

```javascript
const increment = () => {
  setCount(c => {
    if (c >= max) return
    return c + step
  })
```

И после достижения **15** ничего не выведется, а если жать на прибавление дальше - это приведет к ошибке. В этом разница с **setState**, в которой обновление происходит через манипуляцию объектом, по достижении максимума обновление состояния прекращается. Хуки же оперируют примитивными значениями.

Исправим это.

```javascript
const increment = () => {
  setCount(c => {
    if (c >= max) return c
    return c + step
  })
```

### Хук useEffect и зависимости.

Использование пропсов внутри **setCount** не совсем правильно. Это добавляет побочные эффекты (side effects) и нарушает чистоту функции, что противоречит функциональной парадигме. Для работы с побочными эффектами применяется хук **useEffect**.

Добавим его.

```javascript
import React, { useState, useEffect } from "react"
```

**useEffect** принимает в качестве параметров callback функцию и массив зависимостей.

```javascript
useEffect(() => {
  document.title = `Counter: ${count}`
}, [])
```

В данном случае, при обновлении счетчика заголовок не будет обновлен, поскольку мы не "подписались" на это. Нам нужно добавить count в массив зависимостей.

```javascript
useEffect(() => {
  document.title = `Counter: ${count}`
}, [count])
```

### Добавляем localStorage

Добавим или перенесем из классового компонента функции **getStateFromLocalStorage** и **storeStateInLocalStorage** с небольшими изменениями

```javascript
const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterState")
  console.log(storage)
  if (storage) return JSON.parse(storage).count
  return { count: 0 }
}

const storeStateInLocalStorage = count => {
  localStorage.setItem("counterState", JSON.stringify({ count }))
  console.log(localStorage)
}
```

Нам нужно изменить начальное состояние счетчика.

```javascript
const [count, setCount] = useState(getStateFromLocalStorage)
```

И добавим эффект

```javascript
useEffect(() => {
  storeStateInLocalStorage(count)
}, [count])
```

### Рефакторинг и кастомные хуки

Добавим свой хук для работы с localStorage

```javascript
const useLocalStorage = initialState => {}
```
