export default class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  sayHi() {
    return `holla, ${this.name}`
  }
}