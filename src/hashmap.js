import hash from "./hash";

export default class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.itemCount = 0;
  }

  set(key, value) {
    const index = hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) entry.key = value;
    }

    bucket.push({ key, value });
    this.itemCount++;
  }

  get(key) {
    const index = hash(key, this.capacity);
    const bucket = this.buckets[index];

    for (let entry of bucket) {
      if (entry.key === key) return entry.value;
    }

    return null;
  }

  length() {
    return this.itemCount;
  }
}
