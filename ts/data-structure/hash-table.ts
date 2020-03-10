class HashTable {
  keyMap: string[][][];
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key: string): number {
    let total = 0;
    let value: number;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      if (!char) continue;
      value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: string) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }

  get(key: string): undefined | string {
    let index = this._hash(key);
    if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if (this.keyMap[index][i][0] === key) {
                return this.keyMap[index][i][1];
            }
        }
    }
    return undefined;
  }

  values(): string[] {
    let valueArr: string[] = [];

    for (let i = 0; i < this.keyMap.length; i++) {
        if (!this.keyMap[i]) {
            continue;
        }

        for (let j = 0; j < this.keyMap[i].length; j++) {
            if (valueArr.indexOf(this.keyMap[i][j][1]) === -1) {
                valueArr.push(this.keyMap[i][j][1]);
            }
        }
    }

    return valueArr;
  }

  keys(): string[] {
    let keyArr: string[] = [];

    for (let i = 0; i < this.keyMap.length; i++) {
        if (!this.keyMap[i]) {
            continue;
        }

        for (let j = 0; j < this.keyMap[i].length; j++) {
            if (keyArr.indexOf(this.keyMap[i][j][0]) === -1) {
                keyArr.push(this.keyMap[i][j][0]);
            }
        }
    }

    return keyArr;
  }

}

let ht = new HashTable();
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
ht.set("plum", "DOUBLE!!");
console.log(ht.get("yellow"));
console.log(ht.get("salmon"));
console.log(ht.get("plum"));
console.log(ht.values());
console.log(ht.keys());
ht.keys().forEach(function(key) {
    console.log(ht.get(key));
});