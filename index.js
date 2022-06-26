/**
 * Обработка любой не выявленной ошибки
 */

/**
 * Использование функции вместо класса для создания объектов
 */
function usingFunctionInsteadOfClass() {
    function func(data) {
        this.data = data
    }
    let object = new func() // Вернет this
}

/**
 * Примитивные типы данных не содержат каких-либо свойств, но при обращении к ним str.toUppercase() вокруг примитива создаётся объект обёртка
 */
/**
 * У стрелочных функций нет this
 */
/**
 * arr.indexOf(elem) вернёт порядковый номер элемента
 */

/**
 * arr.reduce(previousValue,value, index =>{}) для вычисления общего из всех эелемнтов
 */

/**
 * str.trim() уберет пробелы в начале и конце
 */

/**
 * У однострочной стрелочной функции return можно не вызвать, она сама вернёт результат
 */

/**
 * "get…" – возвращают значение,
"calc…" – что-то вычисляют,
"create…" – что-то создают,
"check…" – что-то проверяют и возвращают логическое значение, и т.д
Show...
 */

/**
 * let i = Symbol ()
 */

/**
 * Object.getOwnPropertySymbols(obj) вернёт все символьные свойства объекта
Reflect.ownKeys(obj) вообще все вернёт
 */

/**
 * Массив может содержать ключ со значением [1,2,i:77,9] , но это его замедлит
 */

/**
 * Array.from(obj) сделает массив из чего угодно
 */

/**
 * new Map вернёт объект, но у него ключи не преобразуются в строки а останутся заданными типами данных
 */

/**
 * new Set создаст массив где каждое значение может быть только один раз, без дубликатов
 */

/**
 * Object.fromEntries(arr) создаст объект из массива
Object.entries(obj) вернёт массив [ключ, пара]
 */

/**
 * Деструктуризация
 */
function extraOptions() {
    let [a, b, ...c] = [1, 2, 3, 4, 5]
    console.log(c) // 3,4,5
}

/**
 *
 */
function defaultVariablesFromObject() {}
let fruits = { apple: 11, banana: 4, orange: 13, cherry: 2 }
let { apple = 0, banana: a, ...others } = fruits // также задано значение по умолчанию для apple и banana присвоено переменной a

/**
 * Пример использования дуструктуризации
 */
function destructurizaziya({ title = 'untiteled', items: [item1, item2] }) {}

/**
 * преобразоввани массива с список при помощи ...
 */
function threeDots() {
    let arr = [3, 5, 1]
    alert(Math.max(arr)) // NaN
    alert(Math.max(...arr)) //так заработает
    //...arr преобразует массив в список элементов
    //... Работает только с итерируемыми
}

/**
 *  В JavaScript у каждой выполняемой функции, блока кода и скрипта есть связанный с ними внутренний (скрытый) объект, называемый лексическим окружением LexicalEnvironment.
Объект лексического окружения состоит из двух частей:
Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).
Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок)
 */

/**
 * new function(str) принимает строку в качестве аргумента и в строке передается код функции. Т.е. из строки можно сделать функцию
 */
function newFunction() {
    let func = new Function('console.log("WAAT")')
    func()
}

/**
 * Декоратор - обертка функции. Это новая функция - которая примет на вход другую и return function(x){}
 */
function decoratorExample() {
    function printYourStr(str) {
        console.log(str)
    }

    function decorator(func) {
        return function (x) {
            x = `++${x}++`
            func(x)
        }
    }

    printYourStr('HEY') // HEY
    printYourStr = decorator(printYourStr)
    printYourStr('HEY') // ++HEY++
}

/**
 * func.call(this,arg,arg) дает возможность установить контекст(this) выполнения
 */

/**
 * Чтобы избежать изменения контекста в функции
let user = {
  firstName: "Вася",
  sayHi() {
    alert(`Привет, ${this.firstName}!`);}};
setTimeout(() => user.sayHi(), 1000);
// ...в течение 1 секунды
user = { sayHi() { alert("Другой пользователь в 'setTimeout'!"); } };
// Другой пользователь в 'setTimeout'!
Можно использовать func.bind(context)
 */
function bindingContext() {
    let user = {
        firstName: 'Вася',
        sayHi_binded() {
            console.log(`Привет, ${this.firstName}!`)
        },
        sayHi() {
            console.log(`Привет, ${this.firstName}!`)
        },
    }

    setTimeout(() => {
        user.sayHi()
        user.sayHi_binded()
    }, 1000)
    user.sayHi_binded.bind(user.firstName)
    user.firstName = 'Алёна'
    //func.bind(context)
}

/**
 * Прототипное наследнование
 */
function protoInheritance() {
    let animal = {
        eats: true,
    }
    let rabbit = {
        jumps: true,
        __proto__: animal, // rabbit наследует animal
    }

    rabbit.__proto__ = animal // rabbit наследует animal

    function Rabbit(name) {
        this.name = name
        this.prototype = animal // prototype превратится в __proto__ только после создания объекта с оператором new
    }

    Rabbit.prototype = animal

    let rabbit1 = new Rabbit('White Rabbit')

    let rabbit2 = new rabbit1.constructor('Black Rabbit') // можно создать объект из конструктора другого объекта
}

/**
 *
 */
function objPrototype() {
    let arr = []
    console.log(arr.__proto__ === Array.prototype) //true
}

/**
 * Современные же методы это:
 Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], указанным как proto, и необязательными дескрипторами свойств descriptors.
 Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
 Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.
 */

/**
 * Обработка любой не пойманной ошибки
 */
process.on('uncaughtException', (err, data) => {
    console.log('heheY', err, data)
})

/** global keys:
 * [
  'Object',               'Function',          'Array',
  'Number',               'parseFloat',        'parseInt',
  'Infinity',             'NaN',               'undefined',
  'Boolean',              'String',            'Symbol',
  'Date',                 'Promise',           'RegExp',
  'Error',                'AggregateError',    'EvalError',
  'RangeError',           'ReferenceError',    'SyntaxError',
  'TypeError',            'URIError',          'globalThis',
  'JSON',                 'Math',              'console',
  'Intl',                 'ArrayBuffer',       'Uint8Array',
  'Int8Array',            'Uint16Array',       'Int16Array',
  'Uint32Array',          'Int32Array',        'Float32Array',
  'escape',               'unescape',          'eval',
  'isFinite',             'isNaN',             'global',
  'process',              'Buffer',            'atob',
  'btoa',                 'URL',               'URLSearchParams',
  'TextEncoder',          'TextDecoder',       'AbortController',
  'AbortSignal',          'EventTarget',       'Event',
  'MessageChannel',       'MessagePort',       'MessageEvent',
  'clearInterval',        'clearTimeout',      'setInterval',
  'setTimeout',           'queueMicrotask',    'performance',
  'clearImmediate',       'setImmediate',      'SharedArrayBuffer',
  'Atomics',              'WebAssembly'
]
 */

/**
 * Выполнение и создание процессов
 */
import path from 'path'
import fs from 'fs'
import { exec, spawn } from 'child_process'

/**exec - чтобы 1 раз выполнить команду и вернуть результат */
function execExample() {
    exec(`node child.js ${'jopa'}`, (err, stdout, stderr) => {
        console.log(stdout)
    })
    exec('pwd', (err, stdout, stderr) => {
        console.log('heheY', err, stdout, stderr)
    })
}

/** Собитино ориентированный spawn */
function spawnExample() {
    let child = spawn('node', ['child.js', 'POPO'])
    child.stdout.on('data', (data) => {
        console.log(String(data))
    })
}
