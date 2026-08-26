export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.itemCount = 0;
  }

  hash(key, capacity) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = capacity ? hashCode % capacity : hashCode;
    }

    return hashCode;
  }

  bucket(key) {
    const index = this.hash(key, this.capacity);

    return this.buckets[index];
  }

  entry(key) {
    const bucket = this.bucket(key);

    for (let item of bucket) {
      if (item.key === key) return item;
    }

    return null;
  }

  growCapacity() {
    const items = this.entries();

    this.capacity = this.capacity * 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.itemCount = 0;

    items.forEach((item) => {
      if (item.length > 0) {
        this.set(item[0], item[1]);
      }
    });
  }

  set(key, value) {
    const bucket = this.bucket(key);
    const entry = this.entry(key);

    if (entry) {
      entry.key = value;
    } else {
      bucket.push({ key, value });
      this.itemCount++;
    }

    // Increase capacity on exceeding load factor
    if (this.itemCount >= this.capacity * this.loadFactor) {
      growCapacity();
    }
  }

  get(key) {
    const entry = this.entry(key);

    return entry ? entry.value : null;
  }

  length() {
    return this.itemCount;
  }

  has(key) {
    return !!this.entry(key);
  }

  remove(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    if (this.has(key)) {
      const updatedBucket = bucket.filter((item) => item.key !== key);
      this.buckets[index] = updatedBucket;
      this.itemCount--;
      return true;
    }

    return false;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.itemCount = 0;
  }

  keys() {
    const itemKeys = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((item) => {
        itemKeys.push(item.key);
      });
    });

    return itemKeys;
  }

  values() {
    const itemValues = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((item) => {
        itemValues.push(item.value);
      });
    });

    return itemValues;
  }

  entries() {
    const items = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((item) => {
        items.push([item.key, item.value]);
      });
    });

    return items;
  }
}
