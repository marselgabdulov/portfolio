---
path: "/blog/react-state-classes"
date: "2020-04-15"
title: "Управление состоянием React."
subTitle: "Часть 1. Классовые компоненты."
tags: ["translate", "javascript", "react", "summary"]
prevPostName: "Вопросы собеседования JavaScript. Часть 7."
prevPostLink: "/blog/70-javascript-interview-questions-pt7"
nextPostName: "Управление состоянием в React. Хуки"
nextPostLink: "/blog/react-state-hooks"
---

Я надеюсь, что читатель хоть немного знаком с React и способен создать болванку с помощью **create-react-app**.

### Создадим компонент.

Начнем изучение с самого простого - создадим счетчик. Это "Hello World!" от мира React.

```javascript
import React, {Component} from React

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <p className="count">0</p>
        <section className="controls">
          <button>Плюс</button>
          <button>Минус</button>
          <button>Сбросить</button>
        </section>
      </div>
    )
  }
}

export default Counter
```

Очевидно, что наш компонент пока ни на что не способен. Нет ни состояния, ни функций изменения состояния. Так что добавим состояние. И отобразим его.

```javascript
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    const { count } = this.state

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button>Плюс</button>
          <button>Минус</button>
          <button>Сбросить</button>
        </section>
      </div>
    )
  }
}

export default Counter
```

Добавим функции изменения состояния и события onClick к кнопкам. Не забываем про **this**.

```javascript
class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }

  increment() {
    this.setState({ count: this.state.count + 1 })
  }

  decrement() {
    this.setState({ count: this.state.count - 1 })
  }

  reset() {
    this.setState({ count: 0 })
  }

  render() {
    const { count } = this.state

    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Плюс</button>
          <button onClick={this.decrement}>Минус</button>
          <button onClick={this.reset}>Сбросить</button>
        </section>
      </div>
    )
  }
}

export default Counter
```

И получаем рабочий счетчик.

### Асинхронность setState.

Но что будет, если внутри функции **increment** попытаться обновить состояние несколько раз и тут же вывести результат в консоль?

```javascript
increment() {
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })

  console.log(this.state.count)
}
```

