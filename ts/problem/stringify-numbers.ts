function stringifyNumbers(obj: object) {
    let newObj = JSON.parse(JSON.stringify(obj));

    for (let key in newObj) {
        let value = newObj[key];
        if (typeof value === 'object') {
            newObj[key] = stringifyNumbers(value);
        } else if (typeof value === 'number') {
            newObj[key] = value.toString();
        }
    }
    
    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
