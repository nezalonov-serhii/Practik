/////////////////////////// Example 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.
// const genress = ["«Jazz»", "«Blues»"];

// genress.push("«Рок-н-ролл»");

// console.log(genress[0]);

// console.log(genress[genress.length - 1]);

// const deletedGenress = genress.splice(0, 1);

// console.log(deletedGenress);

// genress.splice(0, 0, '«Country»', '«Reggae»');

// console.table(genress);

///////////////////////////Example 2 - Массивы и строки

// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = "8 11";

// const rectangle = values.split(" ");

// const square = rectangle[0] * rectangle[1];

// console.table(square);

////////////////////////////// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//    console.log(`${i + 1}: ${fruits[i]}`);
// }

///////////////////////////////// Example 4 - Массивы и циклы

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.Количество имен и телефонов гарантированно одинаковое.

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const namesArray = names.split(",");

// const phonesArray = phones.split(",");

// for (let i = 0; i < nameArray.length; i += 1) {
//    console.log(`${namesArray[i]}: ${phonesArray[i]}`);
// }

///////////////////////////////Example 5 - Массивы и строки

//Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
//Результирующая строка не должна начинаться или заканчиваться пробельным символом.Скрипт должен работать для любой строки.

// const strings = "Welcome to the future";

// let massage = strings.split(" ");

// massage = massage.splice(1, massage.length && massage.length - 2).join(' ');

// console.log(massage);

///////////////////////////////Example 6 - Массивы и строки
//Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';

// let masseges = string.split('')
// let stringMassege = '';

// for (let i = masseges.length - 1; i >= 0; i -= 1) {

//     stringMassege += masseges[i];
// }

// console.log(stringMassege);

/////////////////////////////Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

// let massege = "";

//////////////////////////////Напиши скрипт поиска самого маленького числа в массиве.

//Код должен работать для любого массива чисел.Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];

// let min = 10000;

// for (let i = 0; i < numbers.length + 1; i += 1) {
//    if (numbers[i] < min) {
//       min = numbers[i];
//    }
// }
// console.log(min); // 1

// Напишіть 3 цикла:
// 1й цикл: выводить в консоль числа від max до min по зменшеню (убыванию).
// 2й цикл: виводить в консоль усі парні (четные) числа від min до max.
// 3й цикл: виводить в консоль суму усіх парних (четных) чисел від min до max

// const max = 50;
// const min = 23;
// let sum = 0;

// for (let i = max; i >= min; i -= 1) {
//    console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//    if (i % 2 === 0) console.log(i);
// }

// for (let i = min; i <= max; i += 1) {
//    if (i % 2 === 0);
//    sum += i;
// }

// console.log(sum);

// // Юзер має ввести суму коштів, яка є на його картці та ціну за 1 літр бензину на АЗС.
// // Виведіть інфу, яка проінформує скільки бензину він може максимально купити, скільки грошей
// // у нього залишиться та який бонус буде йому нараховано, якщо він є учасником прог. лояльності.
// // Боусація: За кожен оплачений літр бензину користувач отримує нарахування - 2% від вартості.
// let isLoyalty = true;
// const costPetrol;
// const userMaxPrice;

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом(параметр string),
// і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//    // Change code below this line
//    let stringArr = string.split(" ");
//    let maxString = stringArr[0];

//    for (let i = 0; i < stringArr.length; i += 1) {
//       let maxStringI = stringArr[i];

//       if (maxString.length < maxStringI.length) {
//          maxString = stringArr[i];
//       }
//    }
//    return maxString;
//    //    console.log(maxString);
//    // Change code above this line
// }

// console.log(
//    findLongestWord(
//       "sad assaass sdasd asdksalp asawssds 11111111111111111111111111"
//    )
// );

// function createArrayOfNumbers(min, max) {
//    const numbers = [];
//    // Change code below this line
//    for (let i = min; i <= max; i += 1) {
//       numbers.push(i);
//    }

//    // Change code above this line
//    return numbers;
// }

// console.log(createArrayOfNumbers(21, 56));

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив
// в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// function filterArray(numbers, value) {
//    // Change code below this line
//    let result = [];

//    for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//          result.push(numbers[i]);
//       }
//    }
//    return result;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));
// Change code above this line

// function getCommonElements(array1, array2) {
//    // Change code below this line
//    let result = [];

//    for (let i = 0; i < array1.length; i += 1) {
//       if (array2.includes(array1[i])) {
//          result.push(array1[i]);
//       }
//    }
//    return result;

//    // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//    let total = 0;
//    // Change code below this line

//    for (const price of order) {
//       total += price;
//    }

//    // Change code above this line
//    return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); //повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //повертає 1116

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє,
// чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//    // Change code below this line