В консоль выведется **0**. Это связано с тем, что метод **setState()** работает асинхронно. Подробнее об этом можно узнать из [документации.](https://ru.reactjs.org/docs/faq-state.html#when-is-setstate-asynchronous)

Но шаг прибавления все ще будет равен единице. Это происходит потому, что метод **setState()** объединяет объект состояния с вновь созданным объектом, в котором объеденены все попытки обновить состояние.

```javascript
Object.assign(
  {},
  yourFirstCallToSetState,
  yourSecondCallToSetState,
  yourThirdCallToSetState
)
```

Но этот объект избавляется от дублирующих ключей при объединении и учитывает только последний из этих ключей. Таким образом, состояние обновится на то значение, которое было передано в последнем вызове **setState()**. Попробуйте передать в последний **setState** любое другое число.

### setState и функции.

Изменим наш метод **increment**.

```javascript
increment() {
  this.setState((state) => { return { count: state.count + 1 } })
  this.setState((state) => { return { count: state.count + 1 } })
  this.setState((state) => { return { count: state.count + 1 } })
}
```

Счетчик обновится и выведется **3**. В этот раз дело не в реакте, а в самой природе JavaScript. И это предоставляет нам некоторые возможности. Мы можем добавлять правила обновления состояния. Например, ограничить верхнюю границу счетчика.

```javascript
increment() {
  this.setState(state => {
    if (state.count >= 10) return; // обновления состояния не произойдет
    return {count: state.count + 1};
  })
}
```

Попробуйте увеличить счетчик. Убедитесь, что увеличить больше 10 не получится.

Немного изменим наш компонент и добавим ему пропсы.

```javascript
// родительский компонент
const App = () => {
  return (
    <main className="App">
      <Counter max={20} step={5} />
    </main>
  )
}

// функция increment в компоненте Counter
increment() {
  const {max, step} = this.props
  this.setState(state => {
    if (state.count >= max) return;
    return {count: state.count + step};
  })
}
```

Это добавило гибкости нашему компоненту.

Но что, если мы захотим добавить тесты? Как нам упростить задачу?

Мы можем вынести функциональность во вспомогательную функцию.

```javascript
const increment = (state, props) => {
  const { max, step } = props;
  if (state.count >= max) return;
  return {count: state.count + step};
}

class Counter extends Component {
  ...
  increment() {
    this.setState(increment);
  }
  ...
}
```

### setState и функция обратного вызова (Callback).

Откатимся на один шаг назад, вернем функциональность внутрь метода класса **increment** и попробуем вывести состоние счетчика в консоль.

```javascript
increment() {
  this.setState((state, props) => {
  const {max, step} = props
    if (state.count >= max) return;
    return {count: state.count + step};
  })

  console.log(this.state)
}
```

Вывод в консоль будет запаздывать на один шаг.

Мы можем исправить такое поведение применив **callback**.

```javascript
increment() {
  this.setState(
    (state, props) => {
      const { max, step } = props;
      if (state.count >= max) return;
      return { count: state.count + step };
    },
    () => {
      console.log('После: ', this.state);
    }
  );

  console.log('До: ', this.state);
}
```

### setState и вспомогательная функция (helper function).

Допустим нам надо взаимодействовать с localStorage.

Создадим для этого вовне нашего класса вспомогательную функцию.

```javascript
const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterState")
  if (storage) return JSON.parse(storage)

  // если хранилище пусто
  return { count: 0 }
}
```

Cкорректируем наш конструктор.

```javascript
constructor(props) {
    super(props);
    this.state = getStateFromLocalStorage();
    ...
  }
```

Добавим функциональности в метод **increment**.

```javascript
increment() {
  this.setState(
    (state, props) => {
      const { max, step } = props;
      if (state.count >= max) return;
      return { count: state.count + step };
    },
    () => {
      localStorage.setItem('counterState', JSON.stringify(this.state))
      console.log(localStorage)
    }
  );
}
```

Это работает, но callback функция не принимает каких-либо аргументов и в целом код выглядит так, будто нам нужна отдельная функция для размещения состояния в localStorage.

Первый вариант - использование функционального выражения (function expression).

```javascript
function storeStateInLocalStorage() {
  localStorage.setItem("counterState", JSON.stringify(this.state))
  console.log(localStorage)
}
```

Не забываем изменить метод **increment**.

```javascript
increment() {
  this.setState((state, props) => {
    const { max, step } = props;
    if (state.count >= max) return;
    return { count: state.count + step };
  }, storeStateInLocalStorage.bind(this));
}
```

Второй вариант - использование стрелочной функции (arrow function).

```javascript
const storeStateInLocalStorage = state => {
  localStorage.setItem("counterState", JSON.stringify(state))
  console.log(localStorage)
}
```

```javascript
increment() {
  this.setState(
    (state, props) => {
      const { max, step } = props;
      if (state.count >= max) return;
      return { count: state.count + step };
    },
    () => storeStateInLocalStorage(this.state)
  );
}
```

### Паттерны и антипаттерны в работе с setState.

#### Не формируйте состояние из пропсов.

```javascript
class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: props.firstName + " " + props.lastName,
    }
  }
}
```

Компонент может быть использован в нескольких местах с разными пропсами и его состояние не будет обновляться.

Работайте с пропсами напрямую.

```javascript
class User extends Component {
  render() {
    const { firstName, lastName } = this.props
    const fullName = firstName + " " + lastName

    return <h1>{fullName}</h1>
  }
}
```

Альтернативный вариант.

```javascript
class User extends Component {
  get fullName() {
    const { firstName, lastName } = this.props
    return firstName + " " + lastName
  }

  render() {
    return <h1>{this.fullName}</h1>
  }
}
```

#### Не обязательно все пихать в метод render.

Вы можете использовать вспомогательные функции.

Было.

```javascript
class UserList extends Component {
  render() {
    const { users } = this.props

    return (
      <section>
        <UserControls />
        {users.map(user => (
          <UserProfile
            key={user.id}
            image={user.photo}
            onLayoff={handleLayoff}
          />
        ))}
        <SomeFooter />
      </section>
    )
  }
}
```

Разбиваем.

```javascript
class UserList extends Component {
  renderUserProfile(user) {
    return (
      <UserProfile key={user.id} image={user.photo} onLayoff={handleLayoff} />
    )
  }

  render() {
    const { users } = this.props
    return (
      <section>
        <UserControls />
        {users.map(this.renderUserProfile)}
        <SomeFooter />
      </section>
    )
  }
}
```

Или вообще используйте функциональные компоненты.

```javascript
const renderUserProfile = user => {
  return (
    <UserProfile key={user.id} image={user.photo} onLayoff={handleLayoff} />
  )
}

const UserList = ({ users }) => {
  return (
    <section>
      <UserControls />
      {users.map(renderUserProfile)}
      <SomeFooter />
    </section>
  )
}
```

#### Не используйте состояние там, где не собираетесь рендерить.

В этом примере показана попытка поддержания связи с сервером внутри state.

```javascript
class TweetStream extends Component {
  constructor() {
    super()
    this.state = {
      tweets: [],
      tweetChecker: setInterval(() => {
        Api.getAll("/api/tweets").then(newTweets => {
          const { tweets } = this.state
          this.setState({ tweets: [...tweets, newTweets] })
        })
      }, 10000),
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.tweetChecker)
  }

  render() {
    // какие то действия с твитами
  }
}
```

Для этого есть другие функции жизненного цикла.

```javascript
class TweetStream extends Component {
  constructor() {
    super()
    this.state = {
      tweets: [],
    }
  }

  componentWillUnmount() {
    this.tweetChecker = setInterval( ... )
  }

  componentWillUnmount() {
    clearInterval(this.tweetChecker)
  }

  render() {
    // какие то действия с твитами
  }
}
```

#### Разумное добавление элементов по умолчанию в состояние.

Если вы ожидаете массив...

```javascript
class Items extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    Api.getAll("/api/items").then(items => {
      this.setState({ items })
    })
  }

  render() {
    // какие то действия с items
  }
}
```

Добавьте его в состояние

```javascript
class Items extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    Api.getAll("/api/items").then(items => {
      this.setState({ items })
    })
  }

  render() {
    // какие то действия с items
  }
}
```
