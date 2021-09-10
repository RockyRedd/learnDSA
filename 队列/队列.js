class Queue {
  constructor() {
    this.items = []
  }
  enter(el) {
    return this.items.push(el)
  }
  out() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  length() {
    return this.items.length
  }
  toString() {
    return this.items.join()
  }
}