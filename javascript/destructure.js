function sayStuff(object) {
  console.log(object.name)
  console.log(object.number)
}

sayStuff({
  name: 'YoloDog',
  number: 666
})

function destructuredSayStuff ({name, number}) {
  console.log(name)
  console.log(number)
}

destructuredSayStuff({
  name: 'YoloDog',
  number: 666
})
