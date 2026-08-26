export default class HashSet {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.itemCount = 0;
  }

  hash(item, capacity) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < item.length; i++) {
      hashCode = primeNumber * hashCode + item.charCodeAt(i);
      hashCode = capacity ? hashCode % capacity : hashCode;
    }

    return hashCode;
  }

  set(item) {
    const index = this.hash(item, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.item === item) return;
    }

    bucket.push(item);
    this.itemCount++;

    // Increase capacity on exceeding load factor
    if (this.itemCount >= this.capacity * this.loadFactor) {
      const items = this.items();

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

  has(item) {
    const index = this.hash(item, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry === item) return true;
    }

    return false;
  }

  remove(item) {
    const index = this.hash(item, this.capacity);
    const bucket = this.buckets[index];

    if (this.has(item)) {
      const updatedBucket = bucket.filter((item) => item !== item);
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

  values() {
    const items = [];

    this.buckets.forEach((bucket) => {
      bucket.forEach((item) => items.push(item));
    });

    return items;
  }
}
