## Promises

**JavaScript** - синхронный однопоточный язык программирования, который позволяет писать код как в функциональном , так и в ООП стиле. Соответственно движок не может делать две задачи одновременно и параллельно. 

**Запросы на сервер**
Все запросы, которые делаются в JS во внешний мир приходят к объекту `XMLHttpRequest`. Это низкоуровневый объект, с помощью которого под капотом и делаются AJAX запросы.

С приходом ES6 JS предоставил две новый функциональности:
- `JS Fetch` (позволил сократить кол-во кода и избавиться от коллбэков с переходом на работу с промисами.)
- `JS Promise` - специальный **объект** JS для работы с асинхронным кодом.

`PromiseState` - состояние промиса - специфическое свойство объекта промис, которое указывает, в каком состоянии находится промис. По умолчанию - `pending` (ожидание того, что случится и изменит его состояние).

У промиса может быть два состояния:
1. `pending`
2. `fulfilled` (заполнено)
    
В свою очередь `fulfilled` делится на два:
1. `resolve`
2. `reject` 

> ⚠️ Как только объект промис изменил состояние с `pending` на любое другое, он никогда и ни при каких обстоятельствах уже это состояние не изменит.

- За изменение состояния промиса отвечают коллбэки `resolve()` и `reject()`.

- Функции `resolve()` и `reject()` принимают либо 0 аргументов, либо 1 ; то есть не более оюного. Но этот аргумент может быть абсолютно любого типа. 

- Вызовы `resolve()` и `reject()` не отанавливают выполнение кода. Но правильнее будет описывать логику перед вызовами этих функций и использовать их как логическое завершение.

### Методы промисов
- Метод `then` может обрабатывать как положительные промисы, так и промисы с ошибкой. Для этого в себя он принимает два коллбэка.
- Первый коллбэк отвечает за работу с положительным исходом (промисом). Входящим в этот коллбэк аргументом будет то значение, которое было передано в функцию `resolve()`.
- Сам по себе объект промис относится к так называемым `микрозадачам`. Это значит, что он выполняется после обычных задач (`макрозадач`).
- Каждый коллбэк, который находится в методах промиса (`then`,`catch`, `finally`), если он доходит до конца, до явного или неявного `return`, он возвращает новый объект промиса в состоянии `resolve` с тем значением, которое этот коллбэк возвращает. Это позволяет делать `promise chaining` (цепочку промисов).
- `promise chaining` может понадобиться тогда, когда нам нужно сделать несколько запросов, и каждый последующий запрос зависит от результата предыдущего.
- При осуществлении промисификации, если мы делаем явный `return` объекта `promise` через `new Promise()`, то он всегда возвращается состоянии `pending`.
- Когда дело касается явного или неявного `return`, но не промиса, а какого-то другого значения, то это значение всегда оборачивается в объект промиса в состоянии `resolve`. И таким образом цепочка продолжается
- Метод `then` через запятую принимает второй коллбэк, который принимает ошибку. В этот коллбэк передается значение ошибки, которое было передано в `reject()`. Этот коллбэк работает аналогично коллбэку для положительного промиса. То есть он также возвращает промис, если доходит до явного или неявного `return`.
- Важно: этот второй коллбэк перехватывает ошибки, которые находятся по цепочке выше (методах `then` или в самом промисе) , но не в этом же методе `then`. И чтобы обработать/перехватить ошибку, допущенную в текущем методе `then`, нужно эту ошибку перехватывать в последующем по цепочке методе `then` также используя для этого второй коллбэк в этом методе.
- Если смотреть, как обрабатываются ошибки, то ошибка, которая случилась на любом из этапов цепочки промисов, пролетает всю цепочку до ближайшего обработчика ошибок.
- Ни в коем случае нельзя оставлять промисы без обработки ошибок. Можно создать обработчик ошибки на самом последнем этапе цепочки. Для этого создается `then`, который вместо первого коллбэка будет принимать `null` (не обрабатывает положительный промис), а уже во втором коллбэке будет логика обработки ошибки. По сути такой `then` является полным аанлогом метода `catch`, но в `catch` не нужно явно прописывать `null`, так как `catch` принимает только один коллбэк.
- Метод `catch` позволяет более наглядно разделить, где обрабатываются ошибки. 
- Данные из одного `then` не доступны в другом `then`. Соответственно, нужно либо передавать данные через `return`, либо использовать внешние глобальные переменные.
- метод `finally` срабатывает в любой точке, где он будет стоять, независимо от того, какой промис идет по цепочке за-`resolve`-леный или за-`reject`-еный.
- Коллбэк метода `finally` не принимает ничего, соответственно не может воздействовать на текущий промис и как-то его изменять. Также явный или неявный `return` этого коллбэкв не создает новый промис.
- Основное назначение метода `finally` - делать side-effects, которые не зависят от данных в промисе.
- **ВАЖНО:** Если в теле метода `finally` будет допущена какая-то ошибка, метод `finally` подменит входящий в него текщий промис на другой, который будет за-`reject`-ен этой ошибкой.
- `throw` - оператор генерирования ошибки (вызов Exception). 
- `new Error` - правильная упаковка объекта ошибки.


Функции `setTimeout()`, `setInterval()`, `clearTimeout()`,`clearInterval()` в JS **нет**. Эти функции предоставляет каждый браузер свои. То же делает и Node JS. С точки зрения FrontEnd это еще называют `внешнее браузерное API` или `макротаски`. Доступны они именно с глобального объекта.


