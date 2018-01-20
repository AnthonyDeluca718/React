function callTwice(func) {
  func()
  func()
}

class Dog {
  constructor(name) {
      this.name = name

      this.sayName = () => { console.log(this.name) }
  }

  // sayName() {
  //   console.log(this.name)
  // }
}

let sally = new Dog ('Sally')
sally.sayName()

callTwice(sally.sayName)
