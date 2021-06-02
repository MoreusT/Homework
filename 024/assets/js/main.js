/*
function addZero(n){
    return n<10?"0"+n:n;
}
*/

//task 1

function summOf() {
let n1 = parseInt(document.getElementById("summ_number1").value),
    n2 = parseInt(document.getElementById("summ_number2").value),
    valid = true,
    errMsg = "";
  if (isNaN(n1) || isNaN(n2)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    if(n1<n2){
      while(n1<=n2){
        rez+=n1;
        n1++
      };
    } else if (n2<n1) {
      while(n2<=n1){
        rez+=n2;
        n2++;
      };
    } else {
      rez+=n1;
    }
    document.getElementById("summ_rez").innerText = rez;
  } else {
    document.getElementById(
      "summ_rez"
    ).innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 2

function del() {
  const a = parseInt(document.getElementById("del_number1").value),
    b = parseInt(document.getElementById("del_number2").value);
  let rez = "",
    max = a > b ? a : b;
  while (max != 0) {
    if (a % max == 0 && b % max == 0) {
      rez += max;
      document.getElementById("del_rez").innerText = rez;
      return false;
    }
    max--;
  }
}

//task 3

function allDel() {
  const n = parseInt(document.getElementById("allDel_number").value);
  let rez = "";
  let i = n;
  while (i != 0) {
    if (n % i == 0) {
      rez += i + ", ";
    }
    i--;
  }
  document.getElementById("allDel_rez").innerText = rez;
}

//task 4

function hmDgts(n) {
  n = parseInt(n);
  if(isNaN(n)){
    return 'Enter valid number';
  }
  let i;
  for(i=0;n>=1;i++){
    n /= 10;
  }
  return i;
}

function digAmm() {
  let n = document.getElementById("digAmm_number").value,
   rez = "";
  rez = hmDgts(n);
  document.getElementById("digAmm_rez").innerText = rez;
}

//task 5

function cntNmbrs() {
  let rez = "",
  pos = 0,
  neg = 0,
  zero = 0,
  even = 0,
  odd = 0;
  for(let i=1;i<=10;i++){
    let n = parseInt(prompt(`Enter number ${i}`));
    if(n>0 && n%2==0){
      pos += 1;
      even += 1;
    } else if(n>0 && n%2!=0){
      pos += 1;
      odd += 1;
    } else if(n<0 && n%2==0){
      neg += 1;
      even += 1;
    } else if(n<0 && n%2!=0){
      neg += 1;
      odd += 1;
    } else if(n==0){
      zero += 1;
    } else {
      alert('Enter valid number!');
      return false
    }
  }
  rez = `
  <ul>
    <li>Положительных: ${pos}</li>
    <li>Отрицательных: ${neg}</li>
    <li>Нулей: ${zero}</li>
    <li>Чётных: ${even}</li>
    <li>Нечётных: ${odd}</li>
  </ul>`;
  document.getElementById("cntNmbrs_rez").innerHTML = rez;
}

//task 6

function calc(number1 = 0, action = "+", number2 = 0) {
  number1 = parseInt(number1);
  number2 = parseInt(number2);
  switch (action) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return false;
  }
}

function myCalc() {
  let flag;
  let rez = "";
  do {
    let a = prompt('Enter number 1'),
      act = prompt('Enter action'),
      b = prompt('Enter number 2');
    rez = calc(a, act, b);
    if (!rez && rez !== 0) {
      rez = "Incorrect action";
    }
    alert(rez)
    flag = confirm('Want to calculate more?')
  } while (flag)
  alert('You think you are smart enough, huh?!')
}

//task 7

function shiftNmbr(){
  const n = parseInt(document.getElementById("shift_n1").value),
    shft = parseInt(document.getElementById("shift_n2").value);
  let rez = "",
  koef = Math.abs(hmDgts(n) - shft),
  K = Math.pow(10, koef),
  a = parseInt(n / K),
  b = n % K,
  z = Math.pow(10, shft);
  rez = b * z + a;
  document.getElementById("shift_rez").innerHTML = rez;
}

//task 8

function nextDate() {
  let d = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let gd = d.getDay()
  let rez = weekday[gd];
  let flag;
  flag = confirm(`Today: ${rez}. Want to see next day?`)
  if(flag == false){
    return false;
  }
  do {
    if(gd<6){
      gd++;
    } else if(gd=6){
      gd=0;
    }
    rez = weekday[gd];
    flag = confirm(`Weekday: ${rez}. Want to see next day?`)
  } while (flag)
  alert('Alright, who cares')
}

//task 9

function multTbl() {
  let rez = '';
  for (let i = 2; i <= 9; i++) {
      rez += `
      <div class="multTbl_block">
          <ul>`;
          for (let j = 1; j <= 10; j++) {
              rez += `<li>${i} * ${j} = ${i * j}</li>`;
          }
      rez += `</ul>
      </div>
      `;
  }

  document.getElementById("multTbl_rez").innerHTML = rez;
}

//task 10

function findNmbr() {
  let n = parseInt(prompt('Enter number from 0 to 100')),
  f = 0,
  t = 100,
  m,
  answer,
  rez = 0;
  do{
    m = parseInt((t - f)/2 + f);
    answer = prompt(`1. My number is bigger than ${m}\r2. My number is smaller than ${m}\r3. My number is ${m}`);
    switch(answer){
      case "1":
        f = m;
        break;
      case "2":
        t = m;
        break;
      case "3":
        rez = m;
        break;
      default:
        return false;
    }
  } while (rez !== n)
  alert(`Your number is ${rez}`);
}