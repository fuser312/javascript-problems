// Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

// get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// var cache = new LRUCache( 2 /* capacity */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4


class LruCache {
  constructor(capacity) {
    this.cache = {};
    this.capacity = capacity;
    this.lastOperatedKey = [];
  }

  get(currentKey) {
    if (!(currentKey in this.cache)) {

      return -1
    }
    else if (this.lastOperatedKey.includes(currentKey)) {
      this.lastOperatedKey.push(currentKey);
      this.lastOperatedKey.splice(this.lastOperatedKey.indexOf(currentKey), 1);
      return this.cache[currentKey];
    }
    else {
      this.lastOperatedKey.push(currentKey);
      return this.cache[currentKey];
    }
    return currentKey;

  }
  put(key, value) {
    if (Object.keys(this.cache).length < this.capacity) {
      this.cache[key] = value;
      this.lastOperatedKey.push(key);
    }
    else {
      delete this.cache[this.lastOperatedKey[0]];
      this.lastOperatedKey.splice(0, 1);

      this.cache[key] = value;
      this.lastOperatedKey.push(key);
    }
  }
}

var thisCache = new LruCache(2);
thisCache.put(1, 1);
console.log(thisCache.cache);
thisCache.put(2, 2);
console.log(thisCache.cache);
console.log(thisCache.get(1));
thisCache.put(5, 5);
console.log(thisCache.cache);
thisCache.put(3, 3);
console.log(thisCache.cache);
