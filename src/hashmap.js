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

  set(key, value) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) entry.key = value;
    }

    bucket.push({ key, value });
    this.itemCount++;
  }

  get(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) return entry.value;
    }

    return null;
  }

  length() {
    return this.itemCount;
  }

  has(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) return true;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    if (this.has(key)) {
      updatedBucket = bucket.filter((item) => item.key !== key);
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

  length() {
    return this.itemCount;
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
