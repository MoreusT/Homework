//task 1

function compare() {
  let n1 = parseInt(document.getElementById("compare_n1").value),
    n2 = parseInt(document.getElementById("compare_n2").value),
    valid = true,
    errMsg = "";
  if (isNaN(n1) || isNaN(n2)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    if (n1 < n2) {
      rez = -1;
    } else if (n1 > n2) {
      rez = 1;
    } else {
      rez;
    }
    document.getElementById("compare_rez").innerText = rez;
  } else {
    document.getElementById("compare_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 2

function fact() {
  let n = parseInt(document.getElementById("fact_n").value);
    valid = true,
    errMsg = "";
  if (isNaN(n)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 1;
    if (n == 0) {
      rez;
    } else {
      for (let i = n; i > 1; i--) {
        rez *= n;
        n--;
      }
    }
    document.getElementById("fact_rez").innerText = rez;
  } else {
    document.getElementById("fact_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 3

function glueDig(){
  let n1 = parseInt(document.getElementById("glueDig_n1").value),
    n2 = parseInt(document.getElementById("glueDig_n2").value),
    n3 = parseInt(document.getElementById("glueDig_n3").value),
    valid = true,
    errMsg = "";
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    
    rez = n1 * 100 + n2 * 10 + n3;

    document.getElementById("glueDig_rez").innerText = rez;
  } else {
    document.getElementById("glueDig_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 4

function area(){
  let n1 = parseInt(document.getElementById("area_n1").value),
    n2 = parseInt(document.getElementById("area_n2").value),
    valid = true,
    errMsg = "";
  if (isNaN(n1) && isNaN(n2)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    if(isNaN(n1)) {
      n1 = n2;
    }
    if(isNaN(n2)) {
      n2 = n1;
    }
    rez = n1*n2;
    document.getElementById("area_rez").innerText = rez;
  } else {
    document.getElementById("area_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 5

function summDel(a) {
  a = parseInt(a);
  let rez = a*(-1),
  i = a;
  while (i != 0) {
    if (a % i == 0) {
      rez += i;
    }
    i--;
  }
  return rez;
}

function perfDig(n){
  n = parseInt(n),
  d = summDel(n),
  rez = n==d?true:false;
  return rez;
}

//сделал только чтоб визуально выводилось для задачи :)

function perfD(){
  let n = parseInt(document.getElementById("perfD_n").value),
    valid = true,
    errMsg = "";
  if (isNaN(n)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    rez = perfDig(n);
    document.getElementById("perfD_rez").innerText = rez;
  } else {
    document.getElementById("perfD_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 6

function perfRange(){
  let n1 = parseInt(document.getElementById("perfRange_n1").value),
    n2 = parseInt(document.getElementById("perfRange_n2").value),
    valid = true,
    errMsg = "";
  if (isNaN(n1) || isNaN(n2)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = "",
    d = false,
    max = n1 > n2 ? n1 : n2,
    min = n1 < n2 ? n1 : n2;
    while(max >= min){
      d = perfDig(max);
      if(d==true){
        rez += max + ", ";
        document.getElementById("perfRange_rez").innerText = rez;
      }
      max--;
    }
  } else {
    document.getElementById("perfRange_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

// task 7 

const addZero = (n) => (n < 10 ? "0" + n : n);

function timeAddZero(h = 0, m = 0, s = 0) {
  n = addZero(h)+':'+addZero(m)+':'+addZero(s);
  return n;
}

function timeFnc(){
  let h = parseInt(document.getElementById("timeFnc_n1").value),
    m = parseInt(document.getElementById("timeFnc_n2").value),
    s = parseInt(document.getElementById("timeFnc_n3").value),
    valid = true,
    errMsg = "";
  if (isNaN(h) || isNaN(m) || isNaN(s)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = timeAddZero(h, m, s);
    document.getElementById("timeFnc_rez").innerText = rez;
  } else {
    document.getElementById("timeFnc_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

//task 8

function tTS(h = 0, m = 0, s = 0){
  n = h*3600+m*60+s;
  return n;
}

function timeToSecond(){
    let h = parseInt(document.getElementById("timeToSecond_n1").value),
    m = parseInt(document.getElementById("timeToSecond_n2").value),
    s = parseInt(document.getElementById("timeToSecond_n3").value),
    valid = true,
    errMsg = "";
  if (isNaN(h) || isNaN(m) || isNaN(s)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = tTS(h, m, s);
    document.getElementById("timeToSecond_rez").innerText = rez;
  } else {
    document.getElementById("timeToSecond_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

// task 9

function sTT(n){
  h = parseInt(n / 3600);
  m = parseInt(n / 60 - h * 60);
  s = parseInt(n / 60 * 100 % 100);
  n = timeAddZero(h, m, s);
  return n;
}

function secondToTime(){
  let n = parseInt(document.getElementById("secondToTime_n").value),
    valid = true,
    errMsg = "";
  if (isNaN(n)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    rez = sTT(n);
    document.getElementById("secondToTime_rez").innerText = rez;
  } else {
    document.getElementById("secondToTime_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}

// task 10

function timeDiff(){
  let h1 = parseInt(document.getElementById("timeDiff_n1").value),
    m1 = parseInt(document.getElementById("timeDiff_n2").value),
    s1 = parseInt(document.getElementById("timeDiff_n3").value),
    h2 = parseInt(document.getElementById("timeDiff_n4").value),
    m2 = parseInt(document.getElementById("timeDiff_n5").value),
    s2 = parseInt(document.getElementById("timeDiff_n6").value),
    valid = true,
    errMsg = "";
  if (isNaN(h1) || isNaN(m1) || isNaN(s1) || isNaN(h2) || isNaN(m2) || isNaN(s2)) {
    errMsg += "Enter number!";
    valid = false;
  }
  if (valid) {
    let rez = 0;
    let d1 = 0;
    let d2 = 0;
    let n = 0;
    d1 = tTS(h1, m1, s1);
    d2 = tTS(h2, m2, s2);
    n = Math.abs(d1 - d2);
    rez = sTT(n);
    document.getElementById("timeDiff_rez").innerText = rez;
  } else {
    document.getElementById("timeDiff_rez").innerHTML = `<span class="text-danger">${errMsg}</span>`;
  }
}