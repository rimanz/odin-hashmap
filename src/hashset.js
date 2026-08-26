export default class HashSet {
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

  set(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) return;
    }

    bucket.push(key);
    this.itemCount++;

    // Increase capacity on exceeding load factor
    if (this.itemCount >= this.capacity * this.loadFactor) {
      const items = this.keys();

      this.capacity = this.capacity * 2;
      this.buckets = Array.from({ length: this.capacity }, () => []);
      this.itemCount = 0;

      items.forEach((item) => {
        if (item.length > 0) {
          this.set(item);
        }
      });
    }
  }

  length() {
    return this.itemCount;
  }

  has(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry === key) return true;
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key, this.capacity);
    const bucket = this.buckets[index];

    if (this.has(key)) {
      const updatedBucket = bucket.filter((item) => item !== key);
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
    const keys = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((key) => itemKeys.push(key));
    });

    return keys;
  }
}
