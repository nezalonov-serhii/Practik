/////////////////////////////////////////////////////////////Example 1 - Математические операторы

// Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;

// console.log(`Общее каличество ${total}`);
// const diff = grapes - apples;
// console.log(`Разница ${diff}`);

///////////////////////////////////////////////////////////// Example 2 - Комбинированные операторы

// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

///////////////////////////////////////////////////////////// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

///////////////////////////////////////////////////////////// Напиши скрипт

// который выводит в консоль округленные вверх / вниз и т.д.значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().Проверь что будет в консоли при значениях  и 27.9.

// const value = 27.6;
// console.log(Math.floor(value));  //Округляет в -
// console.log(Math.ceil(value));   //Округляет в +
// console.log(Math.round(value));  //Округляет как в матиматике

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = ` ${repairBots} has ${defenceBots} bots in stock`;
// console.log(message);

///////////////////////////////////////////////////////////// Example 6 - Методы строк и чейнинг

// Напиши скрипт который рассчитывает индекс массы тела человека. Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк(специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.
// Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = "88.3";
// let height = "1,75";

// weight = +weight.replace(",", ".");
// height = +height.replace(",", ".");
// console.log(height);

// const bmi = +(weight / Math.pow(height, 2)).toFixed(1);

// console.log(bmi); // 28.8

///////////////////////////////////////////////////////////// Example 7 - Операторы сравнения и приведение типов

// Каким будет результат выражений?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log('2' > '12'); //true

// console.log('2' < '12');  //false

// console.log('4' == 4); //true

// console.log('6' === 6); //false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false);  //true

// console.log('0' === false);  //false

// console.log('Papaya' < 'papaya');  //true

// console.log('Papaya' === 'papaya');  //false

// console.log(undefined == null);  //true

// console.log(undefined === null);  //false

///////////////////////////////////////////////////////////// Example 8 - Логические операторы

// Каким будет результат выражений?

// console.log(true && 3);     //true

// console.log(false && 3);    //false

// console.log(true && 4 && "kiwi");   //kiwi

// console.log(true && 0 && "kiwi");   //0

// console.log(true || 3);     //true

// console.log(true || 3 || 4);    //true

// console.log(true || false || 7);    //true

// console.log(null || 2 || undefined);    //2

// console.log((1 && null && 2) > 0);  //false

// console.log(null || (2 && 3) || 4); //true

///////////////////////////////////////////////// Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
// Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

///////////////////////////////////////////////////////Example 10 - Опертор % и методы строк

// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(`${hours}:${minutes}`)

/////////////////////////////////////////////      Модуль 1. Урок 2. Ветвления. Циклы    /////////////////////////////////

// Example 1 - Ввод пользователя и ветвления

// Используя конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в противном случае - "Не знаете? ECMAScript!"

// let message = prompt("Какое официальное название JavaScript?").toLowerCase();
// let question = "ECMAScript".toLowerCase();
// const answer = "Верно";
// const wrong = "Не знаете? ECMAScript!";

// if (message === question) {
//    alert(answer);
// } else {
//    alert(wrong);
// }

///////////////// Напиши скрипт для отображения часов и минут в консоли браузера в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0, то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 10;
// let timestring = `${hours} ч.`;

// if (minutes % 60) {
//    timestring = `${hours} ч. ${minutes} мин`;
// }

// console.log(timestring);

//////////////// Example 3 - Ветвеления

// Напиши скрипт, который выводит в консоль строку "Это положительное число", если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".Если передали отрицательное число, в консоли должна быть строка "Это отрицательное число".

// const userInput = +prompt('Введите число');

// let num;

// if (userInput === 0) {
//     num = 'Это ноль';
// }
// if (userInput > 0) {
//     num = "Это положительное число";
// }
// else {
//     num = "Это отрицательное число";
// }

// console.log(num)

////////////////// Example 4 - Вложенные ветвления

//Напиши скрипт, который сравнивает числа в переменных a и b.
//Если оба значения больше 100, то выведи в консоль максимальное из них.В противном случае в консоли должна быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a && b > 100) {
//    if (a > b) {
//       console.log(a);
//    } else {
//       console.log(b);
//    }
// } else {
//    console.log(b + 512);
// }

//////////////// Example 5 - Форматирование ссылки (endsWith)
//Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
//Если нет, добавь в конец значения link этот символ.Используй конструкцию if...else.

// let link = "https://my-site.com/about";

// if (!link.endsWith("/")) {
//     link = link + "/";
// }

// console.log(link);

////////////////Example 6 - Форматирование ссылки (includes и логическое «И»)
//Напиши скрипт который проверяет заканчивается ли значение переменной link символом /.
//Если нет, добавь в конец значения link этот символ, но только в том случае, если в link есть подстрока "my-site".Используй конструкцию if...else.

// let link = "https://somesite.com/about";

// if (link.includes("my-site") && !link.endsWith("/")) {
//     link += "/";
// }
// console.log(link);

//Example 7 - Форматирование ссылки (тернарный оператор)
//Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://somesite.com/about';

// link = link.includes('my-site') && !link.endsWith('/') ? link + "/" : link;

// console.log(link);

//////////////Example 8 - if...else и логические операторы

// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.
// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 10;

// if (hours < 17) {
//     console.log("Pending");
// } else if (hours >= 17 && hours <= 24) {
//     console.log("Expires");
// } else {
//     console.log("Overdue");
// }

////////////////Example 9 - Дедлайн сдачи проекта (if...else)
//Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 5;
// // Пиши код ниже этой строки
// if (daysUntilDeadline === 0) {
//    console.log("Сегодня");
// } else if (daysUntilDeadline === 1) {
//    console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//    console.log("Послезавтра");
// } else {
//    console.log("Дата в будущем");
// }

///////////Example 10 - Дедлайн сдачи проекта (switch)
//Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 5;

// switch (daysUntilDeadline) {
//    case 0:
//       console.log("Сегодня");
//       break;

//    case 1:
//       console.log("Завтра");
//       break;

//    case 2:
//       console.log("Послезавтра");
//       break;

//    default:
//       console.log("Дата в будущем");
//       break;
// }

////////////Example 11 - Цикл for
//Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// let five;

// for (let i = 20; i <= max; i += 1) {

//     if (i % 5 === 0) {
//         console.log(`Кратное 5: ${i}`);
//     }

// }

//////////////////// Example 12 - Ввод пользователя и ветвления

// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = "Админ";
// const password = "Я админ";

// let input = prompt("Введите логин");

// if (login === input) {
//    if (password === prompt("Введите пароль")) {
//       console.log("Здравствуйте!");
//    } else {
//       console.log("Неверный пароль");
//    }
// } else if (null === input) {
//    console.log("Отменено");
// } else {
//     console.log("Я вас не знаю");
// }
