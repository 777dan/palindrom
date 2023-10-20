let arr = [
    "А роза упала на лапу Азора",
    "Ого",
    "А Собака боса",
    "Привет, мир",
    "А Собака боса",
    "Лёша на полке клопа нашёл",
    "Я — арка края",
];

function check(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replaceAll(" ", "").replaceAll("—", "").replaceAll(",", "");
    }
    let newArr = arr.filter(str => str.split("").reverse().join("") === str);
    return newArr;
}

console.log(check(arr));