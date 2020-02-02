type StringObj = {
    [key: string]: string | any;
};

function collectStrings(obj: StringObj): string[] {
    if (Object.keys(obj).length === 0) return [];

    let result: string[] = [];
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'object') {
            result = result.concat(collectStrings(value));
        } else if (typeof value === 'string') {
            result.push(value);
        }
    }

    return result;
}

const inputObj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
};

console.log(collectStrings(inputObj)); // ["foo", "bar", "baz"])
