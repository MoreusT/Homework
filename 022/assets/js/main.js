function myName() {
  let Name = prompt("Введите ваше имя");
  alert(`Привет, ${Name}!`);
}

function myAge() {
  let myYear = parseInt(prompt("Введите год рождения")),
    today = new Date();
  const year = today.getFullYear();
  let age = year - myYear;
  alert(`Ваш возраст: ${age}`);
}

function mySquare() {
  let side = parseFloat(prompt("Введите длину стороны квадрата")),
    rez = side * 4;
  alert(`Периметр квадрата = ${rez}`);
}

function myCircle() {
  const PI = Math.PI;
  let radius = parseFloat(prompt("Введите радиус окружности")),
    area = PI * radius ** 2;
  alert(`Площадь круга = ${area}`);
}

function mySpeed() {
  let km = parseFloat(prompt("Расстояние в км")),
    time = parseFloat(prompt("За сколько хотите добраться?")),
    speed = km / time;
  alert(`Скорость с которой нужно ехать: ${speed}`);
}

function myConv() {
  let dol = parseFloat(prompt("Колличество долларов")),
    rez = dol * 0.83;
  alert(`Эвро получите: ${rez}`);
}

function myFiles() {
  let gb = parseFloat(prompt("Место в Gb")),
    space = gb * 1024,
    file = 820,
    rez = Math.floor(space / file);
  alert(`Файлов поместится: ${rez}`);
}

function myChoco() {
  let money = parseFloat(prompt("Сколько у вас денег?")),
    price = parseFloat(prompt("Сколько стоит шоколадка?")),
    choco = Math.floor(money / price),
    monleft = (money % (price * choco)).toFixed(2);
  alert(`Можно купить: ${choco}; Денег останется: ${monleft}`);
}

function myBckwrd() {
  let summ = parseInt(prompt("Введите трьохзначное число")),
    last = summ % 10,
    scnd = Math.floor((summ % 100) / 10),
    fst = Math.floor(summ / 100),
    rez = last * 100 + scnd * 10 + fst;
  alert(`${rez}`);
}

function myPrcnt() {
  let summ = parseFloat(prompt("Введите сумму денег")),
    mnth = parseFloat(prompt("Введите колличество месяцев")),
    prcntyr = parseFloat(prompt("Введите ставку % годовых")),
    prcntmnth = summ / 100 * prcntyr / 12,
    rez = (prcntmnth * mnth).toFixed(2);
  alert(`Сумма начисленных процентов: ${rez}`);
}
