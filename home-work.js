// Замовлення турів:

// Пишемо реистрацію користувача за допомогою prompt.окремо логін та пароль

// Аналогічно пишемо логінізацію.записуемо логін та пороль та порівнюем їх з даними які були введені при авторізації.
// Якщо все вірно виводити що логінізація успішна якщо ні то знову запитуете дані

// Записуемо максимальну суму, яку готовій вітратити користувач на тур.

// Виводимо список усіх країн в alert, які доступні по сумі для користувача

// Вказуемо краЇну через промт і купляемо тур

// Виводимо повідомленя, що тур оплачений і залишок на рахунку користувача

const countries = [
   "Ukraine",
   "Poland",
   "Croatia",
   "Montenegro",
   "France",
   "USA",
];

const countriesPrice = [100, 200, 300, 400, 500, 600];

let userName;
let userPass;
let userCredits;
let userCountry;
let maxPrice = "Вам доступні: ";

//Реистрация
const clientInDatabase = prompt("Реистрація: Введіть Логін");
const passInDatabase = prompt("Реистрація: Введіть Пароль");
console.log(typeof passInDatabase);

// Логинизація
function loginIn(clientInDatabase, userName) {
   if (clientInDatabase === userName && clientInDatabase !== null) {
      console.log("Логін - ok");
   } else {
      alert("Такого Користувача не знайдено спробуйте ще");
      loginIn(clientInDatabase, (userName = prompt("Вхід: Введіть Логін")));
   }
}

function passIn(passInDatabase, userPass) {
   if (passInDatabase === userPass && passInDatabase !== null) {
      console.log("Пароль - ok");
   } else {
      alert("Невірний пароль спробуйте ще");
      passIn(passInDatabase, (userPass = prompt("Вхід: Введіть Пароль")));
   }
}

loginIn(clientInDatabase, (userName = prompt("Вхід: Введіть Логін")));
passIn(passInDatabase, (userPass = prompt("Вхід: Введіть Пароль")));

// Запитуемо скільки в юзера грошей
userCredits = prompt("Яку суму ви готові вітратити на тур");

// Створюємо список доступних країн
for (let i = 0; i < countriesPrice.length; i += 1) {
   if (userCredits >= countriesPrice[i]) {
      maxPrice += `${countries[i]}:${countriesPrice[i]} `;
   }
}

const userPriceNotMoney = "Нажаль вам недостатньо коштів";

if (userCredits > 100) {
   // alert(maxPrice);
   userCountry = prompt(
      `Вкажіть країну в яку хочете відправитіся. ${maxPrice}`
   );

   for (let i = 0; i < countries.length; i += 1) {
      if (countries[i] === userCountry) {
         if (userCredits > countriesPrice[i]) {
            userCredits -= countriesPrice[i];
            alert(
               `Дякую що замовили тур до ${countries[i]} на вашому рахунку залишилося ${userCredits}`
            );
         } else {
            alert(
               `Вам недостатьньо коштів. На вашому рахунку ${userCredits}. Для того щоб відправитися до ${userCountry}  Вам потрібно Додати ще ${
                  countriesPrice[i] - +userCredits
               }`
            );
         }
      }
   }
} else {
   alert(userPriceNotMoney);
}
