function checkAge() {
  let age = parseInt(prompt("Enter your age"));
  if (age != "") {
    //базовая проверка чтобы дальше не обрабатывать
    if (isNaN(age)) {
      alert("Enter valid age");
    } else if (age >= 0 && age < 12) {
      alert("You are a baby");
    } else if (age >= 12 && age < 18) {
      alert("You are a teenager");
    } else if (age >= 18 && age < 60) {
      alert("You are an adult");
    } else if (age >= 60) {
      alert("You are a pensioner");
    } else {
      alert("Age invalid");
    }
  } else {
    alert("Enter age");
  }
}

function specSymbol() {
  const number = parseInt(prompt("Enter number from 0 to 9"));
  let smbl = "";
  switch (number) {
    default:
      smbl = "Enter valid number";
      break;
    case 0:
      smbl = ")";
      break;
    case 1:
      smbl = "!";
      break;
    case 2:
      smbl = "@";
      break;
    case 3:
      smbl = "#";
      break;
    case 4:
      smbl = "$";
      break;
    case 5:
      smbl = "%";
      break;
    case 6:
      smbl = "^";
      break;
    case 7:
      smbl = "&";
      break;
    case 8:
      smbl = "*";
      break;
    case 9:
      smbl = "(";
      break;
  }
  alert(`${smbl}`);
}

function chkSmNmbrs() {
  let nmbr = parseInt(prompt("Enter three-digit number")),
    e = nmbr % 10,
    d = Math.floor((nmbr % 100) / 10),
    s = Math.floor(nmbr / 100);
  if (e === d || e === s || d === s) {
    alert("This number have same digits");
  } else {
    alert("This number doesn't have same digits");
  }
}

function leapYear() {
  let year = parseInt(prompt("Enter year"));
  if (isNaN(year)) {
    alert("Enter valid year");
  } else if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    alert("Year is leap");
  } else {
    alert("Year isn't leap");
  }
}

function isPlndrm() {
  let a = parseInt(prompt("Enter five-digits number")),
    e = a % 10,
    d = Math.floor((a % 100) / 10),
    s = Math.floor((a % 1000) / 100),
    t = Math.floor((a % 10000) / 1000),
    st = Math.floor(a / 10000),
    rvrs = e * 10000 + d * 1000 + s * 100 + t * 10 + st;
  if (isNaN(a)) {
    alert("Enter valid number");
  } else if (a < 10000) {
    alert("Enter number with five-digits");
  } else if (a == rvrs) {
    alert("Number is palindrome");
  } else {
    alert("Number isn't palindrome");
  }
}

function myConv() {
  let usd = parseFloat(prompt("Enter summ in USD")),
    cur = prompt("Enter currency: EUR/UAH/AZN"),
    rez = "";
  if (isNaN(usd)) {
    alert("Summ is invalid");
    return false;
  }
  if (cur == "EUR" || cur == "UAH" || cur == "AZN") {
  } else {
    alert("Enter valid currency");
    return false;
  }
  switch (cur) {
    case "EUR":
      rez = usd * 0.83;
      break;
    case "UAH":
      rez = usd * 27.62;
      break;
    case "AZN":
      rez = usd * 1.7;
      break;
    default:
      return false;
  }
  rez = rez.toFixed(2);
  alert(`You will got ${rez} ${cur}`);
}

function myDscnt() {
  let prch = parseFloat(prompt("Enter purchase ammount"));
  if (isNaN(prch) || prch < 0) {
    alert("Enter valid summ");
    return false;
  } else if (prch >= 200 && prch < 300) {
    dscnt = 0.03;
  } else if (prch >= 300 && prch < 500) {
    dscnt = 0.05;
  } else if (prch >= 500) {
    dscnt = 0.07;
  } else {
    dscnt = 0;
  }
  let topay = (prch - prch * dscnt).toFixed(2);
  alert(`Summ to pay ${topay}`);
}

function crFitSqr() {
  const PI = Math.PI;
  let crcl = parseFloat(prompt("Enter circle length")),
    sqr = parseFloat(prompt("Enter square perimetr")),
    d = (crcl / (2 * PI)) * 2,
    sd = sqr / 4;
  if (isNaN(crcl) || isNaN(sqr) || crcl < 0 || sqr < 0) {
    alert("Enter valid number");
    return false;
  } else if (d <= sd) {
    alert("Circle fits");
  } else {
    alert("Circle doesn't fit");
  }
}

function quiz() {
  let q1 = parseInt(prompt("2+2 = ? \r1) 3 \r2) 2 \r3) 4")),
    q2 = parseInt(prompt("10*1 = ? \r1) 1 \r2) 10 \r3) 5")),
    q3 = parseInt(prompt("15/5 = ? \r1) 3 \r2) 5 \r3) 1"));
  if (isNaN(q1) || isNaN(q2) || isNaN(q3)) {
    alert("Enter valid number");
    return false;
  } else if (q1 == 4 && q2 == 10 && q3 == 3) {
    a = 6;
  } else if (
    (q1 == 4 && q2 == 10) ||
    (q1 == 4 && q3 == 3) ||
    (q2 == 10 && q3 == 3)
  ) {
    a = 4;
  } else if (q1 == 4 || q2 == 10 || q3 == 3) {
    a = 2;
  } else {
    a = 0;
  }
  alert(`Your score = ${a}`);
}

function nextDate() {
  const date = prompt("Enter date: dd/mm/yyyy"),
    arDate = date.split("/"),
    d = parseInt(arDate[0]),
    m = parseInt(arDate[1]),
    y = parseInt(arDate[2]);
  let nd = (nm = ny = 0);
  nd = d + 1;
  nm = m;
  ny = y;
  let monthDays = 0;
  switch (m) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (nd > 31) {
        nd = 1;
        nm++;
      }
      break;
    case 2:
      if (isLeapYear(y) && nd > 29) {
        nd = 1;
        nm++;
      } else if (nd > 28) {
        nd = 1;
        nm++;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (nd > 30) {
        nd = 1;
        nm++;
      }
      break;
    default:
      console.log("Invalid month number: " + m);
      break;
  }
  if (nm > 12) {
    nm = 1;
    ny++;
  }
  nd = addZero(nd);
  nm = addZero(nm);
  alert(`${nd}/${nm}/${ny}`);
}

const addZero = (n) => (n < 10 ? "0" + n : n);
const isLeapYear = (year) =>
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) ? true : false;
