// вариант 1
let n1 = prompt("Введите число, которое инициализирует счетчик"),
    n2 = prompt("Укажите шаг отсчета"),
    n3 = prompt("Укажите количество вызовов счетчика"),
    start = Number(n1),
    step = Number(n2),
    count = Number(n3);

if(!(start) && !(step) && !(count)){
    alert("Не все значения введены");
}

function Counter(step,count){
    var result = step + count;
    return result;
}

let r = start;
for(var i = 0; i <= count; i++){
    r = Counter(r, step);
    alert(r);
}


/*
// вариант 2
function Counter() {
    let r = (n1 + n2) * n3;
    return function Result() {
        return r++;
    };
}

let count = Counter();
alert(count());

//вариант 3
function Counter() {
    let r;
    return function Result() {
        for (r = n1; r < n3; n2++) {
            r++;
            return r;
        }
    };
}

let count = Counter();
alert(count());

*/