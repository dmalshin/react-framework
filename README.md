# Ui-incident

## Команды

Запуск дев-сервера

`npm start`

Запуск юнит-тестов

`npm test`

Билд для production

`npm run build`

Команды линтинга

```
npm run lint
npm run lint:js
npm run lint:scss
```

## Основные библиотеки

### Для браузера

- react
- redux
- redux-saga
- reselect
- react-router-dom
- axios
- lodash
- luxon

### Для разработки

- jest
- enzyme
- sass
- redux-devtools
- eslint
- prettier
- stylelint

## Mock-сервер

### Расположение

`/mocks`

### Команды

Запуск

```
cd mocks
npm start
```

### Технологии:

- node
- sails

### Ссылки по sails

+ [Get started](https://sailsjs.com/get-started)
+ [Sails framework documentation](https://sailsjs.com/documentation)

## Прекоммит хуки

- Форматирование измененных файлов через prettier

## Принятые практики

- `default` экспорт не используется
- Файлы, использующие jsx имеют расширение .jsx
- Методы классов, обрабатывающие DOM-события начинаются с префикса `handle`
- Для импорта фукций lodash используется запись вида `import { get, pick } from 'lodash-es'`
- Для работы с датой и временем используется библиотека luxon

## Структура проекта

Разбиение на модули пока не выгодно, но возможно в будущем.

```
.
├── /build/                     # Результат билда для production
├── /config/                    # Скрипты конфигурации окружения
├── /mocks/                     # Мок-сервер
├── /node_modules/              # Внешние зависимости
├── /public/                    # Статичные файлы html-шаблона
│   ├── /index.html             # Html-шаблон
├── /scripts/                   # npm скрипты
├── /src/                       # Исходный код приложения
│   ├── /api/                   # Запросы к api
│   ├── /api.js                 # Абстрагирует запросы к api как простые функции
│   ├── /assets/                # Статические файлы
│   │    └─/fonts/              # Шрифты
│   │    └─/images/             # Растровые изображения
│   │    └─/svg/                # Векторные изображения
│   ├── /components/            # React компоненты
│   │   ├─ /common/             # Общие компоненты приложения
│   │   ├─ /routes/             # Компоненты роутинга
│   │   ├─ /module-name/        # Компоненты модуля/раздела
│   │   │   ├─ /__tests__/      # Юнит-тесты компонентов
│   │   │   ├─ /styles/         # Стили компонентов
│   ├── /core/                  # Код ядра приложения
│   │   ├─ /config/             # Файлы конфигурации приложения
│   │   ├─ /lib/                # Утилиты
│   ├── /lib/                   # Верхнеуровневые скрипты
│   ├── /store/                 # Стор
│   │   ├─ /actions/            # Экшены
│   |   |  ├─ /actionTypes.js   # Все типы экшенов приложения
│   │   ├─ /reducers/           # Редьюсеры, селекторы
│   │   ├─ /sagas/              # Саги
│   ├── /styles/                # Scss стили не отдельных компонентов
├── /index.jsx                  # Точка входа в js код
```
