$(function () {
    $("#time_n").mask('99:99:99');
});

// task 1

const car = {
    Manufacturer: "Nissan",
    Model: "GT-R NISMO",
    Year: "2020",
    "Average speed": 120
};

function printCar() {
  let h = "<ul>";
  for (let k in car) {
    h += `<li><b>${k}: </b>${car[k]}</li>`;
  }
  h += "</ul>";
  document.getElementById("car_rez").innerHTML = h;
}
  
function carDist() {
  let km = parseInt(document.getElementById("carDist_n").value),
    valid = true,
    errMsg = "";
  if (isNaN(km)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    pTime = km / car["Average speed"];
    pTime = parseInt(pTime);
    tDist = pTime / 4 + pTime;
    rez = parseInt(tDist);
    document.getElementById("carDist_rez").innerText = rez;
  } else {
    document.getElementById("carDist_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

// task 2

function genDel(a, b) {
    let max = a > b ? a : b;
    while (max != 0) {
      if (a % max == 0 && b % max == 0) {
        rez = max;
        return rez;
      }
      max--;
    }
}

const fraction = {
    fr1: {
        dev: 2,
        den: 3
    },
    fr2: {
        dev: 4,
        den: 8
    },
    add(){
        let rez = {dev: 0, den: 0};
        let a = this.fr1.dev * this.fr2.den + this.fr2.dev * this.fr1.den;
        let b = this.fr1.den * this.fr2.den;
        rez = {dev: a, den: b};
        return rez;
    },
    subtr(){
        let rez = {dev: 0, den: 0};
        let a = this.fr1.dev * this.fr2.den - this.fr2.dev * this.fr1.den;
        let b = this.fr1.den * this.fr2.den;
        rez = {dev: a, den: b};
        return rez;
    },
    mult(){
        let rez = {dev: 0, den: 0};
        let a = this.fr1.dev * this.fr2.dev;
        let b = this.fr1.den * this.fr2.den;
        rez = {dev: a, den: b};
        return rez;
    },
    split(){
        let rez = {dev: 0, den: 0};
        let a = this.fr1.dev * this.fr1.den;
        let b = this.fr2.den * this.fr2.dev;
        rez = {dev: a, den: b};
        return rez;
    },
    reduc(){
        let rez = {dev: 0, den: 0};
        let a = this.fr2.dev;
        let b = this.fr2.den;
        let del = genDel(a, b);
        a /= del;
        b /= del;
        rez = {dev: a, den: b};
        return rez;
    }    
}

function printFraction() {
    let arez = fraction.add(),
        subrez = fraction.subtr(),
        mrez = fraction.mult(),
        splrez = fraction.split(),
        redrez = fraction.reduc(), 
    h = `<ul>
        <li><b>Дробь 1:</b> числитель - ${fraction.fr1.dev}, знаменатель - ${fraction.fr1.den}</li>
        <li><b>Дробь 2:</b> числитель - ${fraction.fr2.dev}, знаменатель - ${fraction.fr2.den}</li>
        <li><b>Результаты:</b></li>
        <li>- Сложения: ${arez.dev}/${arez.den}</li>
        <li>- Вычитания: ${subrez.dev}/${subrez.den}</li>
        <li>- Умножения: ${mrez.dev}/${mrez.den}</li>
        <li>- Деления: ${splrez.dev}/${splrez.den}</li>
        <li>- Сокращения второй дроби: ${redrez.dev}/${redrez.den}</li>
    </ul>`;
    document.getElementById("printFraction_rez").innerHTML = h;
}

// task 3

const addZero = (n) => (n < 10 ? "0" + n : n);

function timeAddZero(h = 0, m = 0, s = 0) {
  n = addZero(h)+':'+addZero(m)+':'+addZero(s);
  return n;
}

function tTS(h = 0, m = 0, s = 0){
  n = h*3600+m*60+s;
  return n;
}

function sTT(n){
  h = parseInt(n / 3600);
  m = parseInt(n / 60 - h * 60);
  s = parseInt(n - (h*3600+m*60));
  n = timeAddZero(h, m, s);
  return n;
}

const time = {
    h:'00',
    m:'00',
    s:'00',
    setTime(time_str){
        let timeArr = time_str.split(':');
        this.h = timeArr[0];
        this.m = timeArr[1];
        this.s = timeArr[2];
    },
    showTime(){
      let t = document.getElementById("time_n").value,
        valid = true,
        errMsg = "";
      if (t==="") {
        errMsg += "Enter time!";
        valid = false;
      }
      if (valid) {
        this.setTime(t);
        let rez = this.h+':'+this.m+':'+this.s;
        document.getElementById("showTime_rez").innerText = rez;
      } else {
        document.getElementById("showTime_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
      }
    },
    addSec(){
        let sec = parseInt(document.getElementById("sec_n").value),
            valid = true,
            errMsg = "";
        if (isNaN(sec)) {
            errMsg += "Enter secconds!";
            valid = false;
        }
        if (valid) {
            rez = 0;
            let nh = parseInt(this.h),
                nm = parseInt(this.m),
                ns = parseInt(this.s);
            let scnds = tTS(nh, nm, ns);
            scnds += sec;
            rez = sTT(scnds);
            this.setTime(rez);
            document.getElementById("timeSec_rez").innerText = rez;
        } else {
            document.getElementById("timeSec_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
        }
    },
    addMin(){
        let min = parseInt(document.getElementById("min_n").value),
            valid = true,
            errMsg = "";
        if (isNaN(min)) {
            errMsg += "Enter minutes!";
            valid = false;
        }
        if (valid) {
            rez = 0;
            let nh = parseInt(this.h),
                nm = parseInt(this.m),
                ns = parseInt(this.s);
            let scnds = tTS(nh, nm, ns);
            scnds += min * 60;
            rez = sTT(scnds);
            this.setTime(rez);
            document.getElementById("timeMin_rez").innerText = rez;
        } else {
            document.getElementById("timeMin_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
        }
    },
    addHour(){
        let hour = parseInt(document.getElementById("hour_n").value),
            valid = true,
            errMsg = "";
        if (isNaN(hour)) {
            errMsg += "Enter hour!";
            valid = false;
        }
        if (valid) {
            rez = 0;
            let nh = parseInt(this.h),
                nm = parseInt(this.m),
                ns = parseInt(this.s);
            let scnds = tTS(nh, nm, ns);
            scnds += hour * 3600;
            rez = sTT(scnds);
            this.setTime(rez);
            document.getElementById("timeHour_rez").innerText = rez;
        } else {
            document.getElementById("timeHour_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
        }
    }
}