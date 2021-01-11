export const initialState = {
  steps: [
    {
      title: 'Основы',
      text:
        'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.',
      active: true,
      done: false,
    },
    {
      title: 'Компоненты',
      text:
        'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.',
      active: false,
      done: false,
    },
    {
      title: 'Роутер',
      text:
        'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.',
      active: false,
      done: false,
    },
    {
      title: 'Vuex',
      text:
        'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.',
      active: false,
      done: false,
    },
    {
      title: 'Composition',
      text:
        'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.',
      active: false,
      done: false,
    },
  ],
  isFinished: false,
}

export const actions = {
  SET_ACTIVE: 'SET_ACTIVE',
  SET_ISFINISHED: 'SET_ISFINISHED',
}
