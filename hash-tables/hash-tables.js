// hash function - works only with strings
const hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};

const hash2 = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};

class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, val) {
    const idx = this._hash(key);
    if (!this.keyMap[idx]) {
      this.keyMap[idx] = [];
    }
    this.keyMap[idx].push([key, val]);
  }

  get(key) {
    const idx = this._hash(key);
    if (this.keyMap[idx]) {
      for (let item of this.keyMap[idx]) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }
}

const hashTable = new HashTable();