//    for (let i = 0; i < array.length; i += 1) {
//       let result = 0;
//       if (value === array[i]) {
//          result = array[i];
//          if (result === undefined) {
//             result = false;
//          }
//          return Boolean(result);
//       }
//    }
//    return false;
//    // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); //повертає true
// console.log(includes([1, 2, 3, 4, 5], 17)); //повертає false
// console.log(
//    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// ); //повертає true
// console.log(
//    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// ); //повертає false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); //повертає true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); //повертає false

/////////////////////////////////////////////////////////////////////////////////////// Модуль 2. Заняття 4. Функції

// Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки.Не цілі числа можуть бути задані у вигляді 24.7 або 24, 7
// тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// const arrNormalaze = [];

// function stringToArray(...arr) {
//    normalizeCommaToDot(arr);
// }

// function normalizeCommaToDot(num) {
//    for (let i = 0; i < num.length; i += 1) {
//       arrNormalaze[i] = num[i].replaceAll(",", ".");
//    }
// }

// function calcBMI(weight, height) {
//    stringToArray(weight, height);
//    return +(arrNormalaze[0] / Math.pow(arrNormalaze[1], 2)).toFixed(1);
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi); // 28.8

///////////////////////////////////////////Напиши функцію min(a,b), яка повертає найменше з чисел a та b.

// function minNum(a, b) {
//    let result = a;
//    if (a > b) result = b;
//    return result;
// }

// console.log(minNum(2, 5)); // 2
// console.log(minNum(3, -1)); // -1
// console.log(minNum(1, 1)); // 1

////////////////////////////////////////////Example 3 - Площа прямокутника

// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка.Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//    const array = dimensions.split(" ");

//    return array[0] * array[1];
// }

// console.log(getRectArea("8 11"));

//////////////////////////////////////////////////////////////// Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
// який для кожного елемента масиву буде виводити в консоль повідомлення у форматі < номер елемента > - <значення елемента >.
// Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//    let result = [];
//    for (let i = 0; i < items.length; i += 1) {
//       result[i] = `${i + 1}: ${items[i]}`;
//    }
//    return result;
// }

// console.table(logItems(["Mango", "Poly", "Ajax"]));
// console.table(logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]));

// Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
// У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//    let result = [];
//    for (let i = 0; i < nameToArr(names).length; i += 1) {
//       result.push(`${nameToArr(names)[i]}: ${phonesToArr(phones)[i]}`);
//    }
//    return result;
// }

// function nameToArr(names) {
//    return names.split(",");
// }

// function phonesToArr(phones) {
//    return phones.split(",");
// }

// console.log(
//    printContactsInfo(
//       "Jacob,William,Solomon,Artemis",
//       "89001234567,89001112233,890055566377,890055566300"
//    )
// );

////////////////////////////////////////////////////////////////////////Example 6 - Пошук найбільшого елемента

//Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//    let maxNumber = numbers[0];
//    for (let i = 0; i < numbers.length; i += 1) {
//       if (maxNumber < numbers[i]) maxNumber = numbers[i];
//    }
//    return maxNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

///////////////////////////////////////////////////////////////////////////Example 7 - Середнє значення

// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
// Усі аргументи будуть лише числами.

// function calAverage(...arr) {
//    let result = 0;
//    for (const number of arr) {
//       result += number / arr.length;
//    }
//    return result;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// function formatTime(totalMinutes) {
//    const hours = Math.floor(totalMinutes / 60);
//    const minutes = totalMinutes % 60;

//    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}`; //padStart; работают со строкой
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(cours) {
//    for (let i = 0; i < courses.length; i += 1) {
//       if (!courses.includes(cours)) {
//          courses.push(cours);
//       }
//    }
//    return "Ви вже маєте такий курс";
// }

// function removeCourse(cours) {
//    for (let i = 0; i < courses.length; i += 1) {
//       if (courses[i].includes(cours)) {
//          courses.splice(i, 1);
//       }
//    }
//    return "Курс із таким ім'ям не знайдено";
// }

// function updateCourse(oldName, newName) {
//    for (let i = 0; i < courses.length; i += 1) {
//       if (courses[i].includes(oldName)) {
//          return courses.splice(i, 1, newName);
//       }
//    }
// }

// addCourse("Express");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse("CSS")); // 'Ви вже маєте такий курс'

// removeCourse("React");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse("Vue")); // 'Курс із таким ім'ям не знайдено'

// updateCourse("Express", "NestJS");
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

function countPositivesSumNegatives(input) {
   // your code here
   let sumPositiv = 0;
   let sumNegativ = 0;
   let sumArr = [];
   for (let i = 0; i < input.length; i += 1) {
      if (input[i] == 0) continue;
      else if (input[i] > 0) {
         sumPositiv += input[i];
      } else sumNegativ -= input[i];
   }
   sumArr.push(sumPositiv);
   sumArr.push(-sumNegativ);
   return sumArr;
}

console.log(
   countPositivesSumNegatives([
      0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
   ])
);
